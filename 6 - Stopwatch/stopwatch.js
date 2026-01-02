// Script for stopwatch


// Time Texts

// Main Timer
const mainHour = document.getElementById('hr');
const mainMin = document.getElementById('min');
const mainSec = document.getElementById('sec');
const mainMs = document.getElementById('ms');

// Fastest Record
const topHour = document.getElementById('topHr');
const topMin = document.getElementById('topMin');
const topSec = document.getElementById('topSec');
const topMs = document.getElementById('topMs');

// Average Record
const avgHour = document.getElementById('avgHr');
const avgMin = document.getElementById('avgMin');
const avgSec = document.getElementById('avgSec');
const avgMs = document.getElementById('avgMs');

// Fastest Record
const lowHour = document.getElementById('lowHr');
const lowMin = document.getElementById('lowMin');
const lowSec = document.getElementById('lowSec');
const lowMs = document.getElementById('lowMs');

// Buttons
const startButton = document.getElementById('startButton');
const lapButton = document.getElementById('lapButton');
const resetButton = document.getElementById('resetButton');

// Start Button
const icon = document.querySelector('.start-icon');
const label = document.querySelector('.start-label');


// Functions

// Buttons
// Start/Pause Changes
let running = false;

startButton.addEventListener('click', () => {
    running = !running;

    if (running) {
        icon.textContent = "pause";
        label.textContent = "Pause";
        toggleStartPause();
    } else {
        icon.textContent = "play_arrow";
        label.textContent = "Play";
        toggleStartPause();
    }
});

// Lap Button
lapButton.addEventListener('click', () => {
    lap();
})

// Reset Button
resetButton.addEventListener('click', () => {
    reset();
});


// Variables
let elapsedTime = 0;
let timeInterval = null;
let isRunning = false;
let laps = [];

// Timer Function
function formatTime(ms) {
    const hours = Math.floor(ms / 3600000);
    const minute = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 600000) / 1000);
    const milliseconds = ms % 1000;

    mainHour.textContent = hours.toString().padStart(2, "0");
    mainMin.textContent = minute.toString().padStart(2, "0");
    mainSec.textContent = seconds.toString().padStart(2, "0");
    mainMs.textContent = milliseconds.toString().padStart(2, "0");
};

// Start/Pause Timer
function toggleStartPause() {
    if(isRunning) {
        clearInterval(timeInterval);
        isRunning = false;
    } else {
        let lastTime = Date.now();
        timeInterval = setInterval(() => {
            const now = Date.now();
            elapsedTime += now - lastTime;
            lastTime = now;
            formatTime(elapsedTime);
        }, 10)
        isRunning = true;
    }
};

// Lap
function lap() {
    if (!isRunning) return;
    laps.push(elapsedTime);
    console.log(formatTime(elapsedTime));
    console.log(laps)
};

// Reset
function reset() {
    clearInterval(timeInterval);
    elapsedTime = 0;
    isRunning = false;
    laps = [];
    formatTime(0);
};