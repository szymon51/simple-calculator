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
    let buttonValue = button.target.textContent;
    checkButtonValue(buttonValue);
    //get a value
    //check if it is a number
    //if it is then append it to the firstValue and display firsvalue
    //else if it is an operator check if operatorValue is empty 
    // if yes then append the new operator
    // if not then call the operate function
    // pass the value of the operate function to populateDisplay
}

function clearData() {
    firstValue = 0;
    secondValue = 0;
    display.value = 0;
    result = 0;
    operatorValue = "";
}

function checkButtonValue(currentValue) {
    if (Number.isInteger(Number(currentValue))) {
            if (operatorValue) {
                display.value = 0;
                secondValue = secondValue * 10 + Number(currentValue);
            } else {
            firstValue = firstValue * 10 + Number(currentValue);
            }
            populateDisplay();
    }
    else if (currentValue === "C") clearData();
    else {
        operatorValue = currentValue;
    }
}

function populateDisplay() {
    if (secondValue) display.value = secondValue;
    else display.value = firstValue;
}

const display = document.querySelector('#display');
let firstValue = 0;
let secondValue = 0;
let operatorValue = "";
let isSecondValue = false;
let result = 0;

const allButtons = document.querySelectorAll('#numberButtons > button, #operationButtons > button');
allButtons.forEach(button => button.addEventListener('click', getButtonValue));