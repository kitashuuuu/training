document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menuButton");
    const menuPopup = document.getElementById("menuPopup");
    const closeMenu = document.getElementById("closeMenu");
  
    // メニューを開く
    menuButton.addEventListener("click", () => {
      menuPopup.style.display = "flex"; // ポップアップを表示
    });
  
    // メニューを閉じる
    closeMenu.addEventListener("click", () => {
      menuPopup.style.display = "none"; // ポップアップを非表示
    });
  
    // 背景をクリックしても閉じる
    menuPopup.addEventListener("click", (e) => {
      if (e.target === menuPopup) {
        menuPopup.style.display = "none";
      }
    });
  });
  