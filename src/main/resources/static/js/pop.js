// JavaScriptでポップアップの表示・非表示を管理
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
  