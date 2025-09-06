// Smooth scroll animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Toggle menu mobile com animação fade + slide dinâmica
document.addEventListener('DOMContentLoaded', function() {
    const toggler = document.querySelector('.navbar-toggler');
    const menu = document.querySelector('.navbar-collapse');

    toggler.addEventListener('click', () => {
        if (menu.style.maxHeight && menu.style.maxHeight !== '0px') {
            // recolher menu
            menu.style.maxHeight = '0';
            menu.style.opacity = '0';
        } else {
            // expandir menu
            menu.style.maxHeight = menu.scrollHeight + 'px';
            menu.style.opacity = '1';
        }
    });
});

// ---------- CARROSSEL HERO AUTOMÁTICO ----------
const heroSlides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.carousel-control-prev');
const nextBtn = document.querySelector('.carousel-control-next');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000);

function showSlide(index) {
    heroSlides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % heroSlides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
    showSlide(currentSlide);
}

nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
});

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}

// Inicializa
showSlide(currentSlide);
