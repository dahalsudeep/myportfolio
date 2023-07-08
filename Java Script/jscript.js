

// toggle navigation--------------
let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');


menuBtn.onclick = () => {
    menuBtn.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Type Animation---------------

const animText = new Typed ('.anim-text', {
    strings: ['Frontend Developer', ' Gamer', ' Video Editor', ' Graphics Designer'],
    backSpeed: 100,
    typeSpeed: 125,
    backDelay: 600,
    loop: true
});


// Scroll reveal----------------------

ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-photo, .services-content, .portfolio-box, .contact form', {origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin:'right'});

// active link-------------------------

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset +height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // sticky navigation------------------

let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY> 100);

// remove menubtn on navbar click-----------

menuBtn.classList.remove('bx-x');
navbar.classList.remove('active');

};





