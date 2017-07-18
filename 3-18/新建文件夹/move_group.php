<?php
	header("Content-Type:text/html;charset=utf-8");
	include "common.inc.php";
	$access_token = get_token();
	$url = "https://api.weixin.qq.com/cgi-bin/groups/members/update?access_token={$access_token}";
	$data = '{"openid":"ocoZAuDdpx0a85HXLRkV_DVjP7ow","to_groupid":107}';
	https_request($url,$data);