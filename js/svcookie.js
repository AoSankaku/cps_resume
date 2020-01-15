//記入した内容をCookieに記録する
function saveToCookie(){

//保存した日時を記憶しておく（年、月、日、時、分）
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
if ( month < 10 ){
month = "0" + month;
}
var today = date.getDate();
if ( today < 10 ){
today = "0" + today;
}
var hours = date.getHours();
if ( hours < 10 ){
hours = "0" + hours;
}
var minutes = date.getMinutes();
if ( minutes < 10 ){
minutes = "0" + minutes;
}
var savedAt = year + "年" + month + "月"+ today +　"日 " + hours + "時" + minutes + "分" ;
//フォームの内容を取得する
var read = document.forms.info.read.value;
var name = document.forms.info.name.value;
var dl = document.forms.info.dl.value;
var rank = document.forms.info.rank.value;
//小数点対策済
var bronze = parseInt(document.forms.info.bronze.value);
var silver = parseInt(document.forms.info.silver.value);
var gold = parseInt(document.forms.info.gold.value);
var tournament = parseInt(document.forms.info.tournament.value);
//連絡先
var tw = document.forms.info.tw.value;
var dc = document.forms.info.dc.value;
var sp = document.forms.info.sp.value;
var fc = document.forms.info.fc.value;
//選択肢の内容もあらかじめロード
var heroB = document.getElementById("heroB");
var heroF = document.getElementById("heroF");
var heroBe = heroB.options;
var heroFe = heroF.options;

//■Cookieに書き込み
Cookies.set( 'read' , read );
Cookies.set( 'name' , name );
Cookies.set( 'dl' , dl );
Cookies.set( 'rank' , rank );
Cookies.set( 'heroB' , heroB );
Cookies.set( 'heroF' , heroF );
Cookies.set( 'heroBe' , heroBe );
Cookies.set( 'heroFe' , heroFe );
Cookies.set( 'bronze' , bronze );
Cookies.set( 'silver' , silver );
Cookies.set( 'gold' , gold );
Cookies.set( 'tournament' , tournament );
Cookies.set( 'tw' , tw );
Cookies.set( 'dc' , dc );
Cookies.set( 'sp' , sp );
Cookies.set( 'fc' , fc );
Cookies.set( 'savedAt' , savedAt );

//最後にアラート
alert("記入内容をCookieに保存しました！");
}


//読み込み時にキャッシュがあればフォームの内容を変更
window.onload = function loadFromCookie(){

//キャッシュの内容をロード
var read = Cookies.get( 'read' );
var name = Cookies.get( 'name' );
var dl = Cookies.get( 'dl' );
var rank = Cookies.get( 'rank' );
var heroB = Cookies.get( 'heroB' );
var heroF = Cookies.get( 'heroF' );
var heroBe = Cookies.get( 'heroBe' );
var heroFe = Cookies.get( 'heroFe' );
var bronze = Cookies.get( 'bronze' );
var silver = Cookies.get( 'silver' );
var gold = Cookies.get( 'gold' );
var tournament = Cookies.get( 'tournament' );
var tw = Cookies.get( 'tw' );
var dc = Cookies.get( 'dc' );
var sp = Cookies.get( 'sp' );
var fc = Cookies.get( 'fc' );
var savedAt = Cookies.get( 'savedAt' );

//キャッシュの日付が空文字列またはundefinedならキャッシュをロード
if ( savedAt !== undefined && savedAt !== "" && savedAt !== "undefined" ){
var load = confirm( "前回Cookieに保存した内容を読み込みますか？\n（保存日時：" + savedAt + "）" );
if ( load == true ){
//ここからキャッシュロード
	//文字列のみ
	document.getElementById( "read" ).value = read;
	document.getElementById( "name" ).value = name;
	document.getElementById( "bronze" ).value = bronze;
	document.getElementById( "silver" ).value = silver;
	document.getElementById( "gold" ).value = gold;
	document.getElementById( "tournament" ).value = tournament;
	document.getElementById( "tw" ).value = tw;
	document.getElementById( "dc" ).value = dc;
	document.getElementById( "sp" ).value = sp;
	document.getElementById( "fc" ).value = fc;
	//選択肢もロード
	document.getElementById("dl").value = dl;
	document.getElementById("rank").value = rank;
	
	
	//ヒーロー選択試験的実装
	for ( var i = 0, l = heroBe.length ; l > i ; i++ ) {
	if ( heroBe[i].selected ) {
	heroB[i].selected = true ;
	console.log( "selectedB" + i );
	} else { console.log( "skipped" + i ); }
	}
	for ( var i = 0, l = heroFe.length ; l > i ; i++ ) {
	if ( heroFe[i].selected ) {
	heroF[i].selected = true ;
	console.log( "selectedF" + i );
	} else { console.log( "skipped" + i ); }
	}
	

	
	//ヒーロー選択の中身を判定して選択
	/*
	for ( var i = 0 , l = heroBe.length ; l > i ; i++ ){
	if ( heroBe[i].selected ){
	document.getElementById("heroB").options[i].selected = true;
	}
	}
	for ( var i = 0 , l = heroFe.length ; l > i ; i++ ){
	if ( heroFe[i].selected ){
	document.getElementById("heroF").options[i].selected = true;
	}
	}
	*/


//最後にアラート
alert( "前回の入力内容を読み込みました。\n変更があるなら適用して「コンパス履歴書を生成する！」を押してください。" );
} else if ( load == false ){
//falseだった場合キャッシュを消去するかどうか聞く（elseifにしたのはundefinedに対応するため）
var del = confirm( "このサイトのCookieを削除しますか？\n（この操作は取り消せません）" );
if ( del == true ){
Cookies.remove( 'savedAt' );
alert( "このサイトのキャッシュを消去しました。" );
}
}
}
	
}
