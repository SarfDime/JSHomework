///////////////////////////

const mainPut = document.querySelector(".mainPut");
const historyBtn = document.querySelector("#history");
const hDisp = document.querySelector(".hDisplay");
const parDisp = document.querySelector(".parDisplay");
const historyDisp = document.querySelector(".historyDiv");

const numbersDiv = document.querySelector(".numbersDiv")

///////////////////////////

const buttons = Array.from(numbersDiv.getElementsByTagName("button"))

let currentOperand = '';
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
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
};

const clearEntry = () => {
    currentOperand = '';
}

const deleteLastCharacter = () => {
    if (currentOperand === Infinity) {
        currentOperand = 0;
    } else {
        currentOperand = currentOperand.toString().slice(0, -1);
    }
};

const appendNumber = (number) => {
    if (currentOperand === Infinity) {
        currentOperand = '';
    }
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand = currentOperand.toString() + number.toString();
};

const chooseOperation = (op) => {
    if (currentOperand === '' || currentOperand === Infinity) return;
    if (previousOperand !== '') {
        compute();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
};

function historyFill(a, b, o, C) {
    let list = document.createElement("li");
    if (o === 'x^2' || o === '√') {
        list.innerHTML += (`${a} ${o} = ${C}`);
    } else {
        list.innerHTML += (`${a} ${o} ${b} = ${C}`);
    }
    historyDisp.appendChild(list)
}

const compute = () => {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    const operator = operation;
    const operationFn = operations[operator];

    if (operationFn) {
        if (operator === 'x^2' || operator === '√') {
            computation = operationFn(prev);
            historyFill(prev, "", operation, computation);
        } else {
            if (isNaN(prev) || isNaN(current)) return;
            computation = operationFn(prev, current);
            historyFill(prev, current, operation, computation);
        }
    } else {
        return;
    }

    currentOperand = computation;
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
    }
    if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`;
    }
    return integerDisplay;
};

const updateDisplay = () => {
    if (currentOperand === Infinity) {
        hDisp.innerText = "ERROR"
    } else {
        hDisp.innerText = getDisplayNumber(currentOperand);
        if (operation != null) {
            parDisp.innerText = `${getDisplayNumber(previousOperand)} ${operation}`;
        } else {
            parDisp.innerText = '';
        };
    }

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
            case 'x^2': // kvradrat
                chooseOperation(button.innerText);
                compute()
                updateDisplay();
                break;
            case '√':
                chooseOperation(button.innerText);
                compute()
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
                if (currentOperand === '') return;

                if (currentOperand.startsWith('-')) {
                    currentOperand = currentOperand.slice(1);
                } else {
                    currentOperand = '-' + currentOperand;
                }
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
                }
                break;
            default:
                appendNumber(button.innerText);
                updateDisplay();
                break;
        };
    });
});

historyBtn.addEventListener('click', () => {
    historyDisp.classList.toggle("show")
});



