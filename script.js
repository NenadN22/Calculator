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
let dot = document.querySelector('.dot');
let clear = document.querySelector('.clear');
let del  = document.querySelector('.delete');
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
        dot.disabled = false;
        populateDisplay();
    })
})
clear.addEventListener('click',() => {
    firstGlobalNumber = "";
    operator = "";
    secondGlobalNumber = "";
    populateDisplay();
})
del.addEventListener('click', () => {
    if(!operator) {
        firstGlobalNumber = firstGlobalNumber.slice(0,firstGlobalNumber.length - 1)
        console.log("ovde sam")
        console.log(firstGlobalNumber)
        populateDisplay()
    } else if (firstGlobalNumber != "" && secondGlobalNumber == "") {
        operator = operator.slice(0,operator.length - 1)
         console.log("ovde sam")
        console.log(operator)
        populateDisplay()
    } else if (firstGlobalNumber != "" && operator != "") {
        console.log('ovde sam')
        secondGlobalNumber = secondGlobalNumber.slice(0,secondGlobalNumber.length - 1)
        populateDisplay()
    }
})
function disableElement () {
    dot.disabled = true;
}

dot.addEventListener('click', () => {
    if(!operator) {
        firstGlobalNumber += dot.textContent
        disableElement()   
    } else {
        secondGlobalNumber += dot.textContent
        disableElement()
       
    }
    
     populateDisplay()
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
let result = "";
let equal = document.querySelector(".equal")
equal.addEventListener('click', () => {
    operate(firstGlobalNumber,secondGlobalNumber)
})
console.log(firstGlobalNumber)
console.log(secondGlobalNumber)
function operate(firstNumber,secondNumber) {
   
    firstNumber = parseFloat(firstGlobalNumber)
    secondNumber = parseFloat(secondGlobalNumber)
  
    
    if (operator == "÷"  &&   firstNumber == 0 || secondNumber == 0) {
        result = 'Cant Divide with 0!';
        display.textContent = result;
        firstGlobalNumber = "";
        secondGlobalNumber = "";
        operator = "";
        return
    }
    else if (operator == "+") {
        result = add(firstNumber,secondNumber)

        
    } else if (operator == "-") {
        result = subtract(firstNumber,secondNumber)
        
    } else if (operator == "x") {
        result = multiply(firstNumber,secondNumber)
        
    } else if ( operator == "÷") {
        result = divide(firstNumber,secondNumber)
        
    } 
    if (typeof(result) === "number") {
        result = Math.round(result * 1000) / 1000
        result = parseFloat(result.toFixed(2))
    }
    
   
    firstGlobalNumber = result
   

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