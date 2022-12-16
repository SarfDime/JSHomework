
const nameExer1 = document.getElementById("fName");
const eMail = document.getElementById("eMaile");
const passWord = document.getElementById("passWorde");
const exerOneBtn = document.getElementById("Exer1Button")
const exerOnePar = document.getElementById("ExerOnePar")

let fullName = [];
let fullNames = '';

exerOneBtn.addEventListener('click', () => {
    fullName = [];
    exerOnePar.innerHTML = '';
    fullNames = '';
    fillArray(fullName)
    confirmAll();
});

function fillArray(array) {
    array.push(nameExer1.value);
    array = nameExer1.value.split(",");
    array.forEach((e, i) => {
        fullNames += array[i];
    });

}

function confirmAll() {
    exerOnePar.append(`Name: ${fullNames} \nEmail: ${eMail.value} \nPassword: ${passWord.value}`);
}


{

    ///////// HOMEWORK /////////


    const HomeTable = document.querySelector(".HomeTable")
    const rowInput = document.getElementById("tRow");
    const cellInput = document.getElementById("tCell");
    const tableButton = document.getElementById("tableButton");




    rowInput.addEventListener('input', () => {
        let rowNumber = Number(rowInput.value);
        if (Number.isNaN(rowNumber)) {
            rowInput.classList.remove("GoodInp");
            rowInput.classList.add("BadInp");
        } else if (rowNumber == '') {
            rowInput.classList.remove("GoodInp");
            rowInput.classList.remove("BadInp");
        }
        else {
            rowInput.classList.remove("BadInp");
            rowInput.classList.add("GoodInp");
        }
    });

    cellInput.addEventListener('input', () => {
        let cellNumber = Number(cellInput.value);
        if (Number.isNaN(cellNumber)) {
            cellInput.classList.remove("GoodInp");
            cellInput.classList.add("BadInp");
        } else if (cellNumber == '') {
            cellInput.classList.remove("GoodInp");
            cellInput.classList.remove("BadInp");
        }
        else {
            cellInput.classList.remove("BadInp");
            cellInput.classList.add("GoodInp");
        }
    });

    tableButton.addEventListener('click', () => {
        HomeTable.innerHTML = ''
        addRowsAndCells(HomeTable, rowInput.value, cellInput.value);
    });

    function addRowsAndCells(table, rows, cells) {
        for (let i = 0; i < rows; i++) {
            let row = document.createElement("tr");
            for (let c = 0; c < cells; c++) {
                let cell = document.createElement("td");
                cell.innerText = `Row ${i + 1} Cell ${c + 1}`;
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
    }

}
