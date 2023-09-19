document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".header__burger");
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".overlay");
    const closeBtn = document.querySelector(".close-btn"); 
    const body = document.body; 

    burger.addEventListener("click", function () {
        openSidebar();
        disableScroll(); 
    });

    closeBtn.addEventListener("click", function () {
        closeSidebar();
        enableScroll(); 
    });

    overlay.addEventListener("click", function () {
        closeSidebar();
        enableScroll(); 
    });

    function openSidebar() {
        sidebar.classList.add("open");
        overlay.classList.add("open");
    }

    function closeSidebar() {
        sidebar.classList.remove("open");
        overlay.classList.remove("open");
    }

    function disableScroll() {
        body.classList.add("scroll-lock");
    }

    function enableScroll() {
        body.classList.remove("scroll-lock");
    }
});
