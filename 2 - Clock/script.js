// Clock Hands
const secondHand = document.querySelector('.hand-second');
const minuteHand = document.querySelector('.hand-minute');
const hourHand = document.querySelector('.hand-hour');

// Clock Boxes
const dayTime = document.getElementById('time-Day');
const hourTime = document.getElementById('time-Hour');
const minuteTime = document.getElementById('time-Minute');
const secondTime = document.getElementById('time-Second');

function setDate(){
    const time = new Date();

    // Seconds
    const seconds = time.getSeconds();
    const degreeSeconds = ((seconds / 60) * 360) + 90;

    // Minutes
    const minutes = time.getMinutes();
    const degreeMinutes = ((minutes / 60) * 360) + 90;

    // Hours
    const hours = time.getHours();
    const degreeHours = ((hours / 60) * 360) + 90;

    // Days
    const days = time.getDay();

    // Hands
    secondHand.style.transform = `rotate(${degreeSeconds}deg)`;
    minuteHand.style.transform = `rotate(${degreeMinutes}deg)`;
    hourHand.style.transform = `rotate(${degreeHours}deg)`;

    // Boxes
    dayTime.textContent = days;
    hourTime.textContent = hours;
    minuteTime.textContent = minutes;
    secondTime.textContent = seconds;
}



setInterval(setDate, 1000);