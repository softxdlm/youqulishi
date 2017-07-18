<?php
	//中文分词
	function fenci($text){
		$text = iconv("UTF-8", "GBK//IGNORE", $text);
		$text = urlencode($text);
		$result = file_get_contents("http://123.56.131.9:1985/?w=".$text);
		$result = iconv("GBK", "UTF-8//IGNORE", $result); 
		//file_put_contents('./key.txt',$result);
		$arr = explode(" ",$result);			//"请问 附近 有 吃 霸王餐 的 地方 吗 ?"
		//$string = implode(",",$arr);			//"请问,附近,有,吃,霸王餐,的,地方,吗,?"
		return $arr;
	}

	//封装curl请求
	function https_request($url,$data=null){
		$ch = curl_init();	//初始化
			curl_setopt($ch,CURLOPT_URL,$url);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);//返回值是保存起来还是显示呢 1表示保存返回的结果
			curl_setopt($ch, CURLOPT_SSL_VERIFYHOST,false);
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER,false);
			
			if(!empty($data)){
				// post数据
				curl_setopt($ch,CURLOPT_POST,1);
				// post的变量
				curl_setopt($ch,CURLOPT_POSTFIELDS,$data);
			}
			
			$output = curl_exec($ch);	//执行
			curl_close($ch);			//关闭
			return $output;
	}

	//根据城市名称获取城市代码
	function getCityCode($citys){
		$city = '';
		foreach($citys as $item){
			$city .= "'".$item."',";
		}
		$city = rtrim($city,",");
		include 'conn.inc.php';
		$sql = "select cityCode from city where cityName in ($city)";
		
		$result = mysql_query($sql);
		
		$arr = array();
		while($row = mysql_fetch_assoc($result)){
			$arr[] = $row['cityCode'];
		}
		return $arr;
	}
	
	//根据查询的城市代码查询天气情况
	function getWeather($code){
		$url = "http://apistore.baidu.com/microservice/weather?cityid=".$code;
		$result = https_request($url);
		$weather = json_decode($result,true);
		$info = $weather['retData'];
		$msg = $info['city']."的天气情况";
		
		$content[] = array('Title'=>$msg,'Description'=>'','PicUrl'=>'','Url'=>'');
		
		$subTitle = "日期: ".$info['date']."\r\n"."天气:".$info["weather"]."\r\n"."最低气温:".$info['l_tmp']."\r\n"."最高气温:".$info['h_tmp'];
	
		$content[] = array('Title'=>$subTitle,'Description'=>'','PicUrl'=>'','Url'=>'');
		return $content;
	}
?>