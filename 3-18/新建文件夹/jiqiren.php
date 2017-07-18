<?php
	//include "common.inc.php";
	function jiqiren($keyword){		
		$url = 'http://op.juhe.cn/robot/index?info='.urlencode($keyword).'&key=3e7645552651fd8988048745efb3510c';
		$result = https_request($url);
		$json_str = json_decode($result,true);
		$text = $json_str['result']['text'] ;		
		return $text;
		//var_dump($text);
	}
	//jiqiren('你好吗');
?>