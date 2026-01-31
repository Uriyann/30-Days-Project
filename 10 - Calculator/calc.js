// Input Boxes
const inputBox = document.getElementById("inputBox");
const outBox = document.getElementById("outBox");

// Buttons
const button = document.querySelector(".calc-buttons");

let currentInput = "";
let previousInput = "";
let operator = null;

button.addEventListener("click", (event) => {
  if (!event.target.matches("button")) return;

  const value = event.target.textContent;
  console.log(value);
});

function handleDecimal(num) {
  if (num === "." && currentInput === ".") {
    currentInput += num;
  }
}

function handleOperator(ope) {
  if (currentInput === "") return;

  previousInput = currentInput;
  currentInput = "";
  operator = ope;
}

function calculator() {
  if (!previousInput || !currentInput || !operator) return;

  const val1 = parseFloat(currentInput);
  const val2 = parseFloat(previousInput);

  let result;

  switch (operator) {
    case "+":
      result = val1 + val2;
      break;
    case "-":
      result = val1 - val2;
      break;
    case "*":
      result = val1 * val2;
      break;
    case "/":
      result = val2 !== 0 ? val1 / val2 : "Error";
      break;
  }
}

function clearDisplay() {
  currentInput = "";
  operator = null;
  previousInput = "";
  inputBox.textContent = "";
  outBox.textContent = "";
}
