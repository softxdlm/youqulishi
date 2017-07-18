<meta charset="utf-8"/>
<!-- 新 Bootstrap 核心 CSS 文件 -->
<link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.2/css/bootstrap.min.css">

<!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->
<script src="http://cdn.bootcss.com/jquery/1.11.2/jquery.min.js"></script>

<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
<script src="http://cdn.bootcss.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
<style>
.form-control{width:30%}

</style>
<?php
	include "conn.inc.php";	//连接数据库
	include 'common.inc.php'; //公共的函数,例如获得access_token,openid,curl
	$openid = $_GET['openid'];
	
	//判断一下业务是点击详情之后跳转过来的，还是回复之后提交表单过来的
	if(isset($_POST['dosubmit'])){
		//通过表单提交的
		$sql = "insert into message values(null,'$openid','".$_POST['content']."',1,".time().",'text')";
		mysql_query($sql);
		
		//修改消息状态
		$sql = "update user set message = 0 where openid='{$openid}'";
		mysql_query($sql);

		//curl请求  客服接口
		$access_token = get_token();
		$url = "https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token={$access_token}";
		$data = '{"touser":"'.$openid.'","msgtype":"text","text":{"content":"'.$_POST['content'].'"}}';
		https_request($url,$data);
	}

	//查询信息列表,将聊天内容显示出来
	$sql = "select * from message where openid='$openid'";
	$result = mysql_query($sql);
	
	//查询user表用户的基本信息
	$user = getUserInfo($openid);
	echo '<table class="table table-bordered">';
	echo '<caption text-align="center" style="width:500px"><h2>聊天内容表</h2></caption>';
	while($row = mysql_fetch_assoc($result)){
		if($row['who']==0){
			echo '<tr align="left">';
			echo '<td><img src="'.$user['headimgurl'].'" width=60/>'.$user['nickname'].$row['content'].date('Y-m-d H:i:s',$row['ctime']).'</td>';
			echo '</tr>';
		}else{
			echo '<tr align="right">';
			echo '<td>公众号: &nbsp;'.$row['content'].date('Y-m-d H:i:s',$row['ctime']).'</td>';
			echo '</tr>';
		}
	}
	echo '</table>';
?>
<form action="message.php?openid=<?php echo $_GET['openid'];?>" method="post">
	<textarea name="content" class="form-control" rows="5"></textarea>
	<input type="submit" name="dosubmit" value="回复" class="btn"/>
</form>
<a href="userinfo.php">返回用户列表</a>