let popup = document.querySelector('.nav-links');
let bg = document.querySelector('.background-mobile-menu');

document.querySelector('.togle-menu').addEventListener('click', function() {
    popup.style.display = 'block';
    bg.style.display = 'block';
})
document.querySelector('.close-icon').addEventListener('click', function() {
    popup.style.display = 'none';
    bg.style.display = 'none';
})