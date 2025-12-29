// Getting the ID
const modalExit = document.getElementById('modalExit');
const cancelBtn = document.getElementById('cancelBtn');
const subBtn = document.getElementById('subBtn');
const modalPopup = document.getElementById('modalPopup');

// Button Click Function
subBtn.onclick = () => {
    modalPopup.style.display = "block";
    modalPopup.style.opacity = 1;
};

modalExit.onclick = () => {
    modalPopup.style.display = "none";
    modalPopup.style.opacity = 0;
}

cancelBtn.onclick = () => {
    modalPopup.style.display = "none";
    modalPopup.style.opacity = 0;
}