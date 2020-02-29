//メンテナンス表示
window.addEventListener('load', function maintainance(){



//===============ここを変更する===============
//何もなし…"none"		=>何も表示しない
//メンテ予定…"planned"	=>青色で表示（デフォルト）
//メンテ中…"doing"		=>赤色で表示（CSSいじいじ）

var doingMaintainance = "doing";

var maintainanceStart = "3月1日 13:30";
var maintainanceEnd = "未定";

var updateContents 	= "【アップデート内容（予定）】<br>"
			+ "・フォントを選択可能にする機能の実装<br>"
			+ "・alert()で表示している警告ウィンドウをモーダルウィンドウに差し替え<br>"
			+ "・favicon.icoの差し替え<br>"
			+ "・一部履歴書に使用されている画像の差し替え<br>";





//メンテ中なら警告表示+タイトルを赤に
//
//何もなし…"none"		=>何も表示しない
//メンテ予定…"planned"	=>青色で表示（デフォルト）
//メンテ中…"doing"		=>赤色で表示（CSSいじいじ）

var str =[];
switch ( doingMaintainance ){
	case "none":	break;	

	case "planned":	
		str[1] = '<i class="fas fa-info-circle"></i> メンテナンス予告';
		str[2] = "以下の日程でメンテナンスを予定しています。";
		str[3] = "メンテナンス中のアクセスはお控えください。";
		str[4] = "maintainanceWarning";
		break;

	case "doing":
		str[1] = '<i class="fas fa-exclamation-triangle"></i> メンテナンス中';
		str[2] = "現在メンテナンス中です。";
		str[3] = "時間を置いてから再度アクセスしてください。";
		str[4] = "maintainanceError";
		break;
}



var titleColor = document.getElementById('titleColor');


if ( doingMaintainance !== "none" ){
	console.log('メンテナンス中');
	var maintainanceNotice 	= '<div class="box-title" id="maintainanceNotice">'
				+ str[1]
				+ "</div><p>"
	    			+ str[2]
	    			+ "<br>（"
				+ maintainanceStart
				+ "～"
				+ maintainanceEnd
				+ "）<br><br>"
				+ updateContents
				+ "<br>メンテナンス中に履歴書を作成すると予期せぬ挙動が発生する可能性があります。"
				+ str[3]
				+ "</p>";
	
	document.getElementById(str[4]).innerHTML = maintainanceNotice;
	titleColor.style.color = "#ff0000";
}

//ついでにスクリプトが有効ならフォームを表示する
var form1 = document.getElementById('form1');
var form2 = document.getElementById('form2');
form1.hidden = false;
form2.hidden = false;

}
);
