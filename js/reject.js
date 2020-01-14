window.onload = function rejectIEEdge(){
var userAgent = window.navigator.userAgent.toLowerCase();
if ( userAgent.indexOf( "msie" ) !== -1 || userAgent.indexOf( "trident" ) !== -1 || userAgent.indexOf( "edge" ) !== -1 ){
document.write("<h2>コンパス履歴書ジェネレーターは<br>Internet Explorer 及び Microsoft Edgeを<br>サポートしていません。<br>別のブラウザからアクセスしてください。</h2>");
}
}
