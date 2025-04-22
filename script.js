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

let number;
let operator;
let anotherNumber;
let display = document.querySelector('.display')

function Operate(operator,number,anotherNumber) {
    

}
function populateDisplay () {
   let numbers = document.querySelectorAll('.number')
    numbers.forEach(number => {
        number.addEventListener('click', () => {

            display.innerHTML += number.textContent;
            console.log(number)
            

        }) 
        
    })
}
populateDisplay();