// Open and Close Nav for Mobile
const navOpenBtn = document.getElementById('navOpenBtn');
const navCloseBtn = document.getElementById('navCloseBtn');
const navLinks = document.getElementById('navLinks');

navOpenBtn.addEventListener('click', () => {
    navLinks.classList.add('active');
});

navCloseBtn.addEventListener('click', () => {
    navLinks.classList.remove('active');
});


// continue course slider
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.course-grid');
    const cards = document.querySelectorAll('.course-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let scrollAmount = 0;
    const cardWidth = cards[0].offsetWidth + 8; // card width + gap
    
    nextBtn.addEventListener('click', () => {
        scrollAmount += cardWidth * 2;
        if (scrollAmount > slider.scrollWidth - slider.clientWidth) {
            scrollAmount = slider.scrollWidth - slider.clientWidth;
        }
        slider.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
    
    prevBtn.addEventListener('click', () => {
        scrollAmount -= cardWidth * 2;
        if (scrollAmount < 0) {
            scrollAmount = 0;
        }
        slider.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
    
    // Touch events
    let touchStart = null;
    let touchX = null;
    
    slider.addEventListener('touchstart', (e) => {
        touchStart = e.touches[0].clientX;
        touchX = slider.scrollLeft;
    });
    
    slider.addEventListener('touchmove', (e) => {
        if (!touchStart) return;
        const touch = e.touches[0].clientX;
        const diff = touchStart - touch;
        slider.scrollLeft = touchX + diff;
        e.preventDefault();
    });
    
    slider.addEventListener('touchend', () => {
        touchStart = null;
        touchX = null;
    });
});