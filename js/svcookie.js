//記入した内容をCookieに記録する                                                                                                                                                                                                                  
function saveToCookie(){

//そもそもcookieが有効かどうかを判定する
if(navigator.cookieEnabled){

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
	//連絡先とコメント
	var tw = document.forms.info.tw.value;
	var dc = document.forms.info.dc.value;
	var sp = document.forms.info.sp.value;
	var fc = document.forms.info.fc.value;
	var guild = document.forms.info.guild.value;
	var cm = document.getElementById('comment').value;
	
	//デザイン関連
	var profilePicSize = document.forms.design.profilePicSize.value;
	var profilePicNameC = queryProfilePicName();
	var profilePicData = queryProfilePicData();
	var bgTheme = document.forms.design.bgtheme.value;
	var bgTrans = document.forms.design.bgTrans.value;
	var bgColor = document.forms.design.bgColor.value;
	var fontColor = document.forms.design.fontColor.value;
	var defaultColor = document.forms.design.defaultColor.value;
	var selectedFont = document.forms.design.font.value;
	
	//選択肢の内容をロード
	var heroB = document.getElementById("heroB");
	var heroF = document.getElementById("heroF");
	var heroBe = heroB.options;
	var heroFe = heroF.options;
	var heroBSel = new Array( heroBe.length );
	var heroFSel = new Array( heroBe.length );

	//配列はそのまま記録できないようなので配列「heroBe,heroFe」に記録
	for ( let i = 0 , l = heroBe.length ; l > i ; i++ ){
		if ( heroBe[i].selected == true ){
			heroBSel[i] = true;
		}
	}
	for ( let i = 0 , l = heroFe.length ; l > i ; i++ ){
		if ( heroFe[i].selected == true ){
			heroFSel[i] = true;
		}
	}
	
	//プロフィール画像はリサイズする
	ctx2.drawImage( img[9], 0, 0, can.width, can.height );
	profilePicData = can2.toDataURL( 'image/png' );

	//■Cookieに書き込み
	Cookies.set( 'read' , read , { samesite: 'lax' , secure: true , expires: 365 } );
	Cookies.set( 'name' , name , { samesite: 'lax' , secure: true , expires: 365 } );
	Cookies.set( 'dl' , dl , { samesite: 'lax' , secure: true , expires: 365 } );
	Cookies.set( 'rank' , rank , { samesite: 'lax' , secure: true , expires: 365 } );
	Cookies.set( 'heroBSel' , heroBSel , { samesite: 'lax' , secure: true , expires: 365 } );
	Cookies.set( 'heroFSel' , heroFSel , { samesite: 'lax' , secure: true , expires: 365 } );
	Cookies.set( 'bronze' , bronze , { samesite: 'lax' , secure: true , expires: 365 } );
	Cookies.set( 'silver' , silver , { samesite: 'lax' , secure: true , expires: 365 } );
	Cookies.set( 'gold' , gold , { samesite: 'lax' , secure: true , expires: 365 } );
	Cookies.set( 'tournament' , tournament , { samesite: 'lax', secure: true , expires: 365 } );
	Cookies.set( 'tw' , tw , { samesite: 'lax' , secure: true , expires: 365 } );
	Cookies.set( 'dc' , dc , { samesite: 'lax' , secure: true , expires: 365 } );
	Cookies.set( 'sp' , sp , { samesite: 'lax' , secure: true , expires: 365 } );
	Cookies.set( 'fc' , fc , { samesite: 'lax' , secure: true , expires: 365 } );
	Cookies.set( 'guild' , guild , { samesite: 'lax' , secure: true , expires: 365 } );
	Cookies.set( 'cm' , cm , { samesite: 'lax' , secure: true , expires: 365 } );
	Cookies.set( 'profilePicSize' , profilePicSize , { samesite: 'lax' , secure: true , expires: 365 } );
	Cookies.set( 'profilePicNameC' , profilePicNameC , { samesite: 'lax' , secure: true , expires: 365 } );
	Cookies.set( 'profilePicData' , profilePicData , { samesite: 'lax' , secure: true , expires: 365 } );
	Cookies.set( 'bgTheme' , bgTheme , { samesite: 'lax' , secure: true , expires: 365 } );
	Cookies.set( 'bgTrans' , bgTrans , { samesite: 'lax' , secure: true , expires: 365 } );
	Cookies.set( 'bgColor' , bgColor , { samesite: 'lax' , secure: true , expires: 365 } );
	Cookies.set( 'fontColor' , fontColor , { samesite: 'lax' , secure: true , expires: 365 } );
	Cookies.set( 'defaultColor' , defaultColor , { samesite: 'lax' , secure: true , expires: 365 } );
	Cookies.set( 'selectedFont' , selectedFont , { samesite: 'lax' , secure: true , expires: 365 } );
	Cookies.set( 'savedAt' , savedAt , { samesite: 'lax' , secure: true , expires: 365 } );

	//最後にアラート
	alert("記入内容をCookieに保存しました！");
	//htmlを書き換え（保存しましたにする）
	document.getElementById("saveAlert").innerHTML = '<span style="font-size:3.2vw; color:green;"><i class="fas fa-check"></i> Cookieに保存されています</span>';
	
} else {

	alert("【エラー】\n保存するにはCookieを有効にして下さい。")
}
}



function changeSaveAlert(){
	let a=0;
}




function onChangeForms(){
	
	//ついでに選択された画像を選択しておく
	if ( document.forms.design.bgtheme.value !== "monotone" && document.forms.design.bgtheme.value !== "custom" ){
		img[11].src = "img/bg/" + document.forms.design.bgtheme.value + ".png";
	}
	
	//とりあえずキャッシュの内容をロード
	var read = Cookies.get( 'read' );
	var name = Cookies.get( 'name' );
	var dl = Cookies.get( 'dl' );
	var rank = Cookies.get( 'rank' );
	var bronze = Cookies.get( 'bronze' );
	var silver = Cookies.get( 'silver' );
	var gold = Cookies.get( 'gold' );
	var tournament = Cookies.get( 'tournament' );
	var tw = Cookies.get( 'tw' );
	var dc = Cookies.get( 'dc' );
	var sp = Cookies.get( 'sp' );
	var fc = Cookies.get( 'fc' );
	var guild = Cookies.get( 'guild' );
	var cm = Cookies.get( 'cm' );
	var profilePicSize = Cookies.get( 'profilePicSize' );
	var profilePicNameC = Cookies.get( 'profilePicNameC' );
	var profilePicData = Cookies.get( 'profilePicData' );
	var bgTheme = Cookies.get( 'bgTheme' );
	var bgTrans = Cookies.get( 'bgTrans' );
	var bgColor = Cookies.get( 'bgColor' );
	var fontColor = Cookies.get( 'fontColor' );
	var defaultColor = Cookies.get( 'defaultColor' );
	var selectedFont = Cookies.get( 'selectedFont' );
	var savedAt = Cookies.get( 'savedAt' );
	
	//本当に中身が変わったのか比較する（ A => B => A の場合は「変更なし」判定する）
	//Cookieが無効orCookie消滅済なら何もしない
	
	if( navigator.cookieEnabled && savedAt !== undefined && savedAt !== "" && savedAt !== "undefined" ){
		//フォームの内容を比較する
		var comp = [];
		
		comp[0] = Boolean( read == document.forms.info.read.value );
		comp[1] = Boolean( name == document.forms.info.name.value );
		comp[2] = Boolean( dl == document.forms.info.dl.value );
		comp[3] = Boolean( rank == document.forms.info.rank.value );
		
		comp[4] = Boolean( bronze == parseInt(document.forms.info.bronze.value) );
		comp[5] = Boolean( silver == parseInt(document.forms.info.silver.value) );
		comp[6] = Boolean( gold == parseInt(document.forms.info.gold.value) );
		comp[7] = Boolean( tournament == parseInt(document.forms.info.tournament.value) );
		
		comp[8] = Boolean( tw == document.forms.info.tw.value );
		comp[9] = Boolean( dc == document.forms.info.dc.value );
		comp[10] = Boolean( sp == document.forms.info.sp.value );
		comp[11] = Boolean( fc == document.forms.info.fc.value );
		comp[12] = Boolean( cm == document.getElementById('comment').value );

		//heroBSelとheroFSelは文字列として記録されているので「現在の選択状況」を文字列に変換して比較
		var heroB = document.getElementById("heroB");
		var heroF = document.getElementById("heroF");
		var heroBe = heroB.options;
		var heroFe = heroF.options;
		var heroBSel = new Array( heroBe.length );
		var heroFSel = new Array( heroBe.length );
		
		for ( let i = 0 , l = heroBe.length ; l > i ; i++ ){
			if ( heroBe[i].selected == true ){
				heroBSel[i] = "true";
			} else {
				heroBSel[i] = "null";
			}
		}
		for ( let i = 0 , l = heroFe.length ; l > i ; i++ ){
			if ( heroFe[i].selected == true ){
				heroFSel[i] = "true";
			} else {
				heroFSel[i] = "null";
			}
		}
		
		var heroBStr = heroBSel.join(',');
		var heroFStr = heroFSel.join(',');
		var heroBStrC = Cookies.get( 'heroBSel' );
		var heroFStrC = Cookies.get( 'heroFSel' );
		heroBStrC = heroBStrC.slice( 1 );
		heroBStrC = heroBStrC.slice( 0 , -1 );
		heroFStrC = heroFStrC.slice( 1 );
		heroFStrC = heroFStrC.slice( 0 , -1 );
		
		comp[13] = Boolean( heroBSel == heroBStrC );
		comp[14] = Boolean( heroFSel == heroFStrC );
		
		comp[15] = Boolean( guild == document.forms.info.guild.value );
		
		comp[16] = Boolean( bgColor == document.forms.design.bgColor.value );
		comp[17] = Boolean( fontColor == document.forms.design.fontColor.value );
		comp[18] = Boolean( selectedFont == document.forms.design.font.value );
		comp[19] = Boolean( defaultColor == document.forms.design.defaultColor.value );
		comp[20] = Boolean( profilePicSize == document.forms.design.profilePicSize.value );
		comp[21] = Boolean( bgTheme == document.forms.design.bgtheme.value );
		comp[22] = Boolean( bgTrans == document.forms.design.bgTrans.value );
		comp[23] = Boolean( profilePicNameC == queryProfilePicName() );
		comp[24] = Boolean( profilePicData == queryProfilePicData() );
		console.log(profilePicNameC);
		console.log(queryProfilePicName());
		console.log(profilePicData);
		console.log(queryProfilePicData());
		
		//比較判定
		var result = true;
		
		for ( let i = 0, l = comp.length ; l > i ; i++ ){
			if ( !comp[i] ){
				console.log( i + "=false" );
				result = false;
				break;
			}
		}
		
		//結果反映
		if ( result ){
			document.getElementById("saveAlert").innerHTML = '<span style="font-size:3.2vw; color:green;"><i class="fas fa-check"></i> Cookieに保存されています</span>';
		} else {
			document.getElementById("saveAlert").innerHTML = '<span style="font-size:3.2vw; color:red;"><i class="fas fa-exclamation-triangle"></i> Cookieにデータがあります<br>（この状態で保存すると上書きされます）</span>';
		}
	}
}





//読み込み時にキャッシュがあればフォームの内容を変更
window.addEventListener('load', function loadFromCookie(){
//そもそもcookieが有効かどうかを判定する
	if(navigator.cookieEnabled){

		//キャッシュの内容をロード
		var read = Cookies.get( 'read' );
		var name = Cookies.get( 'name' );
		var dl = Cookies.get( 'dl' );
		var rank = Cookies.get( 'rank' );
		var heroBSel = Cookies.get( 'heroBSel' );
		var heroFSel = Cookies.get( 'heroFSel' );
		var bronze = Cookies.get( 'bronze' );
		var silver = Cookies.get( 'silver' );
		var gold = Cookies.get( 'gold' );
		var tournament = Cookies.get( 'tournament' );
		var tw = Cookies.get( 'tw' );
		var dc = Cookies.get( 'dc' );
		var sp = Cookies.get( 'sp' );
		var fc = Cookies.get( 'fc' );
		var guild = Cookies.get( 'guild' );
		var cm = Cookies.get( 'cm' );
		var profilePicSize = Cookies.get( 'profilePicSize' );
		var profilePicNameC = Cookies.get( 'profilePicNameC' );
		var profilePicData = Cookies.get( 'profilePicData' );
		var bgTheme = Cookies.get( 'bgTheme' );
		var bgTrans = Cookies.get( 'bgTrans' );
		var bgColor = Cookies.get( 'bgColor' );
		var fontColor = Cookies.get( 'fontColor' );
		var defaultColor = Cookies.get( 'defaultColor' );
		var selectedFont = Cookies.get( 'selectedFont' );
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
				document.getElementById( "guild" ).value = guild;
				document.getElementById( "comment" ).value = cm;
				
				//デザイン
				document.getElementById( "profilePicSize" ).value = profilePicSize;
				document.getElementById( 'fileName1' ).innerHTML = profilePicNameC;
				
				console.log(profilePicData);
				
				if ( profilePicData == "undefined" || profilePicData == undefined ){
					profilePicName = '<i class="fas fa-folder-open"></i> （ファイルを選択）';
				} else {
					img[9].src = profilePicData;
					profilePicName = profilePicNameC;
				}
				//テスト用
				/*
				document.getElementById( "test001" ).src = profilePicData;
				document.getElementById( "test002" ).innerText = profilePicData;
				*/
				
				document.getElementById( "bgtheme" ).value = bgTheme;
				document.getElementById( "bgTrans" ).value = bgTrans;
				document.getElementById( "bgColor" ).value = bgColor;
				document.getElementById( "fontColor" ).value = fontColor;
				document.getElementById( "defaultColor" ).value = defaultColor;
				document.getElementById( "font" ).value = selectedFont;
				
				
				//選択肢もロード
				document.getElementById( "dl" ).value = dl;
				document.getElementById( "rank" ).value = rank;
	
	
				//ヒーロー選択試験的実装
				/*
				console.log( heroBSel );
				console.log( heroFSel );
				*/
				//配列が文字列に置き換わっているのでこれを配列に変換しなおす
				heroBSel = heroBSel.slice( 1 );
				heroBSel = heroBSel.slice( 0 , -1 );
				heroBSel = heroBSel.split( ',' );
				heroFSel = heroFSel.slice( 1 );
				heroFSel = heroFSel.slice( 0 , -1 );
				heroFSel = heroFSel.split( ',' );
				/*
				console.log( heroBSel );
				console.log( heroFSel );
				console.log( heroBSel.length );
				console.log( heroFSel.length );
				*/
	
				for ( let i = 0, l = heroBSel.length ; l > i ; i++ ) {
					if ( heroBSel[i] == "true" ) {
					document.getElementById( "heroB" ).options[i].selected = true ;
					//console.log( "selectedB" + i );
					}
				}
				for ( let i = 0, l = heroFSel.length ; l > i ; i++ ) {
					if ( heroFSel[i] == "true" ) {
						document.getElementById( "heroF" ).options[i].selected = true ;
						//console.log( "selectedF" + i );
					}
				}

				//背景画像を読み込まないとエラーが出るので再代入
				if ( document.forms.design.bgtheme.value !== "monotone" && document.forms.design.bgtheme.value !== "custom" ){
					img[11].src = "img/bg/" + document.forms.design.bgtheme.value + ".png";
				}
				
				//最後にアラート
				alert( "前回の入力内容を読み込みました。\n変更があるなら適用して「コンパス履歴書を生成する！」を押してください。" );
				document.getElementById("saveAlert").innerHTML = '<span style="font-size:3.2vw; color:green;"><i class="fas fa-check"></i> Cookieに保存されています</span>';
			} else if ( load == false ){
				//falseだった場合キャッシュを消去するかどうか聞く（elseifにしたのはundefinedに対応するため）
				var del = confirm( "このサイトのCookieを削除しますか？\n（この操作は取り消せません）" );
				if ( del == true ){
					Cookies.remove( 'savedAt' );
					alert( "このサイトのキャッシュを消去しました。" );
					document.getElementById("saveAlert").innerHTML = '<span style="font-size:3.2vw; color:red;"><i class="fas fa-times"></i> 保存されていません</span>';
				} else {
					document.getElementById("saveAlert").innerHTML = '<span style="font-size:3.2vw; color:red;"><i class="fas fa-exclamation-triangle"></i> Cookieにデータがあります<br>（この状態で保存すると上書きされます）</span>';
				}
			}
		} else {
			document.getElementById("saveAlert").innerHTML = '<span style="font-size:3.2vw; color:red;"><i class="fas fa-times"></i> 保存されていません</span>';
		}
	} else {
		alert('Cookieが無効になっています。\nこのまま履歴書を作成することもできますが、入力内容はページを離れると全て失われ、保存することはできません。');
		document.getElementById("saveAlert").innerHTML = '<span style="font-size:3.2vw; color:red;"><i class="fas fa-times"></i> Cookieが無効です</span>';
	}
});
