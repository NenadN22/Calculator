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
let currentOperator;
let currentNumber = "";
let operator;
let display;
display = document.querySelector('.display')
console.log(typeof(operator))
let firstNumber = "";
let secondNumber = "";
currentOperator = document.querySelectorAll('.operator')
currentOperator.forEach(clickedOperator => {
    clickedOperator.addEventListener('click', () => {
        operator = clickedOperator.textContent;
        console.log(operator)
        console.log(typeof(operator))
    })
})
currentNumber = document.querySelectorAll('.number')
currentNumber.forEach(clickedNumber => {
    clickedNumber.addEventListener('click', () => {
        currentNumber = clickedNumber.textContent
        console.log(currentNumber)
        if(!operator) {
            firstNumber += currentNumber
            console.log(firstNumber)
        }  else {
            currentNumber = ""
            currentNumber = clickedNumber.textContent
            secondNumber += currentNumber;
            console.log(secondNumber)
        }
        populateDisplay()
    })
   
    
})
function populateDisplay() {
    display.innerHTML = firstNumber
    
}

function operate (firstNumber, operator, secondNumber) {

}