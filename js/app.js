const displayPrevValue = document.getElementById('prevValue');
const displayActualValue = document.getElementById('actualValue');
const numbersBtn = document.querySelectorAll('.btn-number');
const operatorBtn = document.querySelectorAll('.btn-operator');

const display = new Display(displayPrevValue, displayActualValue);

numbersBtn.forEach(button => {
    button.addEventListener('click', () => display.addNumber(button.innerHTML));
});

operatorBtn.forEach(button => {
    button.addEventListener('click', () => display.operate(button.value));
});