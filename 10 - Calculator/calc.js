// Input Boxes
const inputBox = document.getElementById("inputBox");
const outputBox = document.getElementById("outputBox");

// Buttons
const button = document.querySelector(".calc-buttons");

let currentInput = "";
let previousInput = "";
let operator = null;
let finalResult = "";

button.addEventListener("click", (event) => {
  const btn = event.target.closest("button");
  if (!btn) return;

  const value = btn.textContent;

  if (btn.classList.contains("number")) {
    handleDecimal(value);
  }

  if (value === "√" || value === "²") {
    applyUnary(value);
  } else if (btn.classList.contains("operator")) {
    handleOperator(value);
  }

  if (btn.classList.contains("sum")) {
    calculator();
  }

  if (value === "AC") {
    clearDisplay();
  }

  if (value === "DEL") {
    deleteLast();
  }
});

function handleDecimal(num) {
  if (num === "." && currentInput.includes(".")) return;
  currentInput += num;
  inputBox.value = currentInput;
}

function handleOperator(ope) {
  if (currentInput === "") return;

  previousInput = currentInput;
  currentInput = "";

  if (ope === "x") operator = "*";
  else operator = ope;

  inputBox.value = previousInput + " " + ope;
}

function calculator() {
  if (!previousInput || !currentInput || !operator) return;

  const val1 = parseFloat(previousInput);
  const val2 = parseFloat(currentInput);

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
    case "%":
      result = val1 % val2;
      break;
    case "^":
      result = Math.pow(val1, val2);
      break;
    default:
      return;
  }

  outputBox.value = result;
  inputBox.value = "";

  currentInput = result.toString();
  previousInput = "";
  operator = null;
}

function clearDisplay() {
  currentInput = "";
  operator = null;
  previousInput = "";
  inputBox.value = "";
  outputBox.value = "";
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  inputBox.value = currentInput;
}

function applyUnary(ope) {
  if (currentInput === "") return;

  const val = parseFloat(currentInput);
  let result;

  if (ope === "√") {
    result = Math.sqrt(val);
  } else if (ope === "²") {
    result = val * val;
  }

  inputBox.value = result.toString();
  currentInput = result.toString();
}
