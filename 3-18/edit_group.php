<?php
	header("Content-Type:text/html;charset=utf-8");
	include "common.inc.php";
	$access_token = get_token();
	$url = "https://api.weixin.qq.com/cgi-bin/groups/update?access_token={$access_token}";
	$data = '{"group":{"id":106,"name":"2013级Java"}}';
	$result = https_request($url,$data);
	var_dump($result);