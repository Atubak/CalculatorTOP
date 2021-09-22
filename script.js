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
    
    if (input.id === 'equalButton') return; //return whatever will be the function that calculates stuff

    display.textContent += input.textContent;
    
    displayValue = display.textContent;
});



function clearCalculator() {
    display.textContent = "";
};





let operatorSign = "";

window.addEventListener('click', function(e) { //asigns the inputted values to the corresponding variables

    let input = document.querySelector(`button[id="${e.target.id}"]`);

    if (input.className === 'operator') {
        selectedOperator = input.id;

        operatorSign = input.textContent;

    };

    if (input.id === 'equalButton') {
        bothNumbers = displayValue.split(`${operatorSign}`);


        firstNumber = bothNumbers[0];
        secondNumber = bothNumbers[1];

        
        return operate();
    };
});


let answer = "";

function add(a, b) {
    answer = a + b;
    console.log(answer);
    return display.textContent = answer;
};

function subtract(a, b) {
    answer = a - b;
    console.log(answer);
    return display.textContent = answer;
};

function multiply(a, b) {
    answer = a * b;
    console.log(answer);
    return display.textContent = answer;
};

function divide(a, b) {
    answer = a / b;
    console.log(answer);
    return display.textContent = answer;
};



function operate() {
    
    console.log(selectedOperator);
    console.log(firstNumber);
    console.log(secondNumber);

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    if (selectedOperator === 'add') return add(firstNumber, secondNumber);
    if (selectedOperator === 'subtract') return subtract(firstNumber, secondNumber);
    if (selectedOperator === 'multiply') return multiply(firstNumber, secondNumber);
    if (selectedOperator === 'divide') return divide(firstNumber, secondNumber);
    
};