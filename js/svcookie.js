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
var heroB = document.getElementById("heroB");
var heroF = document.getElementById("heroF");
var heroBe = heroB.options;
var heroFe = heroF.options;
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
	
//■Cookieに書き込み
Cookies.set( 'read' , read );
Cookies.set( 'savedAt' , savedAt );



alert("記入内容をCookieに保存しました！");
}



window.onload = function loadFromCookie(){

var test = Cookies.get( 'read' );
var savedAt = Cookies.get( 'savedAt' )
var load = confirm("前回Cookieに保存した内容を読み込みますか？\n（保存した日時：" + savedAt + "）" );
if ( load == true ){
if ( test !== undefined || test !== "" ){
alert("前回の入力内容を読み込みました。" + test);
}
}

}
