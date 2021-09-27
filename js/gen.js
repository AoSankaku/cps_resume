//履歴書本体バージョンを定義
var version = "v1.0.12";
//ページタイトル(h1を書き換える)
document.getElementById('title').innerText = version;
//デバッグ用
var dnum = 0;





//ヒーローロール特定用関数
function detectRole(name){
	switch(name){
		
		case "ノホ":
		case "忠臣":
		case "マルコス":
		case "ソル":
		case "リュウ":
		case "マリア":
		case "アダム":
		case "レム":
		case "カイ":
		case "ポロロッチョ":
		case "リヴァイ":
		case "デルミン":
		case "セイバーオルタ":
		case "ルルカ":
		case "アイズ":
		case "甘色":
		case "ノクト":
		case "イグニス":
		return "attacker";	break;
		
		//ガンナー
		case "リリカ":
		case "ルチアーノ":
		case "まとい":
		case "ディズィー":
		case "サーティーン":
		case "エミリア":
		case "メグメグ":
		case "リン":
		case "イスタカ":
		case "ソーン":
		case "猫宮":
		case "オカリン":
		case "ギルガメッシュ":
		case "ニーズヘッグ":
		case "芥川龍之介":
		case "GBG":
		case "アインズ":
		return "gunner";	break;

		//スプリンター
		case "アタリ":
		case "Voidoll":
		case "テスラ":
		case "ミク":
		case "コクリコ":
		case "春麗":
		case "勇者":
		case "ザクレイ":
		case "きらら":
		case "アクア":
		case "零夜":
		case "ピエール":
		case "中島敦":
		case "ジョーカー":
		return "sprinter";	break;

		//タンク
		case "ジャスティス":
		case "ジャンヌ":
		case "グスタフ":
		case "ヴィオレッタ":
		case "レン":
		case "モノクマ":
		case "めぐみん":
		case "トマス":
		case "忠信":
		case "ライザ":
		case "アリス":
		return "tank";	break;

	}
}





function convRank( rankName ){
	switch( rankName ){
		case "F":	return -5;
		case "E":	return -4;
		case "D":	return -3;
		case "C":	return -2;
		case "B":	return -1;
		case "A":	return 0;
		default:	return rankName.slice( 1, 2 );
	}
}






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
img[10] = new Image();
img[10].src = "img/cps_guild.png";
//プロ画用
img[9] = new Image();
var profilePicName = '<i class="fas fa-folder-open"></i> （ファイルを選択）';
//背景用
img[11] = new Image();
img[12] = new Image();
var bgPicName = '<i class="fas fa-folder-open"></i> （ファイルを選択）';

//変数だけ宣言
var atkImg = new Image();
var gunImg = new Image();
var sprImg = new Image();
var tanImg = new Image();
var twImg = new Image();
var dcImg = new Image();
var spImg = new Image();
var cpImg = new Image();
var fkImg = new Image();
var guImg = new Image();

//画像ソースが読み込まれたら代入
img[0].onload = function(){
	atkImg.src = img[0].src;
}
img[1].onload = function(){
	gunImg.src = img[1].src;
}
img[2].onload = function(){
	sprImg.src = img[2].src;
}
img[3].onload = function(){
	tanImg.src = img[3].src;
}
img[4].onload = function(){
	twImg.src = img[4].src;
}
img[5].onload = function(){
	dcImg.src = img[5].src;
}
img[6].onload = function(){
	spImg.src = img[6].src;
}
img[7].onload = function(){
	cpImg.src = img[7].src;
}
img[8].onload = function(){
	fkImg.src = img[8].src;
}
img[10].onload = function(){
	guImg.src = img[10].src;
}

//キャンバス用に変数宣言
const can = document.getElementById( 'result' );
const ctx = can.getContext( '2d' );

//プロフィール画像リサイズ・フォント読み込み用Canvas（HTML非表示）
const can2 = document.getElementById( 'profilePicResize' );
const ctx2 = can2.getContext( '2d' );

//デザインプレビューウィンドウ用
const can3 = document.getElementById( 'designPreview' );
const ctx3 = can3.getContext( '2d' );


ctx3.fillStyle = "#cdcdcd";
ctx3.fillRect( 0, 0, can3.width, can3.height );
ctx3.lineWidth = 7;
ctx3.strokeStyle = "#222222";
ctx3.strokeRect( 15, 15, can3.width - 30, can3.height - 30 );
ctx3.fillStyle = "#000000";
ctx3.textAlign = "center";
ctx3.font = "38px 'Noto Sans JP'";
ctx3.fillText( "タップしてデザインをプレビュー", can3.width / 2, 115 );


//ダウンロード用
var base64Result = "";





//文字数カウント用
function getLen(str){
	let result = 0;
	for( let i = 0; i < str.length; i++ ){
		let chr = str.charCodeAt(i);
		if((chr >= 0x00 && chr < 0x81) || (chr === 0xf8f0) || (chr >= 0xff61 && chr < 0xffa0) || (chr >= 0xf8f1 && chr < 0xf8f4)){
			//半角文字の場合は1を加算
			result += 1;
		}else{
			//それ以外の文字の場合は2を加算
			result += 2;
		}
	}
	//結果を返す
	return result;
}





//フォントをプリロード（描いてすぐ消す）
function preloadFonts( targetFont, mode ){
	if ( mode == 'default' ){
		ctx.font = "5px '" + targetFont + "'";
		ctx.fillText( "S1234567890よみHN最高デッキレベルランク銅・銀金大会アイコン使用ヒーロ　※( )内は練習中orフリバの連絡先など年月日作成こ履歴書「コンパスジェネレタv.Beta」で作成されました。https://bit.ly/cps_rireki", 0, 5 );
	} else if ( typeof read !== 'undefined' ) {
		ctx.font = "5px '" + targetFont + "'";
		ctx.fillText( document.forms.info.read.value
		+document.forms.info.name.value
		+document.forms.info.dl.value
		+document.forms.info.rank.value
		+document.forms.info.tw.value
		+document.forms.info.dc.value
		+document.forms.info.sp.value
		+document.forms.info.fc.value
		+document.forms.info.guild.value
		+document.getElementById('comment').value ,0 ,5 );
		
		for (let i = 0, ele = document.getElementById('heroB') ; i < ele.length; i++ ){
			ctx.fillText( ele[i].text , 0, 5 );
		}
	}
	ctx.clearRect( 0, 0, 900, 1300 );
}





//先に必ず使用するフォントをロード
preloadFonts( 'Noto Sans JP', 'default' );
preloadFonts( 'Heebo', 'default' );





//プロ画用
document.getElementById( "profilePic" ).addEventListener( "change", function(){
	let profileImg = this.files[0];
	if ( profileImg == undefined ){
		//選択がキャンセルされたならボタンの名前をProfilePicNameに変更
		document.getElementById('fileName1').innerHTML = profilePicName;
		return;
	}
	let reader = new FileReader();
	reader.readAsDataURL(profileImg);
	reader.onload = function() {
		drawImage(reader.result);
	}
});



function drawImage(dataurl) {
	img[9].src = dataurl;
	img[9].onload = () => {
		ctx2.beginPath();
		//一瞬描いてすぐ消す
		ctx2.drawImage(img[9], 620, 100);
		ctx2.clearRect( 0, 0, can2.width, can2.height );
		
		//次にボタンの名前をファイル名にする
		let maxNameLength = 24;
		
		let files = document.getElementById('profilePic').files;
		let fileName = files[0].name;
		let extention = fileName.slice( fileName.lastIndexOf( '.' ) );
		let fileNameWoEx = fileName.slice( 0, fileName.lastIndexOf( '.' ) );
		let fileNameLength = getLen( fileNameWoEx );
		let result = "";
		
		if ( fileNameLength > maxNameLength ){
			result = fileNameWoEx.slice( 0, 15 ) + "…" + fileNameWoEx.slice( -7 ) + extention;
		} else {
			result = fileName;
		}
		
		//アイコン追加してファイル名を表示
		result = '<i class="fas fa-image"></i> ' + result;
		document.getElementById('fileName1').innerHTML = result;
		
		//Cookie保存用
		profilePicName = result;
		
		//onChangeが動かないのでここから関数を実行
		onChangeForms();
		
	}
}





//背景用
document.getElementById( "bg" ).addEventListener( "change", function(){
	let bgImg = this.files[0];
	if ( bgImg == undefined ){
		//選択がキャンセルされたならボタンの名前をProfilePicNameに変更
		document.getElementById('fileName2').innerHTML = bgPicName;
		return;
	}
	let reader = new FileReader();
	reader.readAsDataURL(bgImg);
	document.getElementById('bgtheme').value = "custom";
	reader.onload = function() {
		drawImage2(reader.result);
	}
});



function drawImage2(dataurl) {
	img[12].src = dataurl;
	img[12].onload = () => {
		ctx2.beginPath();
		//一瞬描いてすぐ消す
		ctx2.drawImage(img[12], 620, 100);
		ctx2.clearRect( 0, 0, img[12].width, img[12].height );
		
		//次にボタンの名前をファイル名にする
		let maxNameLength = 24;
		
		let files = document.getElementById('bg').files;
		let fileName = files[0].name;
		let extention = fileName.slice( fileName.lastIndexOf( '.' ) );
		let fileNameWoEx = fileName.slice( 0, fileName.lastIndexOf( '.' ) );
		let fileNameLength = getLen( fileNameWoEx );
		let result = "";
		
		if ( fileNameLength > maxNameLength ){
			result = fileNameWoEx.slice( 0, 15 ) + "…" + fileNameWoEx.slice( -7 ) + extention;
		} else {
			result = fileName;
		}
		
		//アイコン追加してファイル名を表示
		result = '<i class="fas fa-image"></i> ' + result;
		document.getElementById('fileName2').innerHTML = result;
		
		//Cookie保存用
		bgPicName = result;
		
		//onChangeが動かないのでここから関数を実行
		onChangeForms();
		
	}
}





//プロフィール画像の名前を返すだけの関数
function queryProfilePicName(){
	return profilePicName;
}


function queryProfilePicData(){
	return img[9].src;
}


//描画処理本体
function preview(){

//生成した年月日を取得する
let date = new Date();
let year = date.getFullYear();
//このツールの公開は2020年なのでそれより時刻が前ならエラーを吐く
if ( year < 2020 ){
	errorMsg += "・お使いの端末の時間設定が不正です。\n";
}
let month = date.getMonth() + 1;
if ( month < 10 ){
	month = "0" + month;
}
let today = date.getDate();
if ( today < 10 ){
	today = "0" + today;
}

let createdAt = year + "年" + month + "月"+ today +"日 作成";


//フォームの内容を取得する
let read = document.forms.info.read.value;
let name = document.forms.info.name.value;
let dl = document.forms.info.dl.value;
let rank = document.forms.info.rank.value;
let seasonRank = document.forms.info.seasonRank.value;
let heroB = document.getElementById("heroB");
let heroF = document.getElementById("heroF");
let heroBe = heroB.options;
let heroFe = heroF.options;
//使用ヒーロー用
let atkUseB = "";
let gunUseB = "";
let sprUseB = "";
let tanUseB = "";
let atkUseF = "";
let gunUseF = "";
let sprUseF = "";
let tanUseF = "";
//エラー用
let duplicate = "";

//小数点対策済
let bronze = parseInt(document.forms.info.bronze.value);
let silver = parseInt(document.forms.info.silver.value);
let gold = parseInt(document.forms.info.gold.value);
let tournament = parseInt(document.forms.info.tournament.value);
//連絡先とギルドと一言
let tw = document.forms.info.tw.value;
let dc = document.forms.info.dc.value;
let sp = document.forms.info.sp.value;
let fc = document.forms.info.fc.value;
let guild = document.forms.info.guild.value;
let cm = document.getElementById('comment').value;

//以下デザイン用
let profilePic = new Image();
let profilePicSize = document.forms.design.profilePicSize.value;
let bgTheme = document.forms.design.bgtheme.value;
let bgTrans = document.forms.design.bgTrans.value;
let bgColor = document.forms.design.bgColor.value;
let defaultColor = document.forms.design.defaultColor.value;
let fontColor = document.forms.design.fontColor.value;
let selectedFont = document.forms.design.font.value;
let userFont = " 'monospace'";

//グラデーション用
let grad = ctx.createLinearGradient(0,335,0,380);

//フォームに不備があったときのエラーメッセージ用
let errorMsg = "";

//■履歴書枠組み、項目の描画■
//注意:変数canとctxの宣言はHTMLに記述


//リセット
ctx.beginPath();
ctx.textAlign = "left";

//背景描画
ctx.fillStyle = bgColor;
ctx.fillRect(0,0,900,1300);
//背景は繰り返しがあるので回数を判定してがんばる
if ( bgTheme !== "monotone" ){
	let imgNum = 11;
	if ( bgTheme == "custom" ){
		imgNum = 12;
	}
	let canX = can.width;
	let canY = can.height;
	let bgthemeX = img[imgNum].naturalWidth;
	let bgthemeY = img[imgNum].naturalHeight;
	let timesX = 0;
	let timesY = 0;
	ctx.globalAlpha = bgTrans;
	
	//繰り返して描画する
	while ( canY > timesY * bgthemeY ){
		
		//xとyが0の時は抜ける
		if ( img[imgNum].naturalWidth == 0 || img[imgNum].naturalHeight == 0 ){
			errorMsg += "・背景の描画が正常に行われませんでした。（" + bgthemeX + "-" + bgthemeY + "）\n　もう一度生成してください。\n";
			break;
		}
		
		for ( let i = 0, l = canX / bgthemeX; l > i; i++ ){
			ctx.drawImage( img[imgNum] , timesX * bgthemeX , timesY * bgthemeY );
			timesX += 1;
		}
		timesY += 1;
		timesX = 0;
	}
}
ctx.globalAlpha = 1.0;

//表題(フォントはWebフォントの「M PLUS 1p」、「Noto Sans JP」を試用)
//基本的にはNoto Sans JPを使用する
ctx.strokeStyle = defaultColor;
ctx.font = "32px 'Noto Sans JP'";
ctx.lineWidth = 3;
ctx.strokeText("#コンパス履歴書ジェネレーター " + version , 15, 46 );
grad = ctx.createLinearGradient(0,14,0,46);
grad.addColorStop(0,'#fcea98');
grad.addColorStop(1,'#f7c717');
ctx.fillStyle = grad;
ctx.fillText("#コンパス履歴書ジェネレーター " + version , 15, 46 );

//外枠描画
ctx.lineWidth = 7;
ctx.strokeStyle = defaultColor;
ctx.strokeRect(15,60,870,1170);

//名前とよみがなを描画
ctx.lineWidth = 3;
ctx.fillStyle = defaultColor;
//左側のHN、よみを描く
ctx.font = "28px 'Noto Sans JP'";
ctx.fillText("よみ", 40 , 110 );
ctx.font = "55px 'Noto Sans JP'";
ctx.fillText(" HN ", 15 , 205 );

//横線五本
ctx.fillStyle = defaultColor;
ctx.fillRect(15,123,870,1);
ctx.fillRect(15,230,870,3);
ctx.fillRect(15,400,870,3);
ctx.fillRect(15,860,870,3);
ctx.fillRect(212,271,258,2);

//デキレ、ランク、アイコン所持数
ctx.font = "28px 'Noto Sans JP'";
ctx.fillText("デッキレベル", 30 , 270 );
ctx.fillText("ランク", 302 , 262 );
ctx.font = "25px 'Noto Sans JP'"
ctx.fillText("最高", 252 , 302 );
ctx.fillText("シーズン", 356 , 302 );
ctx.font = "28px 'Noto Sans JP'";
ctx.fillText("銅・銀・金・大会アイコン", 510 , 270 );

let boxX = 498;
let boxXAdd = 96;
let boxY = 300;
let boxSize = 74;

ctx.lineWidth = 13;
ctx.strokeStyle = "#ac6b25";
ctx.strokeRect( boxX, boxY, boxSize, boxSize);
ctx.lineWidth = 4;
ctx.strokeStyle = "#ffffff";
ctx.strokeRect( boxX, boxY, boxSize, boxSize);

boxX += boxXAdd;
ctx.lineWidth = 13;
ctx.strokeStyle = "#c0c0c0";
ctx.strokeRect( boxX, boxY, boxSize, boxSize);
ctx.lineWidth = 4;
ctx.strokeStyle = "#ffffff";
ctx.strokeRect( boxX, boxY, boxSize, boxSize);

boxX += boxXAdd;
ctx.lineWidth = 13;
ctx.strokeStyle = "#ffd700";
ctx.strokeRect( boxX, boxY, boxSize, boxSize);
ctx.lineWidth = 4;
ctx.strokeStyle = "#ffffff";
ctx.strokeRect( boxX, boxY, boxSize, boxSize);

boxX += boxXAdd;
ctx.lineWidth = 13;
ctx.strokeStyle = "#553592";
ctx.strokeRect( boxX, boxY, boxSize, boxSize);
ctx.lineWidth = 4;
ctx.strokeStyle = "#ffffff";
ctx.strokeRect( boxX, boxY, boxSize, boxSize);

//縦線三本
ctx.fillStyle = defaultColor;
ctx.fillRect(212,230,2,170);
ctx.fillRect(470,230,2,170);
ctx.fillRect(341,271,1,129);

//使用ヒーロー
ctx.font = "28px 'Noto Sans JP'";
ctx.fillText("使用ヒーロー　※()内は練習中orフリバのみ", 30 , 440 );
//ロールアイコンは条件でうすくなるので描画は下で

//連絡先とアイコン
ctx.fillStyle = defaultColor;
ctx.font = "28px 'Noto Sans JP'";
ctx.fillText("連絡先など", 30 , 900 );
//連絡先アイコンは内容に応じて省略をするため後から描画

//一番下に注意書きなど
ctx.globalAlpha = 0.5 ;
ctx.font = "20px 'Noto Sans JP'";
ctx.fillText("この履歴書は「コンパス履歴書ジェネレーター" + version + "」で作成されました。", 10 , 1260 );
ctx.fillText("https://bit.ly/cps_rireki　　ツール製作者:@Ao_Sankaku", 10 , 1285 );
ctx.globalAlpha = 1.0 ;

//背景色と文字色か枠線・項目色が一致するならエラー（非常に近くてもエラー）
if ( bgColor == defaultColor ){
	errorMsg += "・「背景色」と「枠線・項目色」が同じです。";
}
if ( bgColor == fontColor ){
	errorMsg += "・「背景色」と「フォントの色」が同じです。";
}





//■最終処理■内容をフォームの内容で埋める
//プロフィール画像を描画
let profilePicScale;
switch (profilePicSize) {
	case "10x" : profilePicScale = 167; break;
	case "09x" : profilePicScale = 150; break;
	case "08x" : profilePicScale = 133; break;
	case "07x" : profilePicScale = 117; break;
	case "none": profilePicScale = 0; break;
}

const profilePicY = (63 + 167) - profilePicScale;

//なぜかスマホ版ChromeだとUndefinedになるので分岐して処理
if ( img[9].src == null ){
	errorMsg += "・プロフィール画像が設定されていません。";
} else {
	ctx.drawImage( img[9], 715, profilePicY, profilePicScale, profilePicScale);
}

//■指定色
ctx.fillStyle = fontColor;


//■指定フォント（depはデフォルト（monospace））
//新処理(フォントの選択肢名を読み込んでそのフォントを描画する)
let fontEle = document.forms.design.font;
if ( fontEle[fontEle.selectedIndex].text !== "端末依存" ){
	userFont = " '" + fontEle[fontEle.selectedIndex].text + "'";
} else {
	userFont = " 'monospace'"
}


/*旧処理
switch (selectedFont){
	case "nos"	: userFont = " 'Noto Sans JP'";	break;
	case "nof"	: userFont = " 'Noto Serif JP'";	break;
	case "mpl"	: userFont = " 'M PLUS 1p'";	break;
	default 	: userFont = " 'monospace'";	break;
}
*/


//フォントがちゃんと読み込まれているのか最終確認
ctx.font= "20px 'monospace'";
var defaultWidth = ctx.measureText("S1234567890よみHN最高デッキレベルランク銅・銀金大会アイコン使用ヒーロ　※( )内は練習中orフリバの連絡先など年月日作成こ履歴書「コンパスジェネレタv.Beta」で作成されました。hps:/wosnkugihbcprm").width;
ctx.font = "20px" + userFont;
var userWidth = ctx.measureText("S1234567890よみHN最高デッキレベルランク銅・銀金大会アイコン使用ヒーロ　※( )内は練習中orフリバの連絡先など年月日作成こ履歴書「コンパスジェネレタv.Beta」で作成されました。hps:/wosnkugihbcprm").width;
if ( defaultWidth == userWidth && userFont !== " 'monospace'" ){
	errorMsg += "・フォントが正常に読み込まれなかった可能性があります。\n　もう一度生成してください。\n";
}


ctx.lineWidth = 4;
ctx.font = "40px" + userFont;
let readWidth = ctx.measureText(read).width;
if ( readWidth >= 585 ){
	errorMsg += "・よみがなが長すぎます。このまま出力するとよみがながプロフィール画像に重なる可能性があります。\n";
}
if ( read == "" ){
	errorMsg += "・よみがなが入力されていません。\n";
}
ctx.fillText(read, 130 , 110 );
//名前を描画したときの幅を判定してある程度自動調整
if ( name == "" ){
	errorMsg += "・HNが入力されていません。\n";
}
ctx.lineWidth = 6;
ctx.font = "bold 72px" + userFont;
let nameWidth = ctx.measureText(name).width;
if ( nameWidth >= 575 ){
	ctx.font = "bold 50px" + userFont;
	nameWidth = ctx.measureText(name).width;
	if ( nameWidth >= 585 ){
		errorMsg += "・HNが長すぎます。このまま出力するとHNがプロフィール画像に重なる可能性があります。\n";
	}
}
ctx.fillText(name, 130 , 205 );

//デキレを描画
//デキレによって分岐(フォントは今の所固定)
ctx.font = "84px 'Heebo'";
ctx.textAlign = "center";
if (dl >= 210){
	ctx.strokeStyle = "#ff0000";
} else if (dl >= 170){
	ctx.strokeStyle = "#ff6666";
} else if (dl >= 130){
	ctx.strokeStyle = "#ffbbbb";
} else if (dl >= 90){
	ctx.strokeStyle = "#880000";
} else {
	ctx.strokeStyle = "#666666";
}
ctx.lineWidth = 9;
ctx.globalAlpha = 0.3 ;
ctx.strokeText(dl, 119, 380 );
ctx.lineWidth = 8;
ctx.globalAlpha = 1.0 ;
ctx.fillText(dl, 119, 380 );

//ランクを描画
ctx.lineWidth = 9;
ctx.font = "77px 'Heebo'";
//ランクによってグラデーションを変化
grad = ctx.createLinearGradient(0,335,0,380);
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
ctx.lineWidth = 7;
ctx.strokeStyle = fontColor;
ctx.strokeText( rank, 278, 384 );
ctx.strokeStyle = "#000000";
ctx.fillStyle = grad;
ctx.fillText( rank, 278, 384);
ctx.fillStyle = "#000000";

//続けてシーズンランクを描画
ctx.lineWidth = 9;
ctx.font = "77px 'Heebo'";

//先に関数として宣言
function drawSeasonRank(){
	ctx.lineWidth = 7;
	ctx.strokeStyle = fontColor;
	ctx.strokeText( seasonRank, 405, 384 );
	ctx.strokeStyle = "#000000";
	ctx.fillStyle = grad;
	ctx.fillText( seasonRank, 405, 384 );
	ctx.fillStyle = "#000000";
}

function doNotDrawSeasonRank(){
	ctx.globalAlpha = 0.4;
	ctx.fillStyle = fontColor;
	ctx.fillText( "-", 405, 384 );
}

grad = ctx.createLinearGradient(0,335,0,380);

//ランクによってグラデーションを変化
switch (seasonRank) {
	case "F":
	grad.addColorStop(0,'#000000');
	grad.addColorStop(1,'#000000');
	doNotDrawSeasonRank();
	break;
	
	case "S1":
	case "S2":
	case "S3":
	grad.addColorStop(0,'#f7c717');
	grad.addColorStop(1,'#fcea98');
	drawSeasonRank();
	break;
	
	case "S4":
	case "S5":
	case "S6":
	grad.addColorStop(0,'#f7c717');
	grad.addColorStop(1,'#ed9300');
	drawSeasonRank();
	break;
	
	case "S7":
	case "S8":
	case "S9":
	grad.addColorStop(0,'#f7c717');
	grad.addColorStop(1,'#ee82ee');
	drawSeasonRank();
	break;
}

//エラーチェック
if ( convRank( rank ) < convRank( seasonRank ) ){
	errorMsg += "・シーズンランクが最高ランクを上回っています。\n";
}

if ( convRank( seasonRank ) <= 3 ){
	if ( ( bronze + silver + gold ) != 0 ){
		errorMsg += "・シーズンランクの値かシーズンアイコンの値が不正です。\n";
	}
}


//金銀銅大会アイコンの所持数を表示
//先にエラーチェック
//エラーチェック(99超えてないか)
if ( bronze > 99 ){
	errorMsg += "・銅アイコンの個数の値が不正です。\n";
}
if ( silver > 99 ){
	errorMsg += "・銀アイコンの個数の値が不正です。\n";
}
if ( gold > 99 ){
	errorMsg += "・金アイコンの個数の値が不正です。\n";
}
if ( tournament > 99 ){
	errorMsg += "・大会優勝アイコンの個数の値が不正です。\n";
}
//エラーチェック(0未満でないか)
if ( bronze < 0 ){
	errorMsg += "・銅アイコンの個数の値が0未満です。値は0として扱われます。\n";
}
if ( silver < 0 ){
	errorMsg += "・銀アイコンの個数の値が0未満です。値は0として扱われます。\n";
}
if ( gold < 0 ){
	errorMsg += "・金アイコンの個数の値が0未満です。値は0として扱われます。\n";
}
if ( tournament < 0 ){
	errorMsg += "・大会優勝アイコンの個数の値が0未満です。値は0として扱われます。\n";
}
//エラーチェック(数値でないか)
if ( isNaN( bronze ) ){
	errorMsg += "・銅アイコンの個数の値が数字ではありません。値は0として扱われます。\n";
	bronze = 0;
}
if ( isNaN( silver ) ){
	errorMsg += "・銀アイコンの個数の値が数字ではありません。値は0として扱われます。\n";
	silver = 0;
}
if ( isNaN( gold ) ){
	errorMsg += "・金アイコンの個数の値が数字ではありません。値は0として扱われます。\n";
	gold = 0;
}
if ( isNaN( tournament ) ){
	errorMsg += "・大会優勝アイコンの個数の値が数字ではありません。値は0として扱われます。\n";
	tournament = 0;
}
//金銀銅大会アイコンの数を描画
//ただし各項目0の場合ハイフンを表示
ctx.fillStyle = fontColor;
ctx.lineWidth = 4;
let iconX = 535;
let iconXAdd = 96;
let iconY = 360;
if ( bronze < 1 ){
	ctx.globalAlpha = 0.4;
	ctx.font = "52px 'Noto Sans JP'";
	ctx.fillText("-", iconX , iconY );
} else {
	ctx.globalAlpha = 1.0;
	ctx.font = "bold 52px 'Noto Sans JP'";
	ctx.fillText( bronze , iconX , iconY );
}
iconX += iconXAdd;
if ( silver < 1 ){
	ctx.globalAlpha = 0.4;
	ctx.font = "52px 'Noto Sans JP'";
	ctx.fillText("-", iconX , iconY );
} else {
	ctx.globalAlpha = 1.0;
	ctx.font = "bold 52px 'Noto Sans JP'";
	ctx.fillText( silver , iconX , iconY );
}
iconX += iconXAdd;
if ( gold < 1 ){
	ctx.globalAlpha = 0.4;
	ctx.font = "52px 'Noto Sans JP'";
	ctx.fillText("-", iconX , iconY );
} else {
	ctx.globalAlpha = 1.0;
	ctx.font = "bold 52px 'Noto Sans JP'";
	ctx.fillText( gold , iconX , iconY );
}
iconX += iconXAdd;
if ( tournament < 1 ){
	ctx.globalAlpha = 0.4;
	ctx.font = "52px 'Noto Sans JP'";
	ctx.fillText("-", iconX , iconY );
} else {
	ctx.globalAlpha = 1.0;
	ctx.font = "bold 52px 'Noto Sans JP'";
	ctx.fillText( tournament , iconX , iconY );
}
//中央揃えを左揃えに、色をユーザー指定にリセット
ctx.textAlign = "left";
ctx.fillStyle = fontColor;
ctx.globalAlpha = 1.0;
//先に使用ヒーローを取得して描画
for ( let i = 0, l = heroBe.length; l > i ; i++ ){
	if ( heroBe[i].selected ){
		switch ( detectRole( heroBe[i].value ) ){
			case "attacker":	atkUseB += heroBe[i].value + " ";	break;
			case "gunner":		gunUseB += heroBe[i].value + " ";	break;
			case "sprinter":	sprUseB += heroBe[i].value + " ";	break;
			case "tank":		tanUseB += heroBe[i].value + " ";	break;
		}
	}
}

for ( let i = 0, l = heroFe.length; l > i ; i++ ){
	if ( heroFe[i].selected ){
		switch ( detectRole( heroFe[i].value ) ){
			case "attacker":	atkUseF += heroFe[i].value + " ";	break;
			case "gunner":		gunUseF += heroFe[i].value + " ";	break;
			case "sprinter":	sprUseF += heroFe[i].value + " ";	break;
			case "tank":		tanUseF += heroFe[i].value + " ";	break;
		}
	}
}

//重複があったらエラー
for ( let i = 0, l = heroBe.length; i < l; i++ ){
	if ( heroBe[i].selected && heroFe[i].selected ){
		duplicate += heroBe[i].value + "、";
	}
}
if ( duplicate !== "" ){
	errorMsg += "・「バトアリ使用キャラ」と「フリバト&練習キャラ」から重複して選択しているヒーローがいます。\n　（" + duplicate.slice(0,-1) + "）\n" ;
}


//キャラ描画
ctx.font = "34px" + userFont;
ctx.globalAlpha = 1.0 ;
ctx.fillText( atkUseB , 120, 490, 760 );
if ( atkUseF != "" ){
	ctx.globalAlpha = 0.7 ;
	ctx.fillText( "(" + atkUseF.slice(0,-1) + ")" , 120, 525, 760 );
}
ctx.globalAlpha = 1.0 ;
ctx.fillText( gunUseB , 120, 590, 760 );
if ( gunUseF != "" ){
	ctx.globalAlpha = 0.7 ;
	ctx.fillText( "(" + gunUseF.slice(0,-1) + ")" , 120, 625, 760 );
}
ctx.globalAlpha = 1.0 ;
ctx.fillText( sprUseB , 120, 690, 760 );
if ( sprUseF != "" ){
	ctx.globalAlpha = 0.7 ;
	ctx.fillText( "(" + sprUseF.slice(0,-1) + ")" , 120, 725, 760 );
}
ctx.globalAlpha = 1.0 ;
ctx.fillText( tanUseB , 120, 790, 760 );
if ( tanUseF != "" ){
	ctx.globalAlpha = 0.7 ;
	ctx.fillText( "(" + tanUseF.slice(0,-1) + ")" , 120, 825, 760 );
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
ctx.drawImage( atkImg , 30 , 460 , 80 , 80 );
ctx.globalAlpha = 1.0 ;
if ( gunUseB == "" ){
	ctx.globalAlpha = 0.5 ;
	if ( gunUseF == "" ) {
		ctx.globalAlpha = 0.1 ;
	}
}
ctx.drawImage( gunImg , 30 , 560 , 80 , 80 );
ctx.globalAlpha = 1.0 ;
if ( sprUseB == "" ){
	ctx.globalAlpha = 0.5 ;
	if ( sprUseF == "" ) {
		ctx.globalAlpha = 0.1 ;
	}
}
ctx.drawImage( sprImg , 30 , 660 , 80 , 80 );
ctx.globalAlpha = 1.0 ;
if ( tanUseB == "" ){
	ctx.globalAlpha = 0.5 ;
	if ( tanUseF == "" ) {
		ctx.globalAlpha = 0.1 ;
	}
}
ctx.drawImage( tanImg , 30 , 760 , 80 , 80 );
//最後に透明度リセット
ctx.globalAlpha = 1.0 ;
//使用ヒーローが0体の場合アラート
if ( atkUseB + atkUseF + gunUseB + gunUseF + sprUseB + sprUseF + tanUseB + tanUseF == "" ){
	errorMsg += "・使用ヒーローが一体も選択されていません。\n";
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
let twAt = tw.startsWith("@");
if ( twAt == false ){
tw = "@" + tw;
}
let twLength = tw.length;
if ( twLength > 17 ){
errorMsg += "・Twitter IDが長すぎます。\n　Twitterを利用していない場合は空欄にすると自動で省略されます。\n";
}
//先頭の@を切り取り半角英数と_以外が含まれていた場合エラーを吐く
let twSlice = tw.slice(1);
twSlice = ( twSlice == null )?"":twSlice;
if ( !twSlice.match(/^[A-Za-z0-9_]*$/) ){
errorMsg += "・Twitter IDは半角英数と_(アンダースコア)のみ使用できます。\n　Twitterを利用していない場合は空欄にすると自動で省略されます。\n";
}

//Discord
let dcTag = dc.slice(-5);
if ( dc != "" ){
if ( !dcTag.match(/^#\d{4}/) ){
errorMsg += "・Discord名は名前の最後に「#」と4桁の数字からなるタグが必要です(例:ユーザー名#1234)。\n　Discordを利用していない場合は空欄にすると自動で省略されます。\n";
}
}

//Skype
let spLength = sp.length;
if ( spLength != 0 ){
if ( spLength > 32 ){
errorMsg += "・Skype IDが長すぎます（32文字以下にしてください）。\n　Skypeを利用していない場合は空欄にすると自動で省略されます。\n";
}
if ( spLength < 6 ){
errorMsg += "・Skype IDが短すぎます（6文字以上にしてください）。\n　Skypeを利用していない場合は空欄にすると自動で省略されます。\n";
}
}
sp = ( sp == null )?"":sp;
if ( !sp.match(/^[A-Za-z0-9_,.-]*$/) ){
errorMsg += "・Skype IDは半角英数と一部記号( - , . _ )のみ使用できます。\n　Skypeを利用していない場合は空欄にすると自動で省略されます。\n";
}

//フレンドコード
if ( fc != "" ){
if ( !fc.match(/^\d{10}$/) ){
errorMsg += "・フレンドコードには10桁の数字のみ入力できます\n　(フレンドコードは「コンパスアプリホーム→コミュニティ→友達を招待する」から確認できます)。\n　空欄にすると自動で省略されます。\n";
}
}



ctx.font = "26px" + userFont;
//連絡先描画
//入力がない項目は省略するので関数を組み上に詰める
let contactY = 918;
const plus1 = 30;
const plus2 = 20;
const cmFontSize = 26 + 2;
const contactIconSize = 42;
let overLines = 0;

//連絡先アイコン描画
if ( tw != "@" ){
	ctx.drawImage( twImg , 30 , contactY , contactIconSize , contactIconSize );
	contactY += plus1;
	ctx.fillText( tw , 87 , contactY );
	contactY += plus2;
}
if ( dc != "" ){
	ctx.drawImage( dcImg , 30 , contactY , contactIconSize , contactIconSize );
	contactY += plus1;
	ctx.fillText( dc , 87 , contactY );
	contactY += plus2;
}
if ( sp != "" ){
	ctx.drawImage( spImg , 30 , contactY , contactIconSize , contactIconSize );
	contactY += plus1;
	ctx.fillText( sp , 87 , contactY );
	contactY += plus2;
}
if ( fc != "" ){
	ctx.drawImage( cpImg , 30 , contactY , contactIconSize , contactIconSize );
	contactY += plus1;
	ctx.fillText( fc , 87 , contactY );
	contactY += plus2;
}
if ( guild != "" ){
	ctx.drawImage( guImg , 30 , contactY , contactIconSize , contactIconSize );
	contactY += plus1;
	ctx.fillText( guild , 87 , contactY );
	contactY += plus2;
	
	//長く書きすぎて枠外に出ていたらエラー判定
	if ( ctx.measureText( guild ).width > 793.3 ){
		errorMsg += "・所属ギルドの文章が長すぎます。\n";
	}
}
//コメントは複数行にわたる場合があるのでfor文で処理
if ( cm != "" ){
	ctx.drawImage( fkImg , 30 , contactY , contactIconSize , contactIconSize );
	contactY += plus1;
	for ( let line = "", lines = cm.split( '\n' ), i = 0, l = lines.length; l > i ; i++ ){
		line = lines[i];
		
		//はみ出したら警告するために分岐
		if ( contactY > 1216 ){
			
			//枠外はみだしなので強制判定
			overLines += 1;
			
		} else if ( contactY > 1196 ){
			
			//日付と重なっていたら判定
			if ( ctx.measureText( line ).width > 591.6 ){
				errorMsg += "・コメント" + ( i + 1 ) + "列目の文章が長すぎます。\n　改行または短縮してください。\n";
			}
			
		} else {
			
			//枠外に出ていたら判定
			if ( ctx.measureText( line ).width > 796.6 ){
				errorMsg += "・コメント" + ( i + 1 ) + "列目の文章が長すぎます。\n　改行または短縮してください。\n";
			}
			
		}
		//描画本体
		ctx.fillText( line , 87 , contactY );
		contactY += cmFontSize;
	}
	
	if ( overLines !== 0 ){
		errorMsg += "・コメントの行数が多すぎます。\n　" + overLines + "行削減してください。";
	}
}

//日付
ctx.font = "20px 'Noto Sans JP'";
ctx.fillText( createdAt , 680 , 1216 );
	
	
//背景画像サイズが大きすぎる場合の処理
if ( typeof localStorage !== "undefined" ){
	let storage2 = localStorage;
	if ( img[12].src !== "" ){
		try{
			storage2.setItem( 'testBg' , img[12].src );
		} catch (error) {
			errorMsg += "・背景画像のサイズが大きすぎます。\n　このままだと端末に保存できません。\n";
		}
	}
}


//入力に何かしら不備があった場合アラート+文字として表示
if ( !errorMsg == "" ){
	let errorMsgArray = errorMsg.split('\n');
	document.getElementById('inputAlert').innerHTML = '<span style="font-size:3.2vw; color:red;"><i class="fas fa-times"></i> 入力エラーがあります</span><br><div align="left" class="inputAlert">【入力エラーの内容】<br>' + errorMsgArray.join('<br>') + '</div>';
} else {
	document.getElementById('inputAlert').innerHTML = '<span style="font-size:3.2vw; color:green;"><i class="fas fa-check"></i> 入力エラーはありません</span>';
}




//メンテナンス中はここにbreakpointを作って変数(dnum)を操作しないと生成できないようにする
if ( doingMaintainance == "doing" && dnum == 0 ){
	alert( 'メンテナンス中は履歴書を生成することができません。\nしばらく待ってから再度アクセスしてください。' );
	ctx.fillStyle = "#bbbbbb";
	ctx.fillRect( 0, 0, 900, 1300 );
	ctx.font = "80px 'Noto Sans JP'";
	ctx.textAlign = "center";
	ctx.fillStyle = "#777777";
	ctx.fillText("メンテナンス中です",450,600);
	ctx.font = "50px 'Noto Sans JP'";
	ctx.fillText("メンテナンスが終わってから来てね",450,700);
	ctx.font="150px 'Noto Sans JP'";
	ctx.fillStyle = "#666666";
	//履歴書生成エラーの顔文字をランダムで決定する
	function kaomoji4Error(){
		switch( Math.floor(Math.random() * Math.floor(4)) ){
			case 0:	return "￣\\_(ツ)_/￣"; break;
			case 1:	return "(ﾟｰﾟ*?)"; break;
			case 2:	return "（　´_ゝ`）"; break;
			default:	return "（´-`）"; break;
		}
	}
	ctx.fillText( kaomoji4Error() ,450,380);
	return;
}


//web上なら正常に動作するので画像変換ここに復活
can.hidden = true;
base64Result = can.toDataURL('image/jpeg');
document.getElementById("cps_resume_result").src = base64Result;
let dlLink = document.getElementById('downloadResult');
let dlLink2 = document.getElementById('downloadResult2');
dlLink.href = base64Result;
dlLink2.href = base64Result;
//作成年月日を取得する
/*
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
if ( month < 10 ){
	month = "0" + month;
}
let today = date.getDate();
if ( today < 10 ){
	today = "0" + today;
}
*/
let hours = date.getHours();
if ( hours < 10 ){
	hours = "0" + hours;
}
let minutes = date.getMinutes();
if ( minutes < 10 ){
	minutes = "0" + minutes;
}

dlLink.download = "cps_rireki_"+ year + month + today + hours + minutes + ".jpeg";
dlLink2.download = "cps_rireki_"+ year + month + today + hours + minutes + ".jpeg";



}








function downloadResultImg(){
	alert('ダウンロードする前に一度生成する必要があります。');
}





//履歴書の右クリック禁止（保存と置き換える）
document.getElementById("downloadResult").addEventListener('contextmenu', function(e) { 
	e.preventDefault();
	document.getElementById("downloadResult").click();
}, false);





//デザインコードの処理は独立しているのでここに記載
function cnvD2B(){
	return btoa( 	  document.forms.design.bgtheme.value + ","
			+ document.forms.design.bgTrans.value + ","
			+ document.forms.design.bgColor.value.slice( 1 ) + ","
			+ document.forms.design.defaultColor.value.slice( 1 ) + ","
			+ document.forms.design.fontColor.value.slice( 1 ) + ","
			+ document.forms.design.font.value );
}



function readDC( dCode, outer ){
	
	try{
		if( dCode.indexOf( '『' ) + 1 && dCode.indexOf( '』' ) + 1 ){
			dCode = dCode.slice( dCode.indexOf( '『' ) + 1, dCode.indexOf( '』' ) );
			document.forms.designCodeForm.designCode.value = dCode;
		}
		dCode = atob( dCode ).split( "," );
		if ( dCode == "" ){ alert( '正しいデザインコードを入力してください。' ); return false; }
		if ( dCode.length !== 6 ){ alert( '配列数エラーです。デザインコードが破損している可能性があります。' ); return false; }
		document.forms.design.bgtheme.value = dCode[0];
		document.forms.design.bgTrans.value = dCode[1];
		if ( dCode[2].length !== 6 || dCode[3].length !== 6 || dCode[4].length !== 6 ){ alert('カラーコードエラーです。デザインコードが破損している可能性があります。'); return false; }
		document.forms.design.bgColor.value = "#" + dCode[2];
		document.forms.design.defaultColor.value = "#" + dCode[3];
		document.forms.design.fontColor.value = "#" + dCode[4];
		document.forms.design.font.value = dCode[5];
		if ( document.forms.design.bgtheme.value !== "monotone" && document.forms.design.bgtheme.value !== "custom" ){
			img[11].src = "img/bg/" + document.forms.design.bgtheme.value + ".png";
		}
		
		//更新状態確認（存在しない選択肢が選ばれてたらここでエラーが出る）
		onChangeForms();
		
		//ここまででエラーが一回でも出ればfalseが返される（はず）
		//出なければtrueが返される
		if ( outer ){ alert( 'デザインコードの内容を正常に反映しました。' ); }
		return true;
		
	} catch( e ){
		
		alert( '不明なエラーが発生しました。デザインコードが破損している可能性があります。' );
		return false;
		
	}
}





//ボタン押下時処理共
document.getElementById( 'cnvD2B' ).onclick = () => document.forms.designCodeForm.designCode.value = cnvD2B();

document.getElementById( 'readDC' ).onclick = () => {
	let beforeDC = cnvD2B();
	if ( !readDC( document.forms.designCodeForm.designCode.value, true ) ){
		readDC( beforeDC, false );
	}
}

document.getElementById( 'shareDC' ).onclick = () => {
	document.forms.designCodeForm.designCode.value = cnvD2B();
	showDCShare();
	if ( confirm( 'デザインコード共有用のボタンを表示しました。\nクリップボードにコピーしますか？' ) ){
		document.forms.designCodeForm.designCode.select();
		document.execCommand( "copy" );
		alert( 'コピーしました！' );
	}
}




