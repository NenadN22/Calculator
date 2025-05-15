function add (a,b) {
    return a + b;
}
function subtract (a,b) {
    return a - b;
}
function multiply (a,b) {
    return a * b;

}
function divide (a,b) {
    return a / b;
}

let firstGlobalNumber = "";
let globalOperator;
let secondGlobalNumber = "";
let operator = "";
let display = document.querySelector('.display');
let allNumbers = document.querySelectorAll('.number');
let allOperators = document.querySelectorAll(".operator");
allOperators.forEach(operators => {
    operators.addEventListener('click',() => {
        operator = operators.textContent;
        console.log(operator);
        populateDisplay();
    })
})
allNumbers.forEach(numbers => {
    numbers.addEventListener('click', () => {
        console.log(numbers)
        if(!operator) {
            firstGlobalNumber += numbers.textContent
        } else {
            secondGlobalNumber += numbers.textContent
        }
        populateDisplay()
    })
})
let result;
let equal = document.querySelector(".equal")
equal.addEventListener('click', () => {
    operate(firstGlobalNumber,secondGlobalNumber)
})
console.log(firstGlobalNumber)
console.log(secondGlobalNumber)
function operate(firstNumber,secondNumber) {
    firstNumber = parseInt(firstGlobalNumber)
    secondNumber = parseInt(secondGlobalNumber)
    if(operator == "+") {
        result = add(firstNumber,secondNumber)
    } else if (operator == "-") {
        result = subtract(firstNumber,secondNumber)
    } else if (operator == "x") {
        result = multiply(firstNumber,secondNumber)
    } else if ( operator == "÷") {
        result = divide(firstNumber,secondNumber)
    }
    firstGlobalNumber = result;
    console.log(typeof(firstGlobalNumber))
    operator = ""
    secondGlobalNumber = ""
    populateDisplay()

}
function populateDisplay(){
    display.textContent = firstGlobalNumber
    display.textContent += operator
    display.textContent += secondGlobalNumber

}