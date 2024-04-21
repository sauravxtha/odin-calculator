const display = document.querySelector(".display span");
const calcBtns = document.querySelectorAll("button");
let left = "";
let right = "";
let operator = "";
let currentDisplay = "";
calcBtns.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent == "=") {
      calculateExpression(display.textContent);
    } else if (button.textContent == "AC") {
      console.log("clicked");
      currentDisplay = "";
      left = "";
      right = "";
      operator = "";
      display.textContent = "";
    } else if (button.textContent == "+") {
      if (operator) {
        calculateExpression();
      }
      operator = "+";
      updateDisplay();
    } else if (button.textContent == "-") {
      if (operator) {
        calculateExpression();
      }
      operator = "-";
      updateDisplay();
    } else if (button.textContent == "*") {
      if (operator) {
        calculateExpression();
      }
      operator = "*";
      updateDisplay();
    } else {
      if (!operator) {
        left += button.textContent;
        updateDisplay();
      } else {
        right += button.textContent;
        updateDisplay();
      }
    }
  });
});

const updateDisplay = () => {
  display.textContent = left + operator + right;
};

const calculateExpression = (expression) => {
  switch (operator) {
    case "+":
      display.textContent = +left + +right;
      left = +left + +right;
      right = "";
      operator = "";
      break;
    case "-":
      display.textContent = +left - +right;
      left = +left - +right;
      right = "";
      operator = "";
      break;
    case "*":
      display.textContent = +left * +right;
      left = +left * +right;
      right = "";
      operator = "";
      break;
  }
};
