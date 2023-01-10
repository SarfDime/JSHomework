///////////////////////////

const mainPut = document.querySelector(".mainPut");
const currentDisplay = document.querySelector(".hDisplay");
const prevDisplay = document.querySelector(".parDisplay");

const outerHistory = document.querySelector(".outerHistory");
const historyDisp = document.querySelector(".historyDiv");
const historyBtn = document.querySelector("#history");

const numbersDiv = document.querySelector(".numbersDiv");

///////////////////////////

const buttons = Array.from(numbersDiv.getElementsByTagName("button"));

currentDisplay.innerHTML = '0';

let currentOperand = '0';
let previousOperand = '';
let operation = undefined;

const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '×': (a, b) => a * b,
    '÷': (a, b) => a / b,
    '%': (a, b) => a * b / 100,
    '√': (a) => Math.sqrt(a),
    'x^2': (a) => a * a,
};

const clear = () => {
    currentOperand = '0';
    previousOperand = '';
    operation = undefined;
};

const clearEntry = () => {
    if(currentOperand === "") return
    currentOperand = '0';
};

const deleteLastCharacter = () => {
    if (currentOperand === Infinity || isNaN(currentOperand)) {
        currentOperand = '0';
    };
    if (currentOperand.length === 1 && currentOperand !== "-") {
        currentOperand = "0";
    };
    if (currentOperand === '0' || currentOperand === '-0') return;
    if (currentOperand.length <= 1 && currentOperand.includes("-")) {
        return;
    };
    if (currentOperand.length === 2 && currentOperand.includes("-")) {
        currentOperand = "-" + 0;
        return;
    };
    currentOperand = currentOperand.toString();
    currentOperand = currentOperand.slice(0, -1);
};

const appendNumber = (number) => {
    if (currentOperand === Infinity || isNaN(currentOperand)) {
        currentOperand = '';
    };
    if (currentOperand !== '' && number === 3.14159265359) {
        currentOperand = (currentOperand * 3.14159265359).toString();
    };
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand = currentOperand.toString() + number.toString();
};

const chooseOperation = (op) => {
    if(op === "√" && currentOperand.includes("-") || op === "√" && previousOperand.includes('-')) return;
    if (currentOperand == '0' || currentOperand == "-0") return;
    if (currentOperand === '' && operation !== '') {
        operation = op;
    };
    if (currentOperand === '' || currentOperand === Infinity) return;
    if (previousOperand !== '') {
        compute();
    };
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
};

const historyFill = (a, b, o, C) => {
    let list = document.createElement("li");
    if (o === 'x^2' || o === '√') {
        list.innerHTML += (`${a} ${o} = ${C}`);
    } else {
        list.innerHTML += (`${a} ${o} ${b} = ${C}`);
    };
    historyDisp.appendChild(list);
};

const compute = () => {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    const operator = operation;
    const operationFn = operations[operator];

    if (operator === 'x^2' || operator === '√') {
        computation = operationFn(prev);
        historyFill(prev, "", operation, computation);
    } else {
        if (isNaN(prev) || isNaN(current)) return;
        computation = operationFn(prev, current);
        historyFill(prev, current, operation, computation);
    };

    currentOperand = computation.toString();
    operation = undefined;
    previousOperand = '';
    updateDisplay();
};

const getDisplayNumber = (number) => {
    let stringNumber = number.toString();
    let integerDigits = parseFloat(stringNumber.split('.')[0]);
    let decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
        integerDisplay = '';
    } else {
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
    };
    if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`;
    };
    return integerDisplay;
};

const updateDisplay = () => {
    if (currentOperand === Infinity) {
        currentDisplay.innerText = "ERROR";
    } else {
        currentDisplay.innerText = getDisplayNumber(currentOperand);
        if (operation != null) {
            prevDisplay.innerText = `${getDisplayNumber(previousOperand)} ${operation}`;
        } else {
            prevDisplay.innerText = '';
        };
    };
};

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'DEL': //backspace
                deleteLastCharacter();
                updateDisplay();
                break;
            case 'π':
                appendNumber(3.14159265359);
                updateDisplay();
                break;
            case 'CE':
                clearEntry();
                updateDisplay();
                break;
            case 'C':
                clear();
                updateDisplay();
                break;
            case 'x^2': // square
                chooseOperation(button.innerText);
                compute();
                updateDisplay();
                break;
            case '√':
                chooseOperation(button.innerText);
                compute();
                updateDisplay();
                break;
            case '=':
                compute();
                updateDisplay();
                break;
            case '%':
                chooseOperation(button.innerText);
                updateDisplay();
                break;
            case '±': //Negative toggle
                if (currentOperand.toString() == '' || currentOperand === Infinity || isNaN(currentOperand)) return;
                if (currentOperand.toString().startsWith('-')) {
                    currentOperand = currentOperand.toString().slice(1);
                } else {
                    currentOperand = '-' + currentOperand;
                };
                updateDisplay();
                break;
            case '÷':
                chooseOperation(button.innerText);
                updateDisplay();
                break;
            case '×':
                chooseOperation(button.innerText);
                updateDisplay();
                break;
            case '+':
                chooseOperation(button.innerText);
                updateDisplay();
                break;
            case '-':
                chooseOperation(button.innerText);
                updateDisplay();
                break;
            case 'Clear':
                const li = historyDisp.getElementsByTagName("li");
                while (li.length > 0) {
                    historyDisp.removeChild(li[0]);
                };
                break;
            default:
                appendNumber(button.innerText);
                updateDisplay();
                break;
        };
    });
});

historyBtn.addEventListener('click', () => {
    outerHistory.classList.toggle("show");
});



