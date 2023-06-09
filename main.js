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
    if(secondNumber === 0) result = "ERROR";
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
            result = roundNumber(multiply(firstNumber, secondNumber));
            break;
        case '/':
            result = roundNumber(divide(firstNumber, secondNumber));
            break;
        default:
            result = undefined;
    }
    return result;
}

function roundNumber(number) {
    return Math.round(number * 1000000) / 1000000;
}

function getButtonValue(button) {
    let buttonValue = button.target.textContent;
    checkButtonValue(buttonValue);
}

function clearData() {
    firstValue = undefined;
    secondValue = undefined;
    display.value = 0;
    result = undefined;
    operatorValue = "";
}

function makeOperationsUnavailable() {
    operationButtons.forEach(button => button.classList.add("notAvailable"));
}

function makeOperationsAvailable() {
    operationButtons.forEach(button => button.classList.remove("notAvailable"));
}

function checkButtonValue(currentValue) {
    if (Number.isInteger(Number(currentValue))) {
            if (operatorValue) {
                if (secondValue === undefined) secondValue = Number(currentValue);
                else secondValue = secondValue * 10 + Number(currentValue);
            }else {
                if (firstValue === undefined) firstValue = Number(currentValue);
                else firstValue = firstValue * 10 + Number(currentValue);
            }
            populateDisplay();
            makeOperationsAvailable();
    }
    else if (currentValue === "C") clearData();
    else if (currentValue === "=") {
        if (secondValue === undefined && operatorValue === undefined) display.value = firstValue;
        if (operatorValue ==="/" && secondValue === 0) {
            clearData();
            display.value = "ERROR";
        } else { 
            result = operate(operatorValue, firstValue, secondValue);
            populateDisplay();
        }
    }
    else {
        operationButtons.forEach(button => button.classList.add("notAvailable"));
        if (operatorValue) {
            result = operate(operatorValue, firstValue, secondValue); 
            populateDisplay();
            firstValue = result;
            secondValue = undefined;
            result = undefined;
            operatorValue = currentValue;
        } else operatorValue = currentValue;
    }
}

function populateDisplay() {
    if  (result === "ERROR") display.value = result;
    else if (result !== undefined) display.value = result;
    else if (secondValue !== undefined) display.value = secondValue;
    else display.value = firstValue;
}

const display = document.querySelector('#display');
display.value = "0";
let firstValue = undefined;
let secondValue = undefined;
let operatorValue = undefined;
let result = undefined;

const allButtons = document.querySelectorAll('#numberButtons > button, #operationButtons > button');
allButtons.forEach(button => button.addEventListener('click', getButtonValue));

const operationButtons = document.querySelectorAll('#operationButtons > button');
makeOperationsUnavailable();
