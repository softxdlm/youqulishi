<?php
	include 'common.inc.php';
	$token = get_token();
	$url = "https://api.weixin.qq.com/cgi-bin/groups/create?access_token={$token}";
	$data ='{"group":{"name":"2013级PHP"}}';
	$result = https_request($url,$data);
	var_dump($result);