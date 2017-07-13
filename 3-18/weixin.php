<?php
	define("TOKEN","twgdh");		//定义记号  token

	//使用这个类的成员，需要实例化对象
	$weChat = new Wechat();

	if(isset($_GET['echostr'])){		//is是否   set  设置 
		//验证是否合法
		$weChat->valid();
	}else{
		//只是收发消息
		$weChat->responseMsg();
	}
	//类 ：  模子
	//对象： 模子造出来的实物,身上有类的属性(形状---圆形、颜色----黄色、能吃、送礼、看人)
	class Wechat{
		//验证是否有效
		public function valid(){
			$echostr = $_GET['echostr'];
			if($this->checkSignature()){
				echo $echostr;
				exit;
			};
		}

		//收发消息
		public function responseMsg(){
			//接收微信服务器以POST方式发送过来的XML数据包 $_POST(普通文本)   $_FILES(图片)
			$postStr = $GLOBALS['HTTP_RAW_POST_DATA']; //和post一样一样的,用来接收特殊的数据格式
			//PHP处理XML格式的数据
			$postObj = simplexml_load_string($postStr);
			//根据发送的数据类型,分别做相应的处理
			$type = $postObj -> MsgType;
			switch($type){
				case "event":
					$result = $this->receiveEvent($postObj);
					break;
				case "text":
					$result = $this->receiveText($postObj);
					break;
				case "location":
					$result = $this->receiveLocation($postObj);
					break;
				case "image":
					$result = $this->receiveImage($postObj);
					break;
				case "voice":
					$result = $this->receiveVoice($postObj);   //接收语音消息
					break;
			}
			echo $result;
		}
		private function receiveVoice($object){
			include 'fenci.php';
			//如果开启语音识别功能就可以使用这个
			if(isset($object->Recognition) && !empty($object->Recognition)){
				$word = $object->Recognition;
				$arr = fenci($word);	
				
				//2. 根据城市名称获取 城市代号
				$cityCodes = getCityCode($arr);
				
				//3. 根据城市编号获取该城市的天气信息
				if(empty($cityCodes)){
					$content = "没有查找到".$word."的天气信息";
					$result = $this->zhuanhuanText($object,$content);
					return $result;
				}
				if(is_array($cityCodes) && !empty($cityCodes)){
					//file_put_contents('./log.txt','ok');
					$info = array();
					foreach($cityCodes as $code){
						$info = array_merge($info,getWeather($code));
					}
					$result = $this->zhuanhuanTuwen($object,$info);
				}
				
			}else{
				$content = array("MediaId"=>$object->MediaId);
				$result = $this->transmitVoice($object, $content);
			}
			return $result;
		}
		private function transmitVoice($object, $arr){
			$itemTpl = "<Voice>
<MediaId><![CDATA[%s]]></MediaId>
</Voice>";
			$item_str = sprintf($itemTpl,$arr['MediaId']);
			$xmlTpl = "<xml>
<ToUserName><![CDATA[%s]]></ToUserName>
<FromUserName><![CDATA[%s]]></FromUserName>
<CreateTime>%s</CreateTime>
<MsgType><![CDATA[voice]]></MsgType>
$item_str
</xml>";
			$result = sprintf($xmlTpl,$object->FromUserName, $object->ToUserName, time());
			return $result;
		}
		//粉丝关注事件
		private function receiveEvent($postObj){
			include 'common.inc.php';	//加载公共文件
			//用户一关注,获得用户的信息,并保存到用户表中
			$openid = $postObj->FromUserName;
			
			$userinfo = getUserInfo($openid);
			
			//将用户信息保存到数据库
			insertUser($userinfo);

			$eventType = $postObj->Event;
			switch($eventType){
				case "subscribe":
					$content = "
关注哥,可以更清楚的了解哥!
发送位置可以知道你的坐标;
发送单个文字可以查字典";
					break;
				case "unsubscribe":
					$content = "你就这么无情的把我抛弃了...";
					break;
			}
			$result = $this->zhuanhuanText($postObj,$content);
			return $result;
		}		
		//接收粉丝位置的功能
		private function receiveLocation($postObj){
			$content = "您的具体位置是: 纬度是:".$postObj->Location_X."经度是:".$postObj->Location_Y."更详细的位置信息是:".$postObj->Label."比例尺是:".$postObj->Scale;
			
			$result = $this->zhuanhuanText($postObj,$content);
			return $result;
		}

		//回复文本消息的功能
		private function receiveText($postObj){

			$keyword = $postObj->Content;
			include "common.inc.php";
			if(strstr($keyword,"你好")){
				$content = "你好，请问有什么可以帮助你吗?";
			}else{				
				include "zidian.php";
				$content = zidian($keyword);
			}
			
			//回复给粉丝的时候,也得回复xml格式的数据
			//转换成XML格式的数据,封装到一个函数中
			if(is_array($content)){
				$result = $this->zhuanhuanTuwen($postObj,$content);
			}
			$result = $this->zhuanhuanText($postObj,$content);
			return $result;
		}
		
		//将图文数组转换成XML数据
		private function zhuanhuanTuwen($postObj,$content){
			
			$itemTpl = "<item>
<Title><![CDATA[%s]]></Title> 
<Description><![CDATA[%s]]></Description>
<PicUrl><![CDATA[%s]]></PicUrl>
<Url><![CDATA[%s]]></Url>
</item>";
			$item_str = "";
			foreach($content as $item){
				$item_str .= sprintf($itemTpl,$item['Title'],$item['Description'],$item['PicUrl'],$item['Url']);
			}
			$xmlTpl = "<xml>
<ToUserName><![CDATA[%s]]></ToUserName>
<FromUserName><![CDATA[%s]]></FromUserName>
<CreateTime>%s</CreateTime>
<MsgType><![CDATA[news]]></MsgType>
<ArticleCount>%s</ArticleCount>
<Articles>
$item_str
</Articles>
</xml> ";
		$result = sprintf($xmlTpl,$postObj->FromUserName,$postObj->ToUserName,time(),count($content));
		return $result;
		}
		
		//转换成XML文本数据的功能
		private function zhuanhuanText($object,$str){
			$textTpl = "<xml>
<ToUserName><![CDATA[%s]]></ToUserName>
<FromUserName><![CDATA[%s]]></FromUserName>
<CreateTime>%s</CreateTime>
<MsgType><![CDATA[text]]></MsgType>
<Content><![CDATA[%s]]></Content>
</xml>";
			$result = sprintf($textTpl,$object->FromUserName,$object->ToUserName,time(),$str);
			return $result;
		}
	
		
		//校验签名signiture 是否正确
		private function checkSignature(){
		  $signature = $_GET["signature"];
		  $timestamp = $_GET["timestamp"];
		  $nonce = $_GET["nonce"];
		  $token = TOKEN;
		  $tmpArr = array($token, $timestamp, $nonce);
		  sort($tmpArr, SORT_STRING);
		  $tmpStr = implode( $tmpArr );
		  $tmpStr = sha1( $tmpStr );
		  if( $tmpStr == $signature ){
				 return true;
		  }else{
				 return false;
		  }
		}
	}