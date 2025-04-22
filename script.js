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

let number = "";
let operator;
let anotherNumber;

let display = document.querySelector('.display')

let numbers = document.querySelectorAll('.number')
numbers.forEach(clickedNumber => 
    clickedNumber.addEventListener('click', ()=> {
        number += clickedNumber.textContent
        console.log(number)
        populateDisplay()
    })
    
)
function populateDisplay () {
    display.innerHTML = number
    console.log(display)
  
}

function Operate(operator,number,anotherNumber) {

}
