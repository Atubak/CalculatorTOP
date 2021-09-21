function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};



function operate(operator, a, b) {
    return operator(a, b);
};



let display = document.querySelector('#display');




window.addEventListener('click', function(e) {
    let input = document.querySelector(`button[id="${e.target.id}"]`);
    
    console.log(input);
    if (!input) return;

    if (input.id === 'clearButton') return; // clearCalculator()

    if (input.id === 'equalButton') return; //return whatever will be the function that calculates stuff
    
    display.textContent += input.textContent;
});


//function that will clear the display
// function clearCalculator() {
//  };