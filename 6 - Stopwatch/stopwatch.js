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
startButton.addEventListener('click', () => {
    toggleStartPause();

    if (isRunning) {
        icon.textContent = "pause";
        label.textContent = "Pause";
        
    } else {
        icon.textContent = "play_arrow";
        label.textContent = "Play";
    }
});

// Lap Button
lapButton.addEventListener('click', () => {
    if (!isRunning) return;

    laps.push(elapsedTime);
    updateLapsTime();
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
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = ms % 1000;

    mainHour.textContent = hours.toString().padStart(2, "0");
    mainMin.textContent = minute.toString().padStart(2, "0");
    mainSec.textContent = seconds.toString().padStart(2, "0");
    mainMs.textContent = milliseconds.toString().padStart(3, "0");
};

function setTimeLap(ms, hrE1, minE1, secE1, msE1) {
    const hours = Math.floor(ms / 3600000);
    const minute = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = ms % 1000;

    hrE1.textContent = hours.toString().padStart(2, "0");
    minE1.textContent = minute.toString().padStart(2, "0");
    secE1.textContent = seconds.toString().padStart(2, "0");
    msE1.textContent = milliseconds.toString().padStart(3, "0");
}

// Start/Pause Timer
function toggleStartPause() {
    if(isRunning) {
        clearInterval(timeInterval);
        isRunning = false;
        return;
    }

    let lastTime = Date.now();
    timeInterval = setInterval(() => {
        const now = Date.now();
        elapsedTime += now - lastTime;
        lastTime = now;
        formatTime(elapsedTime);
    }, 10)

    isRunning = true;
};

// Lap
function updateLapsTime() {
    if (laps.length === 0) return;

    const lowest = Math.max(...laps);
    const highest = Math.min(...laps);

    const total = laps.reduce((sum, lap) => sum + lap, 0);
    const average = Math.floor(total / laps.length);

    updateLapDisplay(lowest, highest, average);
};

function updateLapDisplay(lowest, highest, average) {
    setTimeLap(lowest, lowHour, lowMin, lowSec, lowMs);
    setTimeLap(highest, topHour, topMin, topSec, topMs);
    setTimeLap(average, avgHour, avgMin, avgSec, avgMs);
};

// Reset
function reset() {
    clearInterval(timeInterval);
    elapsedTime = 0;
    isRunning = false;
    laps = [];
    formatTime(0);
};