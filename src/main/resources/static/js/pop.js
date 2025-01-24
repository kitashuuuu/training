// // // JavaScriptでポップアップの表示・非表示を管理
 document.addEventListener("DOMContentLoaded", () => {
    const openButton = document.getElementById("openPopup");
    const closeButton = document.getElementById("closePopup");
    const popup = document.getElementById("popup");
  
    // ポップアップを表示する
    openButton.addEventListener("click", () => {
      popup.style.display = "flex";
    });
  
    // ポップアップを閉じる
    closeButton.addEventListener("click", () => {
      popup.style.display = "none";
     });
  
     // 背景をクリックした場合もポップアップを閉じる
     popup.addEventListener("click", (e) => {
       if (e.target === popup) {
         popup.style.display = "none";
       }
     });
   });
   cancelButton.addEventListener("click", function() {
     popup.style.display = "none";
   overlay.style.display = "none";
   });
//   // 要素を取得
// const openPopup = document.getElementById('openPopup');
// const popup = document.getElementById('popup');
// const cancelPopup = document.getElementById('cancelPopup');

// // 「ログアウト」リンクをクリックしたときにポップアップを表示
// openPopup.addEventListener('click', (event) => {
//   event.preventDefault(); // リンクのデフォルト動作を無効化
//   popup.classList.remove('hidden'); // ポップアップを表示
// });

// // 「いいえ」ボタンをクリックしたときにポップアップを非表示
// cancelPopup.addEventListener('click', () => {
//   popup.classList.add('hidden'); // ポップアップを非表示
// });
