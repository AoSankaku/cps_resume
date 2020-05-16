//メンテナンス表示                                                                                                                                                          
window.addEventListener('load', function maintainance(){



//===============ここを変更する===============
//何もなし…"none"		=>何も表示しない
//メンテ予定…"planned"	=>青色で表示（デフォルト）
//メンテ中…"doing"		=>赤色で表示（CSSいじいじ）

var doingMaintainance = "planned";

var maintainanceStart = "5月18日 13:00";
var maintainanceEnd = "5月18日 23:00";

var updateContents 	= "【アップデート内容（予定）】<br>"
			//+ "・ローディング画面の実装<br>"
			+ "・ページ読み込み速度の改善<br>"
			+ "・フォントの読み込み状況の確認機能の実装<br>"
			+ "・シーズンランクが最高ランクより高い場合にエラーを出すように<br>"
			+ "・シーズンランクがS1以上にもかかわらず最高ランクが未設定の場合エラーを出すように<br>"
			+ "・最高ランクがA以下の場合はシーズンランクを選択不能に<br>"
			+ "・項目ごとにヘルプを追加<br>"
			+ "・ミニキャラ表示機能追加<br>"
			+ "・履歴書に掲載されるURLを短縮<br>"
			+ "・シェアボタンの改良・変更<br>"
			+ "・デザインプレビューウィンドウの追加<br>"
			+ "・背景を分類してわかりやすく設定できるように<br>"
			+ "・背景や色合いをわかりやすくするために簡易デザインプレビューを追加<br>";





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
