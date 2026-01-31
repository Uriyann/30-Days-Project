// Input Boxes
const inputBox = document.getElementById("inputBox");
const outBox = document.getElementById("outBox");

// Buttons
const button = document.querySelector(".button");

let currentInput = "";
let previousInput = "";
let operator = null;

button.addEventListener("click", (event) => {
  if (!event.target.matches("button")) return;

  const value = event.target.textContent;
  console.log(value);
});
