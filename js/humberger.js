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
