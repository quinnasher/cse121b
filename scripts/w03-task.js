/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */

/* Function Definition - Add Numbers */
function add(number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  const addNumber1 = Number(document.querySelector("#add1").value);
  const addNumber2 = Number(document.querySelector("#add2").value);
  document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */

const subtract = function (number1, number2) {
  return number1 - number2;
};

const subtractNumbers = function () {
  const subNumber1 = Number(document.querySelector("#subtract1").value);
  const subNumber2 = Number(document.querySelector("#subtract2").value);
  document.querySelector("#difference").value = subtract(
    subNumber1,
    subNumber2,
  );
};

document
  .getElementById("subtractNumbers")
  .addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => {
  return number1 * number2;
};

const multiplyNumbers = () => {
  const factor1 = Number(document.getElementById("factor1").value);
  const factor2 = Number(document.getElementById("factor2").value);
  document.getElementById("product").value = multiply(factor1, factor2);
};

document
  .getElementById("multiplyNumbers")
  .addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
  return number1 / number2;
}

function divineNumbers() {
  const divided = Number(document.getElementById("dividend").value);
  const divisor = Number(document.getElementById("divisor").value);
  document.getElementById("quotient").value = divide(divided, divisor);
}

document
  .getElementById("divideNumbers")
  .addEventListener("click", divineNumbers);

/* Decision Structure */

const subtotalEl = document.getElementById("subtotal");
const memberEl = document.getElementById("member");
document.getElementById("getTotal").addEventListener("click", () => {
  const subtotal = Number(subtotalEl.value);
  if (Number(subtotal)) {
    let total;
    const isMember = memberEl.checked;

    if (isMember) {
      total = subtotal - 0.2 * subtotal;
      document.getElementById("total").textContent = `$${total.toFixed(2)}`;
    } else {
      total = subtotal;
      document.getElementById("total").textContent = `$${total.toFixed(2)}`;
    }
  } else alert(`${subtotalEl} is not a number`);
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById("array").textContent = numberArray;

/* Output Odds Only Array */
document.getElementById("odds").textContent = numberArray.filter(
  (number) => number % 2 !== 0,
);

/* Output Evens Only Array */
document.getElementById("evens").textContent = numberArray.filter(
  (number) => number % 2 === 0,
);

/* Output Sum of Org. Array */
document.getElementById("sumOfArray").textContent = numberArray.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
);

/* Output Multiplied by 2 Array */
document.getElementById("multiplied").textContent = numberArray.map(
  (number) => number * 2,
);

/* Output Sum of Multiplied by 2 Array */
document.getElementById("sumOfMultiplied").textContent = numberArray
  .map((number) => number * 2)
  .reduce((previousValue, currentValue) => previousValue + currentValue);
