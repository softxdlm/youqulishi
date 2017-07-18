<?php
	include "common.inc.php";
	$access_token = get_token();
	$url = "https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token={$access_token}";
	$data = '{"action_name": "QR_LIMIT_SCENE", "action_info": {"scene": {"scene_id": 107}}}';
	$result = https_request($url,$data);

	//ticket
	$arr = json_decode($result,true);
	$ticket = $arr['ticket'];

	$url = "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=".UrlEncode($ticket)."";
	
	$downname = '123.jpg';
	header("Content-Type: application/force-download");
	header("Content-Disposition: attachment; filename=$downname");//$downname是下载后的文件名
	readfile($url);//$imgname是你要下载的图片的路径