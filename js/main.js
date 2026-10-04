document.addEventListener("DOMContentLoaded", function () {

    // 手機版選單
    const menuButton = document.querySelector(".menu-button");
    const navMenu = document.querySelector(".nav-menu");

    if (menuButton && navMenu) {

        menuButton.addEventListener("click", function () {
            navMenu.classList.toggle("open");
        });

        // 點選導覽項目後，自動收起手機選單
        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                navMenu.classList.remove("open");
            });
        });

        // 點選單外面時收起
        document.addEventListener("click", function (event) {
            if (
                !navMenu.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {
                navMenu.classList.remove("open");
            }
        });
    }

});