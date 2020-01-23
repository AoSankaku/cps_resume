//メンテナンス表示
window.addEventListener('load', function maintainance(){

//メンテ中なら警告表示+タイトルを赤に
var doingMaintainance = true;

var titleColor = document.getElementById('titleColor');
var maintainanceStart = "1月23日 17:00";
var maintainanceEnd = "未定";
var updateContents 	= "【アップデート内容】<br>"
			+ "・JavaScript、Cookieの許可状態に応じたメッセージの表示<br>"
			+ "・メンテナンス中のメッセージの表示<br>"
			+ "・プロフィール画像のアップロード<br>";
if ( doingMaintainance == true ){
	console.log('メンテナンス中');
	var maintainanceNotice 	= '<div class="box-title">メンテナンス中</div><p>現在メンテナンス中です<br>（'
				+ maintainanceStart
				+ "～"
				+ maintainanceEnd
				+ "）<br>"
				+ updateContents
				+ "<br>メンテナンス中に履歴書を作成すると予期せぬ挙動が発生する可能性があります。時間を置いてからアクセスしてください。</p>";
	document.getElementById('maintainance').innerHTML = maintainanceNotice;
	titleColor.style.color = "#ff0000";
	}
	
//スクリプトが有効ならフォームを表示する
var form1 = document.getElementById('form1');
var form2 = document.getElementById('form2');
form1.hidden = false;
form2.hidden = false;

}
)
