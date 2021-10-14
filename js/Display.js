class Display {
    constructor(displayPrevValue, displayActualValue) {
        this.displayPrevValue = displayPrevValue;
        this.displayActualValue = displayActualValue;
        this.calculator = new Calculator();
        this.opType = undefined;
        this.actualValue = '';
        this.previousValue = '';
        this.signs = {
            add: '+',
            subtract: '-',
            multiply: 'x',
            divide: '%',
        }
    }

    addNumber(number) {
        if(number === '.' && this.actualValue.includes('.')) return
        this.actualValue = this.actualValue.toString() + number.toString();
        this.showValue();
    }

    sliceDisplay(){
        this.actualValue = this.actualValue.toString().slice(0, -1);
        this.showValue();
    }

    resetDisplay() {
        this.actualValue = '';
        this.previousValue = '';
        this.opType = undefined;
        this.showValue();
    }

    showValue() {
        this.displayActualValue.textContent = this.actualValue;
        this.displayPrevValue.textContent = `${this.previousValue} ${this.signs[this.opType] || ''}`;
    }

    calculate() {
        const previousValue = parseFloat(this.previousValue);
        const actualValue = parseFloat(this.actualValue);

        if( isNaN(actualValue) || isNaN(previousValue)) return
        this.actualValue = this.calculator[this.opType](actualValue, previousValue);
    }

    operate(type) {
        this.opType !== 'equal' && this.calculate();
        this.opType = type;
        this.previousValue = this.actualValue || this.previousValue;
        this.actualValue = '';
        this.showValue();
    }
}