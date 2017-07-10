<?php
	function getAccessToken(){
		$AppId = "wx589062be9c4257aa";
		$AppSecret = "eb73d9946b978bdaedc5a847f96b97f9";
		$Url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={$AppId}&secret={$AppSecret}";

		$result = file_get_contents($Url);
		$arr = json_decode($result,true);//将字符串转化成数组
		return $arr["access_token"];//返回Access_token的值
	}
	$accessToken = getAccessToken();
	$url = "https://api.weixin.qq.com/cgi-bin/menu/create?access_token={$accessToken}";
	$data = <<<AAA
			{
    "button": [
        {
            "name": "菜单", 
            "sub_button": [
            {
                "type": "view", 
                "name": "测试", 
                "url":"http://123.56.131.9/wsc/public_html/index.php"
            }, 
            {
                "type": "view", 
                "name": "视频", 
                "url":"http://v.qq.com"
            },
   	{
                "type": "click", 
                "name": "请点赞", 
                "key":"V1001_GOOD"
            },
         	{ 
         	     "name": "发送位置", 
                 "type": "location_select", 
                 "key": "rselfmenu_2_0"
         	}
            ]
        }, 
        {
            "name": "发图", 
            "sub_button": [
                {
                    "type": "pic_sysphoto", 
                    "name": "系统拍照发图", 
                    "key": "rselfmenu_1_0", 
                   "sub_button": [ ]
                 }, 
                {
                    "type": "pic_photo_or_album", 
                    "name": "拍照或者相册发图", 
                    "key": "rselfmenu_1_1", 
                    "sub_button": [ ]
                }, 
                {
                    "type": "pic_weixin", 
                    "name": "微信相册发图", 
                    "key": "rselfmenu_1_2", 
                    "sub_button": [ ]
                }
            ]
        }, 
        {  
        	"name": "作品", 
            "sub_button": [
            {
                "type": "view", 
                "name": "河北软件职业技术学院", 
                "url":"http://softxdlm.sinaapp.com/gerenzuopin/hebei/index.html"
            }, 
            {
                "type": "view", 
                "name": "火车时刻表查询", 
                "url":"http://softxdlm.sinaapp.com/gerenzuopin/liecheshikebiao/index.html"
            },
   	{
                 "type": "view", 
                "name": "好家橱柜", 
                "url":"http://softxdlm.sinaapp.com/gerenzuopin/haojiachugui/index.html"
            },
            {
                 "type": "view", 
                "name": "美食餐饮", 
                "url":"http://123.56.131.9/canyin/index.html"
            }              	
            ]
        }
    ]
}
AAA;
	http_request($url,$data);
	function http_request($url,$data){
		$ch = curl_init();
		curl_setopt($ch,CURLOPT_URL,$url);
		curl_setopt($ch,CURLOPT_POST,1);
		curl_setopt($ch,CURLOPT_HEADER,0);
		curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
		curl_setopt($ch,CURLOPT_POSTFIELDS,$data);
		$return = curl_exec($ch);
		curl_close($ch);
	}
?>