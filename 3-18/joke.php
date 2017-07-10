<?php
	//include "common.inc.php";
	function joke(){
		$a = rand(1,10);
		$url = 'http://japi.juhe.cn/joke/content/list.from?key=877d3e3decd40fec7f26d452abf4948f&page='.$a.'&pagesize='.$a.'&sort=asc&time=1418745237';
		$result = https_request($url);
		$json_str = json_decode($result,true);
		$text = '';
		foreach($json_str['result']['data'] as $item){
			$text .= $item['content']."\n"."\n";
		}
		return $text;
		//var_dump($text);
	}
	//joke();
?>