//webstrage(localStorage)設定
var storage = localStorage;


//ページを離れるときに警告を出すための関数
var nonSaved = function(e){
	e.returnValue = '保存せずにこのページを離れてもよろしいですか？';
}
window.removeEventListener( 'beforeunload', nonSaved );




//記入した内容をlocalStorage（元Cookie）に記録する                                                                                                                                                                                                                  
function saveToCookie(){

//そもそもlocalStorageが有効かどうかを判定する
if( typeof localStorage !== 'undefined' ){
	

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
	var bgPicNameC = bgPicName;
	var bgPicData = img[12].src;
	
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

	//配列はそのまま記録できないようなので配列「heroBe,heroFe」に記録(選択されていたらその名前、そうでなければ[]を代入)
	for ( let i = 0 , l = heroBe.length ; l > i ; i++ ){
		if ( heroBe[i].selected ){
			heroBSel[i] = heroBe[i].value;
		}
	}
	for ( let i = 0 , l = heroFe.length ; l > i ; i++ ){
		if ( heroFe[i].selected ){
			heroFSel[i] = heroFe[i].value;
		}
	}
	
	//プロフィール画像はリサイズする
	ctx2.drawImage( img[9], 0, 0, can2.width, can2.height );
	profilePicData = can2.toDataURL( 'image/png' );

	//■LocalStorageに書き込み
	storage.setItem( 'read' , read );
	storage.setItem( 'name' , name );
	storage.setItem( 'dl' , dl );
	storage.setItem( 'rank' , rank );
	storage.setItem( 'heroBSel' , heroBSel );
	storage.setItem( 'heroFSel' , heroFSel );
	storage.setItem( 'bronze' , bronze );
	storage.setItem( 'silver' , silver );
	storage.setItem( 'gold' , gold );
	storage.setItem( 'tournament' , tournament );
	storage.setItem( 'tw' , tw );
	storage.setItem( 'dc' , dc );
	storage.setItem( 'sp' , sp );
	storage.setItem( 'fc' , fc );
	storage.setItem( 'guild' , guild );
	storage.setItem( 'cm' , cm );
	storage.setItem( 'profilePicSize' , profilePicSize );
	storage.setItem( 'profilePicNameC' , profilePicNameC );
	storage.setItem( 'profilePicData' , profilePicData );
	storage.setItem( 'bgPicNameC' , bgPicNameC );
	storage.setItem( 'bgPicData' , bgPicData );
	storage.setItem( 'bgTheme' , bgTheme );
	storage.setItem( 'bgTrans' , bgTrans );
	storage.setItem( 'bgColor' , bgColor );
	storage.setItem( 'fontColor' , fontColor );
	storage.setItem( 'defaultColor' , defaultColor );
	storage.setItem( 'selectedFont' , selectedFont );
	storage.setItem( 'savedAt' , savedAt );

	//最後にアラート
	alert("入力内容を端末に保存しました！");
	//htmlを書き換え（保存しましたにする）
	document.getElementById("saveAlert").innerHTML = '<span style="font-size:3.2vw; color:green;"><i class="fas fa-check"></i> 端末に保存されています<br>（ページを離れても内容は保持されます）</span>';
	window.removeEventListener( 'beforeunload', nonSaved );
	
} else {

	alert("【エラー】\n保存するにはLocalStorageを有効にして下さい。");

}
}



function changeSaveAlert(){
	return;
}




function onChangeForms(){
	
	console.log("Running onChangeForms...");
	
	//ついでに選択された画像を選択しておく
	if ( document.forms.design.bgtheme.value !== "monotone" && document.forms.design.bgtheme.value !== "custom" ){
		img[11].src = "img/bg/" + document.forms.design.bgtheme.value + ".png";
	}
	
	//とりあえずLocalStorageの内容をロード
	var read = storage.getItem( 'read' );
	var name = storage.getItem( 'name' );
	var dl = storage.getItem( 'dl' );
	var rank = storage.getItem( 'rank' );
	var bronze = storage.getItem( 'bronze' );
	var silver = storage.getItem( 'silver' );
	var gold = storage.getItem( 'gold' );
	var tournament = storage.getItem( 'tournament' );
	var tw = storage.getItem( 'tw' );
	var dc = storage.getItem( 'dc' );
	var sp = storage.getItem( 'sp' );
	var fc = storage.getItem( 'fc' );
	var guild = storage.getItem( 'guild' );
	var cm = storage.getItem( 'cm' );
	var profilePicSize = storage.getItem( 'profilePicSize' );
	var profilePicNameC = storage.getItem( 'profilePicNameC' );
	var profilePicData = storage.getItem( 'profilePicData' );
	var bgPicNameC = storage.getItem( 'bgPicNameC' );
	var bgPicData = storage.getItem( 'bgPicData' );
	var bgTheme = storage.getItem( 'bgTheme' );
	var bgTrans = storage.getItem( 'bgTrans' );
	var bgColor = storage.getItem( 'bgColor' );
	var fontColor = storage.getItem( 'fontColor' );
	var defaultColor = storage.getItem( 'defaultColor' );
	var selectedFont = storage.getItem( 'selectedFont' );
	var savedAt = storage.getItem( 'savedAt' );
	
	
	//中身の変更の有無にかかわらず今選択されてるフォントを読み込む
	let ele = document.forms.design.font;
	if ( ele[ele.selectedIndex].text !== "端末依存" ){
		preloadFonts( ele[ele.selectedIndex].text , undefined );
	}
	
	
	//本当に中身が変わったのか比較する（ A => B => A の場合は「変更なし」判定する）
	//LocalStorageが無効orデータ消滅済なら何もしない
	
	if( typeof localStorage !== 'undefined' && savedAt !== null ){
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
			if ( heroBe[i].selected ){
				heroBSel[i] = heroBe[i].value;
			} else {
				heroBSel[i] = "";
			}
		}
		for ( let i = 0 , l = heroFe.length ; l > i ; i++ ){
			if ( heroFe[i].selected ){
				heroFSel[i] = heroFe[i].value;
			} else {
				heroFSel[i] = "";
			}
		}
		
		var heroBStr = heroBSel.join(',');
		var heroFStr = heroFSel.join(',');
		
		var heroBStrC = storage.getItem( 'heroBSel' );
		var heroFStrC = storage.getItem( 'heroFSel' );
		
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
		comp[25] = Boolean( bgPicNameC == bgPicName );
		comp[26] = Boolean( bgPicData == img[12].src );
		console.log(profilePicNameC);
		console.log(queryProfilePicName());
		//console.log(profilePicData);
		//console.log(queryProfilePicData());
		
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
			document.getElementById("saveAlert").innerHTML = '<span style="font-size:3.2vw; color:green;"><i class="fas fa-check"></i> 端末に保存されています<br>（ページを離れても内容は保持されます）</span>';
			window.removeEventListener( 'beforeunload', nonSaved );
		} else {
			document.getElementById("saveAlert").innerHTML = '<span style="font-size:3.2vw; color:red;"><i class="fas fa-exclamation-triangle"></i> 端末にデータがあります<br>（この状態で保存すると上書きされます）</span>';
			window.addEventListener( 'beforeunload' , nonSaved );
		}
	}
}





//読み込み時にLocalStorageがあればフォームの内容を変更する関数を定義
function loadFromCookie( calledBy ){

//そもそもLocalStorageが有効かどうかを判定する
	if( typeof localStorage !== 'undefined' ){
		
		
		//読み込み時にwebstrage(localStorage)設定
		var storage = localStorage;
		
		
		//LocalStorageの内容をロード
		var read = storage.getItem( 'read' );
		var name = storage.getItem( 'name' );
		var dl = storage.getItem( 'dl' );
		var rank = storage.getItem( 'rank' );
		var heroBSel = storage.getItem( 'heroBSel' );
		var heroFSel = storage.getItem( 'heroFSel' );
		var bronze = storage.getItem( 'bronze' );
		var silver = storage.getItem( 'silver' );
		var gold = storage.getItem( 'gold' );
		var tournament = storage.getItem( 'tournament' );
		var tw = storage.getItem( 'tw' );
		var dc = storage.getItem( 'dc' );
		var sp = storage.getItem( 'sp' );
		var fc = storage.getItem( 'fc' );
		var guild = storage.getItem( 'guild' );
		var cm = storage.getItem( 'cm' );
		var profilePicSize = storage.getItem( 'profilePicSize' );
		var profilePicNameC = storage.getItem( 'profilePicNameC' );
		var profilePicData = storage.getItem( 'profilePicData' );
		var bgPicNameC = storage.getItem( 'bgPicNameC' );
		var bgPicData = storage.getItem( 'bgPicData' );
		var bgPicNameC = storage.getItem( 'bgPicNameC' );
		var bgPicData = storage.getItem( 'bgPicData' );
		var bgTheme = storage.getItem( 'bgTheme' );
		var bgTrans = storage.getItem( 'bgTrans' );
		var bgColor = storage.getItem( 'bgColor' );
		var fontColor = storage.getItem( 'fontColor' );
		var defaultColor = storage.getItem( 'defaultColor' );
		var selectedFont = storage.getItem( 'selectedFont' );
		var savedAt = storage.getItem( 'savedAt' );

		//LocalStorageの日付が空文字列またはnullならLocalStorageをロード
		if ( savedAt !== null ){
			let load = confirm( "前回端末に保存した内容を読み込みますか？\n（保存日時：" + savedAt + "）" );
			if ( load ){
				//ここからLocalStorageロード
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
				document.getElementById( 'fileName2' ).innerHTML = bgPicNameC;
				
				//console.log(profilePicData);
				
				if ( profilePicData == null ){
					profilePicName = '<i class="fas fa-folder-open"></i> （ファイルを選択）';
				} else {
					img[9].src = profilePicData;
					profilePicName = profilePicNameC;
				}
				
				if ( bgPicData == null ){
					bgPicName = '<i class="fas fa-folder-open"></i> （ファイルを選択）';
				} else {
					img[12].src = bgPicData;
					bgPicName = bgPicNameC;
				}
				
				document.getElementById( "bgtheme" ).value = bgTheme;
				document.getElementById( "bgTrans" ).value = bgTrans;
				document.getElementById( "bgColor" ).value = bgColor;
				document.getElementById( "fontColor" ).value = fontColor;
				document.getElementById( "defaultColor" ).value = defaultColor;
				document.getElementById( "font" ).value = selectedFont;
				
				
				//選択肢もロード
				document.getElementById( "dl" ).value = dl;
				document.getElementById( "rank" ).value = rank;
	
	
				//ヒーロー選択内容の配列が文字列に置き換わっているのでこれを配列に変換しなおす
				heroBSel = heroBSel.split( ',' );
				heroFSel = heroFSel.split( ',' );
				
				var heroBe = document.getElementById('heroB').options;
				var heroFe = document.getElementById('heroF').options;
				
				//新処理
				for ( let i = 0, l = heroBSel.length ; l > i ; i++ ){
					if( heroBSel[i] !== "" ){
						for ( let i2 = 0, l2 = heroBe.length ; l2 > i2 ; i2++ ){
							if ( heroBSel[i] == heroBe[i2].value ){
								heroBe[i2].selected = true;
							}
						}
					}
				}
				for ( let i = 0, l = heroFSel.length ; l > i ; i++ ){
					if( heroFSel[i] !== "" ){
						for ( let i2 = 0, l2 = heroFe.length ; l2 > i2 ; i2++ ){
							if ( heroFSel[i] == heroFe[i2].value ){
								heroFe[i2].selected = true;
							}
						}
					}
				}
				
				/*旧処理（キャラ追加するとバグる）
				
				for ( let i = 0, l = heroBSel.length ; l > i ; i++ ) {
					if ( heroBSel[i] !== "" ) {
						heroBe[i].selected = true ;
					}
				}
				for ( let i = 0, l = heroFSel.length ; l > i ; i++ ) {
					if ( heroFSel[i] !== "" ) {
						heroFe[i].selected = true ;
					}
				}
				
				*/

				//背景画像を読み込まないとエラーが出るので再代入
				if ( document.forms.design.bgtheme.value !== "monotone" && document.forms.design.bgtheme.value !== "custom" ){
					img[11].src = "img/bg/" + document.forms.design.bgtheme.value + ".png";
				}
				
				//最後にアラート
				alert( "前回の入力内容を読み込みました。\n変更があるなら適用して「コンパス履歴書を生成する！」を押してください。" );
				document.getElementById("saveAlert").innerHTML = '<span style="font-size:3.2vw; color:green;"><i class="fas fa-check"></i> 端末に保存されています<br>（ページを離れても内容は保持されます）</span>';
				window.removeEventListener( 'beforeunload', nonSaved );
				//フォントをロード
				onChangeForms();
			}/* else if ( load == false ){
				//falseだった場合LocalStorageを消去するかどうか聞く（elseifにしたのはundefinedに対応するため）
				let del = confirm( "端末に保存されたこのサイトのデータを削除しますか？\n（この操作は取り消せません）" );
				if ( del ){
					storage.clear();
					alert( "このサイトのデータを端末から消去しました。" );
					document.getElementById("saveAlert").innerHTML = '<span style="font-size:3.2vw; color:red;"><i class="fas fa-times"></i> 保存されていません<br>（保存可能です）</span>';
					window.removeEventListener( 'beforeunload', nonSaved );
				} else {
					document.getElementById("saveAlert").innerHTML = '<span style="font-size:3.2vw; color:red;"><i class="fas fa-exclamation-triangle"></i> 端末にデータがあります<br>（この状態で保存すると上書きされます）</span>';
				}
			}*/ else {
				document.getElementById("saveAlert").innerHTML = '<span style="font-size:3.2vw; color:red;"><i class="fas fa-exclamation-triangle"></i> 端末にデータがあります<br>（この状態で保存すると上書きされます）</span>';
			}
		} else {
			document.getElementById("saveAlert").innerHTML = '<span style="font-size:3.2vw; color:red;"><i class="fas fa-times"></i> 保存されていません<br>（保存可能です）</span>';
		}
	} else {
		alert('お使いの環境ではLocalStorageが使用できません。\nこのまま履歴書を作成することもできますが、入力内容はページを離れると全て失われ、保存することはできません。');
		document.getElementById("saveAlert").innerHTML = '<span style="font-size:3.2vw; color:red;"><i class="fas fa-times"></i> LocalStorageが使用できません<br>（履歴書の作成、保存はできます）</span>';
	}
}





//読み込み時にLocalStorageがあればフォームの内容を変更する関数を実行
window.addEventListener('load', loadFromCookie );





//ローカルストレージを消す
function clearStorage(){
	let del = confirm( "端末に保存されたこのサイトのデータを削除しますか？\n（この操作は取り消せません）" );
	if ( del ){
		storage.clear();
		alert( "このサイトのデータを端末から消去しました。" );
		document.getElementById("saveAlert").innerHTML = '<span style="font-size:3.2vw; color:red;"><i class="fas fa-times"></i> 保存されていません<br>（保存可能です）</span>';
		window.removeEventListener( 'beforeunload', nonSaved );
	}
}





//共有ボタン
if ( navigator.share ) {
	function shareLink(){
		navigator.share({
			title: '#コンパス履歴書ジェネレーター',
			text: '#コンパス履歴書ジェネレーター で #コンパス履歴書 を3分で作ろう！Σd(・ω・ ) #コンパス',
			url: location.href
		});
	}
} else {
	document.getElementById('shareLink').hidden = true;
}
