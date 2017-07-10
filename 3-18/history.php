<?php
	function getHistoryInfo(){
		$url = "http://www.todayonhistory.com/";
		include "simple_html_dom.php";
		$html = file_get_html($url);	//从该文件中获得html dom对象(img p li a)
		if($html){
			//采集到内容了
			$content = $html->find('div[class="main"] ul[class="list clearfix"] li');
			$text = '历史上的'.date("m")."月".date("d")."日\n";
			foreach($content as $item){
				$text .= str_replace(date("m")."月".date("d")."日","",$item->plaintext)."\n";
			}
			return $text;
			$html->clear();
		}else{
			//未采集到
			return "今天历史上放假,没事";
		}
	}
