const display = document.querySelector(".display span");
const btn1 = document.querySelector("#one");
const btn2 = document.querySelector("#two");
const btn3 = document.querySelector("#three");
const btn4 = document.querySelector("#four");
const btn5 = document.querySelector("#five");
const btn6 = document.querySelector("#six");
const btn7 = document.querySelector("#seven");
const btn8 = document.querySelector("#eight");
const btn9 = document.querySelector("#nine");
const btn0 = document.querySelector("#zero");
const btnSub = document.querySelector("#sub");
const btnAdd = document.querySelector("#add");
const btnMultiply = document.querySelector("#multiply");
const btnEquals = document.querySelector("#equals");
const calcBtns = document.querySelectorAll("button");
let currentDisplay = "";
calcBtns.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent == "=") {
      calculateExpression();
    } else {
      updateDisplay(button.textContent);
    }
  });
});

const updateDisplay = (value) => {
  currentDisplay += value;
  display.textContent = currentDisplay;
};

const calculateExpression = () => {
  console.log(currentDisplay);
  currentDisplay = "";
};
