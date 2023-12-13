document.addEventListener("DOMContentLoaded", () => {
    let nav = document.querySelector('nav');
    let menuBtn = document.querySelector('.nav-menu');
    let hamburger = document.querySelector('.hamburger'); // Fixed the typo here
    let closeBtn = document.querySelector('#close-button');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            nav.classList.add('scrolled');
        } else if (window.scrollY <= 300) {
            nav.classList.remove('scrolled');
        }
    });

    menuBtn.addEventListener('click', function () {
        hamburger.style.display = "block";
        hamburger.classList.add('hamburger-enter');
        setTimeout(() => {
            hamburger.classList.add('hamburger-enter-active');
        }, 0);
    });

    closeBtn.addEventListener('click', function () {
        hamburger.classList.remove('hamburger-enter-active');
        hamburger.classList.add('hamburger-exit');
        setTimeout(() => {
            hamburger.style.display = "none";
            hamburger.classList.remove('hamburger-exit');
        }, 300);
    });
});
