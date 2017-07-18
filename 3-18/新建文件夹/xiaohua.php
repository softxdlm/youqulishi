<?php
	header("Content-Type:text/html;charset=utf-8");
	function xiaohua(){
		include "conn.inc.php";
		$sql = "select * from pre_wuxin_service_joke  limit 1";
		$result = mysql_query($sql);
		$text = '';
		while($row = mysql_fetch_array($result)){
			if($row["content"]!=""){
				$text .= $row['content']."\n"."\n";
			}else{
				$text .= "笑话没有了！";	
			}
		}
		return $text;
		//var_dump($text);
	}
	//xiaohua();
?>