let nav = document.querySelector('nav');
let isScrolled = false;

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        nav.classList.add('scrolled');
    } else if (window.scrollY <= 300) {
        nav.classList.remove('scrolled');
    }
});
