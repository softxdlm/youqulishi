<meta charset="utf-8"/>
<!-- 新 Bootstrap 核心 CSS 文件 -->
<link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.2/css/bootstrap.min.css">

<!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->
<script src="http://cdn.bootcss.com/jquery/1.11.2/jquery.min.js"></script>

<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
<script src="http://cdn.bootcss.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
<?php
	include "conn.inc.php";	//连接数据库
	include 'common.inc.php'; //公共的函数,例如获得access_token,openid,curl
	//查询用户列表(user),并显示
	$sql = "select * from user";
	$result = mysql_query($sql);

	//一条一条的查询
	echo '<table class="table table-bordered">';
	echo '<caption style="text-align:center"><h1>微信用户列表</h1></caption>';
	while($row = mysql_fetch_assoc($result)){
		if($row['message']==1){	
			//说话了
			$bg = 'green';
		}else{
			//没有说话
			$bg = 'silver';
		}
		
		echo '<tr bgcolor='.$bg.'>';
		echo '<td><img src="'.$row['headimgurl'].'" width=60/></td>';
		echo '<td>'.$row['nickname'].'</td>';
		echo '<td>'.$row['province'].$row['city'].'</td>';
		echo '<td>'.date("Y-m-d H:i:s",$row['subtime']).'</td>';
		echo '<td><a href="message.php?openid='.$row['openid'].'">查看详情</a></td>';
		echo '</tr>';
	}
	echo '</table>';
?>