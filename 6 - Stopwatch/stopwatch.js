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

// Lap History
const lapList = document.getElementById('lapList');
const lapDeleteHistory = document.getElementById('lapDeleteHistory');




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

    const lapTime = elapsedTime;
    const lapNumber = laps.length + 1;
    const previousLap = laps[laps.length - 1] ?? 0;
    const lapGap = lapTime - previousLap;

    laps.push(elapsedTime);

    addLapHistory(
        lapNumber,
        formatLapTime(lapTime),
        formatLapGap(lapGap)
    );

    updateLapsTime();
});

// Reset Button
resetButton.addEventListener('click', () => {
    reset();
});

// Lap History Clear Button
lapDeleteHistory.addEventListener('click', () => {
    clearLapHistory();
});

// Variables
let elapsedTime = 0;
let timeInterval = null;
let isRunning = false;
let laps = [];

// Timer Function
function formatTime(ms) {
    return {
    hours: Math.floor(ms / 3600000),
    minute: Math.floor((ms % 3600000) / 60000),
    seconds: Math.floor((ms % 60000) / 1000),
    milliseconds: ms % 1000
    }
};

function displayTime(time, hrE1, minE1, secE1, msE1) {
    hrE1.textContent = time.hours.toString().padStart(2, "0");
    minE1.textContent = time.minute.toString().padStart(2, "0");
    secE1.textContent = time.seconds.toString().padStart(2, "0");
    msE1.textContent = time.milliseconds.toString().padStart(3, "0");
};

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
        displayTime(
            formatTime(elapsedTime), mainHour, mainMin, mainSec, mainMs);
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
    displayTime(formatTime(lowest), lowHour, lowMin, lowSec, lowMs);
    displayTime(formatTime(highest), topHour, topMin, topSec, topMs);
    displayTime(formatTime(average), avgHour, avgMin, avgSec, avgMs);
};

// Lap History Display
function addLapHistory(lapNumber, lapTime, lapGap) {
    const lapRow = document.createElement('div');
    lapRow.className = 'lap-row';

    lapRow.innerHTML = `
        <span class="lap-name">Lap ${lapNumber}</span>
        <span class="lap-time">${lapTime}</span>
        <span class="lap-gap">${lapGap}</span>
    `;

    lapList.prepend(lapRow);
};

function formatLapTime(ms) {
    const timeResult = formatTime(ms);
    return  `${timeResult.hours.toString().padStart(2, "0")}:` +
            `${timeResult.minute.toString().padStart(2, "0")}:` +
            `${timeResult.seconds.toString().padStart(2, "0")}:` +
            `${timeResult.milliseconds.toString().padStart(3, "0")}:`
};

function formatLapGap(ms) {
    const sign = ms >= 0 ? "+" : "-";
    return sign + formatLapTime(Math.abs(ms));
};

function clearLapHistory() {
    lapList.innerHTML = '';
};

// Reset
function reset() {
    clearInterval(timeInterval);
    elapsedTime = 0;
    isRunning = false;
    laps = [];

    displayTime(formatTime(0), mainHour, mainMin, mainSec, mainMs);
    displayTime(formatTime(0), lowHour, lowMin, lowSec, lowMs);
    displayTime(formatTime(0), topHour, topMin, topSec, topMs);
    displayTime(formatTime(0), avgHour, avgMin, avgSec, avgMs);

    icon.textContent = "play_arrow";
    label.textContent = "Play";

    lapList.innerHTML = '';
};