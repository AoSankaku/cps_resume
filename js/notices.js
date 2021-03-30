//===============ここを変更する===============
//何もなし…"none"		=>何も表示しない
//メンテ予定…"planned"	=>青色で表示（デフォルト）
//メンテ中…"doing"		=>赤色で表示（CSSいじいじ）

var doingMaintainance = "none";

var maintainanceStart = "3月31日 00:30";
var maintainanceEnd = "3月31日 01:00";

var updateContents 	= "【アップデート内容（予定）】<br>"
			+ "・ヒーロー「ゲームバズーカガール（GBG）」「ライザリン・シュタウト（ライザ）」の追加<br>"
			//+ "・ローディング画面の実装<br>"
			//+ "・デザインコードを出力→内容を変更→コード読み込み　をするとデザインの中身が変わっていないにもかかわらず変更されたような挙動になる不具合を修正<br>"
			//+ "・デザインコードの末尾数文字を切り取ってもコードがロードされることがある不具合を修正<br>"
			//+ "・デザインコードのヘルプの文章を改善"
			//+ "・ページ読み込み速度の改善<br>"
			//+ "・ミニキャラ表示機能追加（ベータ）<br>"
			+ "<br>";





//メンテナンス表示                                                                                                                                                          
window.addEventListener('load', function maintainance(){

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
		str[3] = "時間を置いてから再度アクセスしてください。<br>メンテナンス中に行われた操作によって起きた不具合に関しては対応いたしかねます。";
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
				+ "<br>メンテナンス中は履歴書を作成することができません。"
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
