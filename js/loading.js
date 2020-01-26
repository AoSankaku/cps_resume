//ローディング画面の処理
window.onload = function loading(){

	//ローディング画面のを先にする
	let formLoader = document.getElementById('formLoader');
	// .box に .loaded を追加してローディング表示を消す
	formLoader.classList.add('formLoader-complete');

}
