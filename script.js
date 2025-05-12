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

let firstChosenNumber = "";
let allOperators;
let operator = "";
let secondChosenNumber = "";
let display = document.querySelector('.display')
let numbers = document.querySelectorAll('.number')
allOperators = document.querySelectorAll('.operator')
allOperators.forEach(chosenOperator => {
    chosenOperator.addEventListener('click', () => {
        operator = chosenOperator.textContent
        console.log(operator)
        populateDisplay()
    })
})
numbers.forEach(number => {
    number.addEventListener('click', () => {
        if(!operator) {
            number 
            firstChosenNumber += number.textContent
            firstChosenNumber 
            console.log(firstChosenNumber)

        } else {
            secondChosenNumber += number.textContent
            console.log(secondChosenNumber)
        }
        populateDisplay()
    })
})

let result;
function operate (firstNumber,operator,secondNumber) {
    firstNumber = parseInt(firstNumber)
    secondNumber = parseInt(secondNumber)
    if (operator === "+") {
       
        result = add(firstNumber,secondNumber)
        
        
    }
    firstChosenNumber = result
    console.log(typeof(firstChosenNumber))
    populateDisplay()

}
function populateDisplay () {
    display.textContent = firstChosenNumber;
    display.textContent += operator;
    display.textContent +=secondChosenNumber
    
    

}
let equal = document.querySelector('.equal')
equal.addEventListener('click',() => {
    operate(firstChosenNumber,operator,secondChosenNumber)
}) 