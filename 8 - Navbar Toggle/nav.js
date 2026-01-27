// Buttons
const closeBtn = document.getElementById('close');

// Nav Bar
const navBar = document.querySelector('.side-nav-bar');

closeBtn.addEventListener('click', () => {
    navBar.classList.add('active');
});