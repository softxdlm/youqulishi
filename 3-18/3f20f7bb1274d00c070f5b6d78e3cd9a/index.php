<?php
/**
 * 微信公众平台-天气预报功能源代码
 * ================================
 * Copyright 2013-2014 David Tang
 * http://www.cnblogs.com/mchina/
 * 乐思乐享微信论坛
 * http://www.joythink.net/
 * ================================
 * Author:David|唐超
 * 个人微信：mchina_tang
 * 公众微信：zhuojinsz
 * Date:2013-10-12
 */

//define your token

define("TOKEN", "123456");
require('wx_sample.php');

$wechatObj = new wechatCallbackapiTest();
//$wechatObj->valid();

if (isset($_GET['echostr'])) {     //验证微信
   		 $wechatObj->valid();
	}
	else{                     //回复消息
   		 $wechatObj->responseMsg();
	}

class wechatCallbackapiTest
{
	public function valid()
    {
        $echoStr = $_GET["echostr"];

        //valid signature , option
        if($this->checkSignature()){
        	echo $echoStr;
        	exit;
        }
    }

    public function responseMsg()
    {
		//get post data, May be due to the different environments
		$postStr = $GLOBALS["HTTP_RAW_POST_DATA"];

      	//extract post data
		if (!empty($postStr)){
                
              	$postObj = simplexml_load_string($postStr, 'SimpleXMLElement', LIBXML_NOCDATA);
				$RX_TYPE = trim($postObj->MsgType);

				switch($RX_TYPE)
				{
					case "text":
						$resultStr = $this->handleText($postObj);
                       // $resultStr='你哈哦';
						break;
					case "event":
						$resultStr = $this->handleEvent($postObj);
						break;
					default:
						$resultStr = "";
						break;
				}
				echo $resultStr;
        }else {
        	echo "";
        	exit;
        }
    }

	public function handleText($postObj)
	{
        $url="http://api.jisuapi.com/zidian/word?appkey=afa0a592f8f651e2&word=".$postObj->Content;
        $contentStr=json_encode(translate($postObj->Content,'zh','en')['trans_result'][0]['dst']);
        
   			$output = file_get_contents($url);        
        
        $contentStr.=$output;
        $resultStr=$this->responseText($postObj,$contentStr);
       
        return $resultStr;

	}

	public function handleEvent($object)
	{
		$contentStr = "";
        switch ($object->Event)
        {
            case "subscribe":
                $contentStr = "";
                break;
			default :
				$contentStr = "";
				break;
        }
        $resultStr = $this->responseText($object, $contentStr);
        return $resultStr;
    }
    
    public function responseText($object, $content, $flag=0)
    {
        $textTpl = "<xml>
					<ToUserName><![CDATA[%s]]></ToUserName>
					<FromUserName><![CDATA[%s]]></FromUserName>
					<CreateTime>%s</CreateTime>
					<MsgType><![CDATA[text]]></MsgType>
					<Content><![CDATA[%s]]></Content>
					<FuncFlag>%d</FuncFlag>
					</xml>";
        $resultStr = sprintf($textTpl, $object->FromUserName, $object->ToUserName, time(), $content, $flag);
        return $resultStr;
    }

	private function weather($n){
		include("weather_cityId.php");
		$c_name=$weather_cityId[$n];
		if(!empty($c_name)){
			$json=file_get_contents("http://m.weather.com.cn/data/".$c_name.".html");
			return json_decode($json);
		} else {
			return null;
		}
	}

	private function checkSignature()
	{
        $signature = $_GET["signature"];
        $timestamp = $_GET["timestamp"];
        $nonce = $_GET["nonce"];	
        		
		$token = TOKEN;
		$tmpArr = array($token, $timestamp, $nonce);
		sort($tmpArr);
		$tmpStr = implode( $tmpArr );
		$tmpStr = sha1( $tmpStr );
		
		if( $tmpStr == $signature ){
			return true;
		}else{
			return false;
		}
	}
}

?>