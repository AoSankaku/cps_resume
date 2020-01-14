window.onload = function rejectIEEdge(){
var userAgent = window.navigator.userAgent;
if ( userAgent.indexOf( "MSIE" ) != -1 || userAgent.indexOf( "Trident" ) != -1 || userAgent.indexOf( "Edge" ) != -1 ){
document.write("<h2>コンパス履歴書ジェネレーターは<br>Internet Explorer 及び Microsoft Edgeを<br>サポートしていません。<br>別のブラウザからアクセスしてください。</h2>");
}
}
