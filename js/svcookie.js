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
	var cm = document.getElementById('comment').value;
	//選択肢の内容もあらかじめロード
	var heroB = document.getElementById("heroB");
	var heroF = document.getElementById("heroF");
	var heroBe = heroB.options;
	var heroFe = heroF.options;
	var heroBSel = new Array( heroBe.length );
	var heroFSel = new Array( heroBe.length );

	/*
	console.log( heroBe );
	console.log( heroFe );
	console.log( heroBSel );
	console.log( heroFSel );
	console.log( heroBSel.length );
	console.log( heroFSel.length );
	*/

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

	//■Cookieに書き込み
	Cookies.set( 'read' , read );
	Cookies.set( 'name' , name );
	Cookies.set( 'dl' , dl );
	Cookies.set( 'rank' , rank );
	Cookies.set( 'heroBSel' , heroBSel );
	Cookies.set( 'heroFSel' , heroFSel );
	Cookies.set( 'bronze' , bronze );
	Cookies.set( 'silver' , silver );
	Cookies.set( 'gold' , gold );
	Cookies.set( 'tournament' , tournament );
	Cookies.set( 'tw' , tw );
	Cookies.set( 'dc' , dc );
	Cookies.set( 'sp' , sp );
	Cookies.set( 'fc' , fc );
	Cookies.set( 'cm' , cm );
	Cookies.set( 'savedAt' , savedAt );

	//最後にアラート
	alert("記入内容をCookieに保存しました！");
	//htmlを書き換え（保存しましたにする）
	document.getElementById("saveAlert").innerHTML = '<span style="color:green;"><i class="fas fa-check"></i> Cookieに保存されています</span>';
	
} else {

	alert("【エラー】\n保存するにはCookieを有効にして下さい。")
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
		var cm = Cookies.get( 'cm' );
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
				document.getElementById( "comment" ).value = cm;
				//選択肢もロード
				document.getElementById("dl").value = dl;
				document.getElementById("rank").value = rank;
	
	
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



				//最後にアラート
				alert( "前回の入力内容を読み込みました。\n変更があるなら適用して「コンパス履歴書を生成する！」を押してください。" );
				document.getElementById("saveAlert").innerHTML = '<span style="color:green;"><i class="fas fa-check"></i> Cookieに保存されています</span>';
			} else if ( load == false ){
				//falseだった場合キャッシュを消去するかどうか聞く（elseifにしたのはundefinedに対応するため）
				var del = confirm( "このサイトのCookieを削除しますか？\n（この操作は取り消せません）" );
				if ( del == true ){
					Cookies.remove( 'savedAt' );
					alert( "このサイトのキャッシュを消去しました。" );
					document.getElementById("saveAlert").innerHTML = '<span style="color:red;"><i class="fas fa-times"></i> 保存されていません</span>';
				} else {
					document.getElementById("saveAlert").innerHTML = '<span style="color:red;"><i class="fas fa-exclamation-triangle"></i> Cookieにデータがあります<br>（この状態で保存すると上書きされます）</span>';
				}
			}
		} else {
			document.getElementById("saveAlert").innerHTML = '<span style="color:red;"><i class="fas fa-times"></i> 保存されていません</span>';
		}
	} else {
		alert('Cookieが無効になっています。\nこのまま履歴書を作成することもできますが、入力内容はページを離れると全て失われ、保存することはできません。');
		document.getElementById("saveAlert").innerHTML = '<span style="color:red;"><i class="fas fa-times"></i> Cookieが無効です</span>';
	}
});
