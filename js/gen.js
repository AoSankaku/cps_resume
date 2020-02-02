//画像をプリロード
var img = [];
img[0] = new Image();
img[0].src = "img/attacker.png";
img[1] = new Image();
img[1].src = "img/gunner.png";
img[2] = new Image();
img[2].src = "img/sprinter.png";
img[3] = new Image();
img[3].src = "img/tank.png";
img[4] = new Image();
img[4].src = "img/twitter.png";
img[5] = new Image();
img[5].src = "img/discord.png";
img[6] = new Image();
img[6].src = "img/skype.png";
img[7] = new Image();
img[7].src = "img/compass.png";
img[8] = new Image();
img[8].src = "img/fukidashi.png";
//プロ画用
img[9] = new Image();

//キャンバス用に変数宣言
const can = document.getElementById('result');
const ctx = can.getContext('2d');





//プロフィール画像のアップロード
document.querySelector('input[type="file"]').onchange = function loadImg(){
	let profileImg = this.files[0];
	let reader = new FileReader();
	reader.readAsDataURL(profileImg);
	reader.onload = function() {
		drawImage(reader.result);
	}
}



function drawImage(url) {
	img[9].src = url;
	img[9].onload = () => {
		ctx.beginPath();
		//一瞬描いてすぐ消す
		ctx.drawImage(img[9], 620, 100);
		ctx.clearRect( 0, 0, can.width, can.height )	
	}
}





//描画処理本体
function preview(){

//バージョン
var version = "v1.0.0 Beta";

//デバッグ用
var debugCan = 0 ;

//作成年月日を取得する
var date = new Date();
var year = date.getFullYear();
//このツールの公開は2020年なのでそれより時刻が前ならエラーを吐く
if ( year < 2020 ){
	errorMsg += "お使いの端末の時間設定が不正です。\n";
}
var month = date.getMonth() + 1;
if ( month < 10 ){
	month = "0" + month;
}
var today = date.getDate();
if ( today < 10 ){
	today = "0" + today;
}

var createdAt = year + "年" + month + "月"+ today +"日 作成";


//フォームの内容を取得する
var read = document.forms.info.read.value;
var name = document.forms.info.name.value;
var dl = document.forms.info.dl.value;
var rank = document.forms.info.rank.value;
var heroB = document.getElementById("heroB");
var heroF = document.getElementById("heroF");
var heroBe = heroB.options;
var heroFe = heroF.options;
//使用ヒーロー用
var atkUseB = "";
var gunUseB = "";
var sprUseB = "";
var tanUseB = "";
var atkUseF = "";
var gunUseF = "";
var sprUseF = "";
var tanUseF = "";
//エラー用
/*現在不使用
var atkDuplicate = 0;
var gunDuplicate = 0;
var sprDuplicate = 0;
var tanDuplicate = 0;
*/
var duplicate = 0;
var duplicateId = "";
//小数点対策済
var bronze = parseInt(document.forms.info.bronze.value);
var silver = parseInt(document.forms.info.silver.value);
var gold = parseInt(document.forms.info.gold.value);
var tournament = parseInt(document.forms.info.tournament.value);
//連絡先と一言
var tw = document.forms.info.tw.value;
var dc = document.forms.info.dc.value;
var sp = document.forms.info.sp.value;
var fc = document.forms.info.fc.value;
var cm = document.getElementById('comment').value;

//以下デザイン用
var profilePic = new Image();
var profilePicSize = document.forms.design.profilePicSize.value;
var bgTheme = new Image();
var bgColor = document.forms.design.bgColor.value;
var fontColor = document.forms.design.fontColor.value;
var selectedFont = document.forms.design.font.value;

//フォームに不備があったときのエラーメッセージ用
var errorMsg = "";

//■履歴書枠組み、項目の描画■
//注意:変数canとctxの宣言はHTMLに記述


//リセット
ctx.beginPath();

//背景描画
ctx.fillStyle = bgColor;
ctx.fillRect(0,0,900,1300);
//表題(フォントはWebフォントの「M PLUS 1p」、「Noto Sans JP」を試用)
//基本的にはNoto Sans JPを使用する
ctx.lineWidth = 7;
ctx.fillStyle = "#ffa500";
ctx.font = "36px 'Noto Sans JP'";
ctx.fillText("#コンパス履歴書ジェネレーター " + version , 15 , 48 );

//外枠描画
ctx.strokeStyle = "#000000";
ctx.strokeRect(15,60,870,1170);

//名前とよみがなを描画
ctx.lineWidth = 3;
ctx.fillStyle = "#000000";
//左側のHN、よみを描く
ctx.font = "28px 'Noto Sans JP'";
ctx.fillText("よみ", 40 , 110 );
ctx.font = "55px 'Noto Sans JP'";
ctx.fillText(" HN ", 15 , 205 );

//横線四本
ctx.fillStyle = "rgb(0,0,0)";
ctx.fillRect(15,123,870,1);
ctx.fillStyle = "rgb(0,0,0)";
ctx.fillRect(15,230,870,3);
ctx.fillStyle = "rgb(0,0,0)";
ctx.fillRect(15,410,870,3);
ctx.fillStyle = "rgb(0,0,0)";
ctx.fillRect(15,890,870,3);

//デキレ、ランク、アイコン所持数
ctx.font = "28px 'Noto Sans JP'";
ctx.fillText("最高デッキレベル", 30 , 270 );
ctx.font = "28px 'Noto Sans JP'";
ctx.fillText("最高ランク", 283 , 270 );
ctx.font = "28px 'Noto Sans JP'";
ctx.fillText("銅・銀・金・大会アイコン", 490 , 270 );

var boxX = 465;
var boxXAdd = 110;
var boxY = 310;

ctx.lineWidth = 14;
ctx.strokeStyle = "#ac6b25";
ctx.strokeRect( boxX, boxY, 82, 82);
ctx.lineWidth = 5;
ctx.strokeStyle = "#ffffff";
ctx.strokeRect( boxX, boxY, 82, 82);

boxX += boxXAdd;
ctx.lineWidth = 14;
ctx.strokeStyle = "#c0c0c0";
ctx.strokeRect( boxX, boxY, 82, 82);
ctx.lineWidth = 5;
ctx.strokeStyle = "#ffffff";
ctx.strokeRect( boxX, boxY, 82, 82);

boxX += boxXAdd;
ctx.lineWidth = 14;
ctx.strokeStyle = "#ffd700";
ctx.strokeRect( boxX, boxY, 82, 82);
ctx.lineWidth = 5;
ctx.strokeStyle = "#ffffff";
ctx.strokeRect( boxX, boxY, 82, 82);

boxX += boxXAdd;
ctx.lineWidth = 14;
ctx.strokeStyle = "#553592";
ctx.strokeRect( boxX, boxY, 82, 82);
ctx.lineWidth = 5;
ctx.strokeStyle = "#ffffff";
ctx.strokeRect( boxX, boxY, 82, 82);

//縦線二本
ctx.fillStyle = "#000000";
ctx.fillRect(268,230,2,180);
ctx.fillStyle = "#000000";
ctx.fillRect(430,230,2,180);

//使用ヒーロー
ctx.font = "28px 'Noto Sans JP'";
ctx.fillText("使用ヒーロー　※()内は練習中orフリバのみ", 30 , 470 );
//ロールアイコンは条件でうすくなるので描画は下で
//同時に画像アイコンも読み込む
var atkImg = new Image();
var gunImg = new Image();
var sprImg = new Image();
var tanImg = new Image();
var twImg = new Image();
var dcImg = new Image();
var spImg = new Image();
var cpImg = new Image();
var fkImg = new Image();
atkImg.src = img[0].src;
gunImg.src = img[1].src;
sprImg.src = img[2].src;
tanImg.src = img[3].src;
twImg.src = img[4].src;
dcImg.src = img[5].src;
spImg.src = img[6].src;
cpImg.src = img[7].src;
fkImg.src = img[8].src;

//連絡先とアイコン
ctx.fillStyle = "#000000";
ctx.font = "28px 'Noto Sans JP'";
ctx.fillText("連絡先など", 30 , 930 );
//連絡先アイコンは内容に応じて省略をするため後から描画

ctx.fillStyle = "#000000";
//一番下に注意書きなど
ctx.globalAlpha = 0.5 ;
ctx.font = "20px 'Noto Sans JP'";
ctx.fillText("この履歴書は「コンパス履歴書ジェネレーター」で作成されました。　　製作者:@Ao_Sankaku", 10 , 1260 );
ctx.fillText("コンパス履歴書ジェネレーター:https://www.リンクがここに来る.github.io", 10 , 1285 );
ctx.globalAlpha = 1.0 ;




//■最終処理■内容をフォームの内容で埋める
//プロフィール画像を指描画
var profilePicScale;
switch (profilePicSize) {
	case "10x" : profilePicScale = 167; break;
	case "09x" : profilePicScale = 150; break;
	case "08x" : profilePicScale = 133; break;
	case "07x" : profilePicScale = 117; break;
}

ctx.drawImage( img[9], 714, 63, profilePicScale, profilePicScale);

//■指定色
ctx.fillStyle = fontColor;

ctx.lineWidth = 4;
ctx.font = "40px 'monospace'";
var readWidth = ctx.measureText(read).width;
if ( readWidth >= 584 ){
	errorMsg += "よみがなが長すぎます。このまま出力するとよみがながプロフィール画像に重なります。\n";
}
if ( read == "" ){
	errorMsg += "よみがなが入力されていません。\n";
}
ctx.fillText(read, 130 , 110 );
//名前を描画したときの幅を判定してある程度自動調整
if ( name == "" ){
	errorMsg += "HNが入力されていません。\n";
}
ctx.lineWidth = 6;
ctx.font = "bold 72px 'monospace'";
var nameWidth = ctx.measureText(name).width;
if ( nameWidth >= 575 ){
	ctx.font = "bold 50px 'monospace'";
	nameWidth = ctx.measureText(name).width;
	if ( nameWidth >= 584 ){
		errorMsg += "HNが長すぎます。このまま出力するとHNがプロフィール画像に重なります。\n";
	}
}
ctx.fillText(name, 130 , 205 );

//デキレを描画
//デキレによって分岐
ctx.font = "95px 'Heebo'";
ctx.textAlign = "center";
if (dl >= 210){
	ctx.strokeStyle = "#ffbbbb";
} else if (dl >= 170){
	ctx.strokeStyle = "#ffcccc";
} else if (dl >= 130){
	ctx.strokeStyle = "#ffdddd";
} else if (dl >= 90){
	ctx.strokeStyle = "#eedddd";
} else {
	ctx.strokeStyle = "#dddddd";
}
ctx.lineWidth = 9;
ctx.strokeText(dl, 147 , 380 );
ctx.lineWidth = 8;
ctx.fillText(dl, 147 , 380 );

//ランクを描画
ctx.lineWidth = 9;
ctx.font = "bold 95px 'Heebo'";
//ランクによってグラデーションを変化
var grad = ctx.createLinearGradient(0,335,0,380);
switch (rank) {
case "F":
case "E":
case "D":
case "C":
case "B":
case "A":
grad.addColorStop(0,'#f7c717');
grad.addColorStop(1,'#f7c717');
break;

case "S1":
case "S2":
case "S3":
grad.addColorStop(0,'#f7c717');
grad.addColorStop(1,'#fcea98');
break;

case "S4":
case "S5":
case "S6":
grad.addColorStop(0,'#f7c717');
grad.addColorStop(1,'#ed9300');
break;

case "S7":
case "S8":
case "S9":
grad.addColorStop(0,'#f7c717');
grad.addColorStop(1,'#ee82ee');
break;
}
ctx.fillStyle = grad;
ctx.fillText(rank, 355 , 380 );
ctx.fillStyle = "#000000";
ctx.lineWidth = 4;
ctx.strokeStyle = "#000000";
ctx.strokeText(rank, 355 , 380 );

//金銀銅大会アイコンの所持数を表示
//先にエラーチェック
//エラーチェック(99超えてないか)
if ( bronze > 99 ){
	errorMsg += "銅アイコンの個数の値が不正です。\n";
}
if ( silver > 99 ){
	errorMsg += "銀アイコンの個数の値が不正です。\n";
}
if ( gold > 99 ){
	errorMsg += "金アイコンの個数の値が不正です。\n";
}
if ( tournament > 99 ){
	errorMsg += "大会優勝アイコンの個数の値が不正です。\n";
}
//エラーチェック(0未満でないか)
if ( bronze < 0 ){
	errorMsg += "銅アイコンの個数の値が0未満です。値は0として扱われます。\n";
}
if ( silver < 0 ){
	errorMsg += "銀アイコンの個数の値が0未満です。値は0として扱われます。\n";
}
if ( gold < 0 ){
	errorMsg += "金アイコンの個数の値が0未満です。値は0として扱われます。\n";
}
if ( tournament < 0 ){
	errorMsg += "大会優勝アイコンの個数の値が0未満です。値は0として扱われます。\n";
}
//金銀銅アイコンの数を描画
//ただし各項目0の場合ハイフンを表示
ctx.fillStyle = fontColor;
ctx.lineWidth = 4;
var iconY = 370;
if ( bronze < 1 ){
	ctx.globalAlpha = 0.4;
	ctx.font = "57px 'Noto Sans JP'";
	ctx.fillText("-", 516 , iconY );
} else {
	ctx.globalAlpha = 1.0;
	ctx.font = "bold 57px 'Noto Sans JP'";
	ctx.fillText( bronze , 516 , iconY );
}
if ( silver < 1 ){
	ctx.globalAlpha = 0.4;
	ctx.font = "57px 'Noto Sans JP'";
	ctx.fillText("-", 618 , iconY );
} else {
	ctx.globalAlpha = 1.0;
	ctx.font = "bold 57px 'Noto Sans JP'";
	ctx.fillText( silver , 618 , iconY );
}
if ( gold < 1 ){
	ctx.globalAlpha = 0.4;
	ctx.font = "57px 'Noto Sans JP'";
	ctx.fillText("-", 720 , iconY );
} else {
	ctx.globalAlpha = 1.0;
	ctx.font = "bold 57px 'Noto Sans JP'";
	ctx.fillText( gold , 720 , iconY );
}
if ( tournament < 1 ){
	ctx.globalAlpha = 0.4;
	ctx.font = "57px 'Noto Sans JP'";
	ctx.fillText("-", 822 , iconY );
} else {
	ctx.globalAlpha = 1.0;
	ctx.font = "bold 57px 'Noto Sans JP'";
	ctx.fillText( tournament , 822 , iconY );
}
//中央揃えを左揃えに、色をユーザー指定にリセット
ctx.textAlign = "left";
ctx.fillStyle = fontColor;
ctx.globalAlpha = 1.0;
//先に使用ヒーローを取得して描画
//バトアリ検索
for ( var temp1 , i = 0 , l = heroBe.length ; l > i ; i++ ){
if ( heroBe[i].selected ){
temp1 = heroBe[i].value;
//エラーチェック用
duplicateId += temp1 + ",";
switch (temp1){
//アタッカー
case "noho"	:atkUseB += "ノホ ";	break;
case "omi"	:atkUseB += "忠臣 ";	break;
case "maru"	:atkUseB += "マルコス ";	break;
case "soru"	:atkUseB += "ソル ";	break;
case "ryu"	:atkUseB += "リュウ ";	break;
case "maria"	:atkUseB += "マリア ";	break;
case "adam"	:atkUseB += "アダム ";	break;
case "rem"	:atkUseB += "レム ";	break;
case "kai"	:atkUseB += "カイ ";	break;
case "poro"	:atkUseB += "ポロロッチョ ";	break;
case "rivai"	:atkUseB += "リヴァイ ";	break;
case "deru"	:atkUseB += "デルミン ";	break;
case "alter"	:atkUseB += "セイバーオルタ ";	break;
//ガンナー
case "ririka"	:gunUseB += "リリカ ";	break;
case "ruchi"	:gunUseB += "ルチアーノ ";	break;
case "matoi"	:gunUseB += "まとい ";	break;
case "dizzy"	:gunUseB += "ディズィー ";	break;
case "thir"	:gunUseB += "サーティーン ";	break;
case "emi"	:gunUseB += "エミリア ";	break;
case "megu"	:gunUseB += "メグメグ ";	break;
case "rin"	:gunUseB += "リン ";	break;
case "isu"	:gunUseB += "イスタカ ";	break;
case "sone"	:gunUseB += "ソーン ";	break;
case "neko"	:gunUseB += "猫宮ひなた ";	break;
case "okarin"	:gunUseB += "岡部倫太郎 ";	break;
case "giru"	:gunUseB += "ギルガメ ";	break;
//スプリンター
case "atari"	:sprUseB += "アタリ ";	break;
case "void"	:sprUseB += "Voidoll ";	break;
case "tesla"	:sprUseB += "テスラ ";	break;
case "miku"	:sprUseB += "ミク ";	break;
case "koku"	:sprUseB += "コクリコ ";	break;
case "chun"	:sprUseB += "春麗 ";	break;
case "yuusha"	:sprUseB += "かけだし勇者 ";	break;
case "zakurei"	:sprUseB += "ザクレイ ";	break;
case "kirara"	:sprUseB += "きらら ";	break;
case "aqua"	:sprUseB += "アクア ";	break;
case "layer"	:sprUseB += "零夜 ";	break;
//タンク
case "jus"	:tanUseB += "ジャスティス ";	break;
case "jan"	:tanUseB += "ジャンヌ ";	break;
case "gust"	:tanUseB += "グスタフ ";	break;
case "vio"	:tanUseB += "ヴィオレッタ ";	break;
case "ren"	:tanUseB += "レン ";	break;
case "mono"	:tanUseB += "モノクマ ";	break;
case "min"	:tanUseB += "めぐみん ";	break;
case "thomas"	:tanUseB += "トマス ";	break;
}
}
}
//フリバ・練習中検索
for ( var temp2 , i = 0 , l = heroFe.length ; l > i ; i++ ){
if ( heroFe[i].selected ){
temp2 = heroFe[i].value;
//先に重複エラーチェック(各ロールごとにやる)
if ( duplicateId.indexOf( temp2 ) != -1 ){
duplicate += 1;
}
switch (temp2){
//アタッカー
case "noho"	:atkUseF += "ノホ ";	break;
case "omi"	:atkUseF += "忠臣 ";	break;
case "maru"	:atkUseF += "マルコス ";	break;
case "soru"	:atkUseF += "ソル ";	break;
case "ryu"	:atkUseF += "リュウ ";	break;
case "maria"	:atkUseF += "マリア ";	break;
case "adam"	:atkUseF += "アダム ";	break;
case "rem"	:atkUseF += "レム ";	break;
case "kai"	:atkUseF += "カイ ";	break;
case "poro"	:atkUseF += "ポロロッチョ ";	break;
case "rivai"	:atkUseF += "リヴァイ ";	break;
case "deru"	:atkUseF += "デルミン ";	break;
case "alter"	:atkUseF += "セイバーオルタ ";	break;
//ガンナー
case "ririka"	:gunUseF += "リリカ ";	break;
case "ruchi"	:gunUseF += "ルチアーノ ";	break;
case "matoi"	:gunUseF += "まとい ";	break;
case "dizzy"	:gunUseF += "ディズィー ";	break;
case "thir"	:gunUseF += "サーティーン ";	break;
case "emi"	:gunUseF += "エミリア ";	break;
case "megu"	:gunUseF += "メグメグ ";	break;
case "rin"	:gunUseF += "リン ";	break;
case "isu"	:gunUseF += "イスタカ ";	break;
case "sone"	:gunUseF += "ソーン ";	break;
case "neko"	:gunUseF += "猫宮ひなた ";	break;
case "okarin"	:gunUseF += "岡部倫太郎 ";	break;
case "giru"	:gunUseF += "ギルガメ ";	break;
//スプリンター
case "atari"	:sprUseF += "アタリ ";	break;
case "void"	:sprUseF += "Voidoll ";	break;
case "tesla"	:sprUseF += "テスラ ";	break;
case "miku"	:sprUseF += "ミク ";	break;
case "koku"	:sprUseF += "コクリコ ";	break;
case "chun"	:sprUseF += "春麗 ";	break;
case "yuusha"	:sprUseF += "かけだし勇者 ";	break;
case "zakurei"	:sprUseF += "ザクレイ ";	break;
case "kirara"	:sprUseF += "きらら ";	break;
case "aqua"	:sprUseF += "アクア ";	break;
case "layer"	:sprUseF += "零夜 ";	break;
//タンク
case "jus"	:tanUseF += "ジャスティス ";	break;
case "jan"	:tanUseF += "ジャンヌ ";	break;
case "gust"	:tanUseF += "グスタフ ";	break;
case "vio"	:tanUseF += "ヴィオレッタ ";	break;
case "ren"	:tanUseF += "レン ";	break;
case "mono"	:tanUseF += "モノクマ ";	break;
case "min"	:tanUseF += "めぐみん ";	break;
case "thomas"	:tanUseF += "トマス ";	break;
}
}
}
//重複があったらエラー
if ( duplicate != 0 ){
errorMsg += "「バトアリ使用キャラ」と「フリバト&練習キャラ」から重複して選択しているヒーローが" + duplicate + "体います。\n" ;
}

//キャラ描画
ctx.font = "34px 'monospace'";
ctx.globalAlpha = 1.0 ;
ctx.fillText( atkUseB , 120 , 520 );
if ( atkUseF != "" ){
	ctx.globalAlpha = 0.7 ;
	ctx.fillText( "(" + atkUseF.slice(0,-1) + ")" , 120 , 555 );
}
ctx.globalAlpha = 1.0 ;
ctx.fillText( gunUseB , 120 , 620 );
if ( gunUseF != "" ){
	ctx.globalAlpha = 0.7 ;
	ctx.fillText( "(" + gunUseF.slice(0,-1) + ")" , 120 , 655 );
}
ctx.globalAlpha = 1.0 ;
ctx.fillText( sprUseB , 120 , 720 );
if ( sprUseF != "" ){
	ctx.globalAlpha = 0.7 ;
	ctx.fillText( "(" + sprUseF.slice(0,-1) + ")" , 120 , 755 );
}
ctx.globalAlpha = 1.0 ;
ctx.fillText( tanUseB , 120 , 820 );
if ( tanUseF != "" ){
	ctx.globalAlpha = 0.7 ;
	ctx.fillText( "(" + tanUseF.slice(0,-1) + ")" , 120 , 855 );
}
//各ロールごとにロールアイコンの薄さを調整
//バトアリにいる→1.0
//フリバ練習のみ→0.5
//バトアリフリバ両方いない→0.2
ctx.globalAlpha = 1.0 ;
if ( atkUseB == "" ){
	ctx.globalAlpha = 0.5 ;
	if ( atkUseF == "" ) {
		ctx.globalAlpha = 0.1 ;
	}
}
ctx.drawImage( atkImg , 30 , 490 , 80 , 80 );
ctx.globalAlpha = 1.0 ;
if ( gunUseB == "" ){
	ctx.globalAlpha = 0.5 ;
	if ( gunUseF == "" ) {
		ctx.globalAlpha = 0.1 ;
	}
}
ctx.drawImage( gunImg , 30 , 590 , 80 , 80 );
ctx.globalAlpha = 1.0 ;
if ( sprUseB == "" ){
	ctx.globalAlpha = 0.5 ;
	if ( sprUseF == "" ) {
		ctx.globalAlpha = 0.1 ;
	}
}
ctx.drawImage( sprImg , 30 , 690 , 80 , 80 );
ctx.globalAlpha = 1.0 ;
if ( tanUseB == "" ){
	ctx.globalAlpha = 0.5 ;
	if ( tanUseF == "" ) {
		ctx.globalAlpha = 0.1 ;
	}
}
ctx.drawImage( tanImg , 30 , 790 , 80 , 80 );
//最後に透明度リセット
ctx.globalAlpha = 1.0 ;
//使用ヒーローが0体の場合アラート
if ( atkUseB + atkUseF + gunUseB + gunUseF + sprUseB + sprUseF + tanUseB + tanUseF == "" ){
	errorMsg += "使用ヒーローが一体も選択されていません。\n";
}
//連絡先エラーチェック
//Twitter…16文字を超えたらエラー
//	    あと@で始まってなかったら勝手につける
//	    ついでに全角@も半角にする
//Discord…最後が#nnnnで終わらなければエラー
//	     ついでに#が全角なら半角にする
//Skype…6文字以上32文字以下、超えたらエラー
//フレンドコード…10桁の数字以外はエラー

//Twitter
tw.replace(/＠/g,"@");
var twAt = tw.startsWith("@");
if ( twAt == false ){
tw = "@" + tw;
}
var twLength = tw.length;
if ( twLength > 17 ){
errorMsg += "Twitter IDが長すぎます。\n";
}
//先頭の@を切り取り半角英数と_以外が含まれていた場合エラーを吐く
var twSlice = tw.slice(1);
twSlice = ( twSlice == null )?"":twSlice;
if ( !twSlice.match(/^[A-Za-z0-9_]*$/) ){
errorMsg += "Twitter IDは半角英数と_(アンダースコア)のみ使用できます。\n";
}

//Discord
var dcTag = dc.slice(-5);
if ( dc != "" ){
if ( !dcTag.match(/^#\d{4}/) ){
errorMsg += "Discord名は名前の最後に「#」と4桁の数字からなるタグが必要です(例:ユーザー名#1234)。\n";
}
}

//Skype
var spLength = sp.length;
if ( spLength != 0 ){
if ( spLength > 32 ){
errorMsg += "Skype IDが長すぎます。\n";
}
if ( spLength < 6 ){
errorMsg += "Skype IDが短すぎます。\n";
}
}
sp = ( sp == null )?"":sp;
if ( !sp.match(/^[A-Za-z0-9_,.-]*$/) ){
errorMsg += "Skype IDは半角英数と一部記号( - , . _ )のみ使用できます。\n";
}

//フレンドコード
if ( fc != "" ){
if ( !fc.match(/^\d{10}$/) ){
errorMsg += "フレンドコードには10桁の数字のみ入力できます(フレンドコードはコンパスアプリから確認できます)。\n";
}
}



ctx.font = "24px 'monospace'";
//連絡先描画
//入力がない項目は省略するので関数を組み上に詰める
var contactY = 948;
const plus1 = 28;
const plus2 = 17;
const cmFontSize = 24 + 2;

//連絡先アイコン描画
if ( tw != "@" ){
	ctx.drawImage( twImg , 30 , contactY , 40 , 40 );
	contactY += plus1;
	ctx.fillText( tw , 87 , contactY );
	contactY += plus2;
}
if ( dc != "" ){
	ctx.drawImage( dcImg , 30 , contactY , 40 , 40 );
	contactY += plus1;
	ctx.fillText( dc , 87 , contactY );
	contactY += plus2;
}
if ( sp != "" ){
	ctx.drawImage( spImg , 30 , contactY , 40 , 40 );
	contactY += plus1;
	ctx.fillText( sp , 87 , contactY );
	contactY += plus2;
}
if ( fc != "" ){
	ctx.drawImage( cpImg , 30 , contactY , 40 , 40 );
	contactY += plus1;
	ctx.fillText( fc , 87 , contactY );
	contactY += plus2;
}
//コメントは複数行にわたる場合があるのでfor文で処理
if ( cm != "" ){
	ctx.drawImage( fkImg , 30 , contactY , 40 , 40 );
	contactY += plus1;
	for ( let line = "", lines = cm.split( '\n' ), i = 0, l = lines.length; l > i ; i++ ){
		line = lines[i];
		ctx.fillText( line , 87 , contactY );
		contactY += cmFontSize;
	}
}

//日付
ctx.font = "20px 'Noto Sans JP'";
ctx.fillText( createdAt , 680 , 1216 );



//入力に何かしら不備があった場合アラート
if ( errorMsg != "" ){
alert("【入力エラー】\n" + errorMsg);
}


//web上なら正常に動作するので画像変換ここに復活
can.hidden = true;
var base64 = can.toDataURL('image/jpeg');
document.getElementById("newImg").src = base64;


}






