let display = document.querySelector('#display');
let displayValue = "";
let firstNumber = 0;
let selectedOperator = "p";
let secondNumber = 0;


window.addEventListener('click', function(e) { //populates the display
    
    let input = document.querySelector(`button[id="${e.target.id}"]`);
    
    if (display.textContent.length > 15) return;
    
    if (!input) return;
    
    if (input.id === 'clearButton') return clearCalculator();
    
    if (input.id === 'equalButton') return; 
    
    display.textContent += input.textContent;
    
    displayValue = display.textContent;
});



function clearCalculator() {
    if (display.textContent === '80085') return link();
    display.textContent = "";
};





let operatorSign = "";
let bothNumbers = "";

window.addEventListener('click', function(e) { //asigns the inputted values to the corresponding variables
    
    let input = document.querySelector(`button[id="${e.target.id}"]`);
    
    if (input.className === 'operator') {
        calculate();
        selectedOperator = input.id;
        
        operatorSign = input.textContent;
        
    };
    
    if (input.id === 'equalButton') {
        calculate();
        
        display.textContent = display.textContent.slice(0, -1);
    };
});

function link() {
    window.open('https://www.youtube.com/watch?v=KwhyxW8llro', '_blank')
};

function calculate() {
    bothNumbers = displayValue.split(`${operatorSign}`);
    
    console.log(bothNumbers);
    console.log(operatorSign);
    firstNumber = bothNumbers[0];
    secondNumber = bothNumbers[1];
    
    return operate();
};



let answer = "";

function add(a, b) {
    answer = a + b;
    console.log(answer);
    display.textContent = answer + operatorSign;
    
};

function subtract(a, b) {
    answer = a - b;
    console.log(answer);
    display.textContent = answer + operatorSign;
};

function multiply(a, b) {
    answer = a * b;
    console.log(answer);
    display.textContent = answer + operatorSign;
};

function divide(a, b) {
    answer = a / b;
    console.log(answer);
    display.textContent = answer + operatorSign;
};



function operate() {
    
    console.log(firstNumber);
    console.log(secondNumber);

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) return; 

    if (selectedOperator === 'add') return add(firstNumber, secondNumber);
    if (selectedOperator === 'subtract') return subtract(firstNumber, secondNumber);
    if (selectedOperator === 'multiply') return multiply(firstNumber, secondNumber);
    if (selectedOperator === 'divide') return divide(firstNumber, secondNumber);
    
};
