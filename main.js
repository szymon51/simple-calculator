let firstNumber;
let secondNumber;
let operator;

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function operate(operator, firstNumber, secondNumber) {
    let result = "";
    switch (operator) {
        case '+':
            result = add(firstNumber, secondNumber);
            break;
        case '-':
            result = subtract(firstNumber, secondNumber);
            break;
        case '*':
            result = multiply(firstNumber, secondNumber);
            break;
        case '/':
            result = divide(firstNumber, secondNumber);
            break;
        default:
            result = null;
    }
    return result;
}

function getButtonValue(button) {
    firstValue = button.target.textContent;
    populateDisplay();
}

function populateDisplay() {
    document.getElementById('inputContent').value += firstValue;
}

let firstValue = "";
let secondValue = "";
let operatorValue = "";

const allButtons = document.querySelectorAll('#numberButtons > button, #operationButtons > button');
allButtons.forEach(button => button.addEventListener('click', getButtonValue));