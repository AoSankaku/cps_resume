//メンテナンス表示
window.addEventListener('load', function maintainance(){



//===============ここを変更する===============
//何もなし…"none"		=>何も表示しない
//メンテ予定…"planned"	=>青色で表示（デフォルト）
//メンテ中…"doing"		=>赤色で表示（CSSいじいじ）

var doingMaintainance = "";

var maintainanceStart = "1月23日 17:00";
var maintainanceEnd = "未定";

var updateContents 	= "【アップデート内容（予定）】<br>"
			+ "・JavaScript、Cookieの許可状態に応じたメッセージの表示<br>"
			+ "・メンテナンス中のメッセージ、メンテナンス予告のメッセージの表示<br>"
			+ "・銅、銀、金、大会アイコン個数の数字フォントの実装<br>"
			+ "・「#コンパス履歴書ジェネレーター」のタグが付いたTweetを埋め込み表示<br>"
			+ "・一言コメントを書くスペースを追加<br>"
			+ "・「連絡先」項目において未入力の項目は隠して上に詰めるように修正<br>"
			+ "・フォントが確実にプレビューに描画されるように修正<br>"
			+ "・ローディング画面の実装<br>"
			+ "・プロフィール画像のアップロード<br>";





//メンテ中なら警告表示+タイトルを赤に
//
//何もなし…"none"		=>何も表示しない
//メンテ予定…"planned"	=>青色で表示（デフォルト）
//メンテ中…"doing"		=>赤色で表示（CSSいじいじ）

var str =[];
switch ( doingMaintainance ){
	case "none":	break;	

	case "planned":	
		str[1] = "メンテナンス予告";
		str[2] = "以下の日程でメンテナンスを予定しています。";
		str[3] = "メンテナンス中のアクセスはお控えください。";
		str[4] = "maintainanceWarning";
		break;

	case "doing":
		str[1] = "メンテナンス中";
		str[2] = "現在メンテナンス中です。";
		str[3] = "時間を置いてから再度アクセスしてください。";
		str[4] = "maintainanceError";
		break;
}



var titleColor = document.getElementById('titleColor');


if ( doingMaintainance != "none" ){
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
	console.log(str[4]);
	var msgBox = document.getElementById(str[4]);
	msgBox.innerHTML = maintainanceNotice;
	titleColor.style.color = "#ff0000";
}

//ついでにスクリプトが有効ならフォームを表示する
var form1 = document.getElementById('form1');
var form2 = document.getElementById('form2');
form1.hidden = false;
form2.hidden = false;

}
);
