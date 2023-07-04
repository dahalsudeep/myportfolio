
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

function myFunction() {
    document.getElementById("menu-btn").toggleAttribute = (".navbar");
}

