// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
        e.preventDefault();
        alert('Please enter a valid email address.');
    }
});

// Pop-up Message (e.g., Book Now)
const bookNowBtn = document.querySelector('#hero button');
bookNowBt
