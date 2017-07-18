<?php
	// include "common.inc.php";
	function zidian($keyword){		
		$url = 'http://api.jisuapi.com/zidian/word?appkey=01db46945b676650&word='.urlencode($keyword);
		$result = https_request($url);
		$json_str = json_decode($result,true);
		$text = "查询的文字：".$json_str['result']['name']."\n"."拼音：".$json_str['result']['pinyin']."\n"."笔画:".$json_str['result']['bihua']."\n"."部首:".$json_str['result']['bushou']."\n"."结构:".$json_str['result']['jiegou']."\n"."翻译:".implode(',', $json_str['result']['english'])."\n\n";
		foreach($json_str['result']['explain'] as $val)
		{
		    $text .= "拼音:".$val['pinyin']."\n"."注释:".strip_tags($val['content'])."\n\n";
		}

		return $text;
		// var_dump($text);
	}
	// zidian('好');
?>