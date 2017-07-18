<?php
	function getDream($keyword){
		include "conn.inc.php";
		$sql = "select * from dream where title like '%".$keyword."%'";
		$result = mysql_query($sql);
		$text = '';
		while($row = mysql_fetch_array($result)){
			if($row["content"]!=""){
				$text .= $row['content'];
			}else{
				$text .= "";	
			}
		}
		return $text;
	}