<?php
	header("Content-Type:text/html;charset=utf-8");
/*		include 'common.inc.php';
	$access_token = get_token();

	$url = "https://api.weixin.qq.com/cgi-bin/groups/getid?access_token={$access_token}";
	$data = '{"openid":"ocoZAuDdpx0a85HXLRkV_DVjP7ow"}';
	$result = https_request($url,$data);
	var_dump($result);
*/	
	//查询分组列表

	include 'common.inc.php';
	$token = get_token();
	$url = "https://api.weixin.qq.com/cgi-bin/groups/get?access_token={$token}";
	$result = https_request($url);
	//var_dump($result);
	$arr = json_decode($result,true);
	echo '<ul>';
	foreach($arr['groups'] as $group){
		echo '<li>'.$group['name'].'('.$group['count'].')'.'--------'.$group['id'].'</li>';	
	}
	echo '</ul>';

	