const ExerOtt = document.querySelector(".Exer123");
const outerOneBtn = document.querySelector(".outerOneButton");

const exerFourInput = document.querySelector(".exer4Input");
const exerFourButtton = document.querySelector(".fourButtton");

const exerEightInner = document.querySelector(".exer8Inner");
const exerEightButton = document.querySelector(".exer8Button");
const exerEightInput = document.querySelector(".exer8Input");
const exerEightPar = document.querySelector(".exer8Par");

const ExerNineFNamePut = document.querySelector(".Exer9FNamePut");
const ExerNineLNamePut = document.querySelector(".Exer9LNamePut");
const ExerNineNumPut = document.querySelector(".Exer9NumPut");
const ExerNineBtn = document.querySelector(".Exer9Button");
const ExerNineTable = document.querySelector(".Exer9Table");

const exerTenInput = document.querySelector(".Exer10Input");
const exerTenBtn = document.querySelector(".Exer10Button");
const exerTenUl = document.querySelector(".Exer10Ul");

{   /////// EXERCISE 1 ////////

    let dimeArray = ["dime", 15, true, undefined, null];

    function fuDimeArray(array) {
        for (let i = 0; i < array.length; i++) {
            ExerOtt.innerHTML += (`<li> ${array[i]} | ${typeof (array[i])} </li>`);
        }
    }

    ////////// EXERCISE 2 //////////

    let secondDimeArray = [];

    function dimePrint(Array) {
        while (true) {
            let dimePrompt = prompt("enter value");
            if (Array.length >= 5) {
                break;
            } Array.push(dimePrompt);
        }
    }

    function dimeCheck(Array) {
        for (let i = 0; i < Array.length; i++) {
            console.log(` ${typeof (Array[i])} `);
        }
    }

    outerOneBtn.addEventListener('click', () => {
        ExerOtt.innerHTML = '';
        fuDimeArray(dimeArray);
        dimePrint(secondDimeArray);
        dimeCheck(secondDimeArray);
    });

    //////// EXERCISE 3 /////////

    function getDifference(num) {

        let difference = num - 13;
        if (num > 13) {
            console.log(difference * 2);
        } else {
            console.log(difference);
        }
    }

    ///////// EXERCISE 4 //////////


    let fourArray = [];

    function fourArrayFill(Array, Input) {
        let split = Input.split(",");
        for (let i of split) {
            Array.push(i)
        }
        return Array;
    }

    function findClosestTo100(num1, num2) {
        if (num1 < 0 || num2 < 0) {
            console.log("One of the numbers is negative!");
            return;
        }

        let diff1 = num1 - 100;
        let diff2 = num2 - 100;

        if (diff1 < 0 && diff2 > 0) {
            console.log(`${num2} is closer to 100`);
        } else if (diff1 === diff2) {
            console.log(`Both numbers are equally close to 100`)
        } else if (diff1 > 0 && diff2 < 0) {
            console.log(`${num1} is closer to 100`);
        } else if (diff1 >= 0 && diff2 >= 0) {
            console.log(`${(diff1 < diff2 ? num1 : num2)} is closer to 100`);
        } else if (diff1 <= 0 && diff2 <= 0) {
            console.log(`${(diff1 > diff2 ? num1 : num2)} is closer to 100`);
        }
    }

    exerFourButtton.addEventListener("click", () => {
        fourArray = [];
        fourArrayFill(fourArray, exerFourInput.value);
        findClosestTo100(fourArray[0], fourArray[1]);
    })


    //////// EXERCISE 5 /////////

    const salary = 1000;
    const rent = 375;
    const bills = 250;

    const totalExpenses = rent + bills;
    const amountLeft = salary - totalExpenses;

    // console.log(`Bob's total expenses: ${totalExpenses}`);
    // console.log(`Bob has $${amountLeft} left for the rest of the month`);

    ///////// EXERCISE 6 ////////// 

    const grades = [10, 6, 8, 9, 6];
    const requiredAverage = 8;

    let total = 0;
    for (let grade of grades) {
        total += grade;
    }
    const average = total / grades.length;

    if (average >= requiredAverage) {
        // console.log("The student has passed the semester!");
    } else {
        // console.log("The student has not passed the semester.");
    }

    ////////// EXERCISE 7 //////////

    function removeFalsyValues(Array) {
        return Array.filter(Boolean);
    }

    const coolArray = [1, 2, 3, null, undefined, NaN, "", false, 4, 5];
    const filteredArray = removeFalsyValues(coolArray);
    // console.log(filteredArray);

    /////////// EXERCISE 8 ////////////

    let storyArray = [];

    function fourArrayFill(Array, Input) {
        let split = Input.split(",");
        for (let i of split) {
            Array.push(i)
        }
        return Array;
    }

    function tellStory(arr) {
        let name = arr[0];
        let mood = arr[1];
        let activity = arr[2];
        let toldStory = `This is ${name}, ${name} is a nice person. Today ${name} is ${mood}. ${name} has been ${activity} all day long, they love to ${activity}. Fin.`;
        exerEightPar.append(toldStory);
    }

    exerEightButton.addEventListener('click', () => {
        storyArray = [];
        exerEightPar.innerHTML = ''
        fourArrayFill(storyArray, exerEightInput.value);
        tellStory(storyArray);
    });

    ////////// EXERCISE 9 /////////

    function inputCheck(inp1, inp2, inp3, table) {

        if (inp1 === '' || inp2 === '' || inp3 === '') {
            console.log("enter proper input")
        } else {
            tableFiller(inp1, inp2, inp3, table);
        }
    }

    function tableFiller(firstName, lastName, phoneNumber, table) {

        let row = document.createElement("tr");

        let firstNameCell = document.createElement("td");
        firstNameCell.innerText = firstName;
        row.appendChild(firstNameCell);

        let lastNameCell = document.createElement("td");
        lastNameCell.innerText = lastName;
        row.appendChild(lastNameCell);

        let phoNumber = document.createElement("td");
        phoNumber.innerText = phoneNumber;
        row.appendChild(phoNumber);

        table.appendChild(row);
    }

    ExerNineBtn.addEventListener("click", () => {
        table(ExerNineFNamePut.value, ExerNineLNamePut.value, ExerNineNumPut.value, ExerNineTable);
    })

    /////////// EXERCISE 10 /////////

    let todos = [];

    exerTenBtn.addEventListener('click', () => {
        addTodo();
    })

    function addTodo() {
        const task = exerTenInput.value;
        let todo = {
            task: task,
            isCompleted: false,
        };
        todos.push(todo);
        renderTodos();
    }

    function renderTodos() {
        exerTenUl.innerHTML = '';

        todos.forEach((todo) => {
            const listItem = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.isCompleted;
            checkbox.addEventListener('change', () => {
                todo.isCompleted = !todo.isCompleted;
                renderTodos();
            });

            const label = document.createElement('label');
            label.innerText = todo.task;
            if (todo.isCompleted) {
                label.style.textDecoration = 'line-through';
            }

            listItem.appendChild(checkbox);
            listItem.appendChild(label);
            exerTenUl.appendChild(listItem);
        });
    }
}
