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

console.log(firstGlobalNumber)
console.log(secondGlobalNumber)
function operate(firstNumber,secondNumber) {

}
function populateDisplay(){
    display.textContent = firstGlobalNumber
    display.textContent += operator
    display.textContent += secondGlobalNumber

}