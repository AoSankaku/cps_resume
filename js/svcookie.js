//記入した内容をCookieに記録する
//フォームの内容を取得する
function saveToCookie(){

var read = document.forms.info.read.value;
var name = document.forms.info.name.value;
var dl = document.forms.info.dl.value;
var rank = document.forms.info.rank.value;
//小数点対策済
var bronze = parseInt(document.forms.info.bronze.value);
var silver = parseInt(document.forms.info.silver.value);
var gold = parseInt(document.forms.info.gold.value);
var tournament = parseInt(document.forms.info.tournament.value);

//■Cookieに書き込み
Cookies.set( 'read' , read );



alert("記入内容をCookieに保存しました！");
}



window.onload = function loadFromCookie(){

var test = Cookies.get( 'read' );
if ( test !== undefined ){
alert("前回の入力内容を読み込みました。" + test);
}

}