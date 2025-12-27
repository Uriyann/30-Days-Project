const digitNum = document.getElementById('digitNum');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');
const incrementBtn = document.getElementById('incrementBtn');

let count = 0;

decrementBtn.onclick = () => {
    count -= 1;
    digitNum.textContent = count;
};

resetBtn.onclick = () => {
    count = 0;
    digitNum.textContent = count;
};

incrementBtn.onclick = () => {
    count += 1;
    digitNum.textContent = count;
};