<?php
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

	//获得access_token
	function get_token(){
		$appid = "wx589062be9c4257aa";
		$secret = "eb73d9946b978bdaedc5a847f96b97f9";
		$url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={$appid}&secret={$secret}";
		$json_str = https_request($url);
		$json_arr = json_decode($json_str,true);
		return $json_arr['access_token'];
	}

	//getUserInfo('ocoZAuDdpx0a85HXLRkV_DVjP7ow');
	
	//获得用户的基本信息,通过openid获得
	function getUserInfo($openid){
		$access_token = get_token();
		$url = "https://api.weixin.qq.com/cgi-bin/user/info?access_token={$access_token}&openid={$openid}&lang=zh_CN";
		$json_str = https_request($url);
		$json_arr = json_decode($json_str,true);
		return $json_arr;
	}

	//将用户的基本信息保存到数据表
	function insertUser($userinfo){
		include "conn.inc.php";
		$sql = "insert into user values(null,'".$userinfo['openid']."','".$userinfo['nickname']."',{$userinfo['sex']},'".$userinfo['city']."','".$userinfo['province']."','".$userinfo['headimgurl']."',".time().",0)";
		mysql_query($sql);
	}
?>