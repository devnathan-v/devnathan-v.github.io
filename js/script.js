// Initialize AOS Animation
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Initialize Typed.js
var typed = new Typed('#typed-text', {
    strings: ['Zoology Student', 'Medical Coder', 'Researcher', 'Beekeeper'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled', 'shadow-sm');
    } else {
        navbar.classList.remove('scrolled', 'shadow-sm');
    }
});

// Smooth Scroll for specific anchor links (optional if CSS scroll-behavior: smooth is not enough)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
