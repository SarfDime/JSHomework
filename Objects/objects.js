const OuterDivOne = document.querySelector(".Exer1Outer");
const OuterDivTwo = document.querySelector('.Exer2Outer');
const OuterDivThree = document.querySelector('.Exer3Outer');

const exerTwoTitle = document.querySelector(".Exer2Title");
const exerTwoInput = document.querySelector(".Exer2Input");
const exerOneBtn = document.querySelector(".Exer1Button");
const exerTwoBtn = document.querySelector(".Exer2Button");
const exerTwoPar = OuterDivTwo.getElementsByTagName("p")[0];
const exerThreeButton = document.querySelector(".Exer3Button");

const exerThreePar = document.querySelector(".Dime");
const bookOneBtn = document.getElementById("BookOne");
const bookTwoBtn = document.getElementById("BookTwo");
const bookThreeBtn = document.getElementById("BookThree");


{
    //////// EXERCISE ONE /////////

    function student(fname, lname, age) {
        this.firstname = fname;
        this.lastname = lname;
        this.studentAge = age;
    }

    let firstStudent = new student("Mike", "Wazowski", 19);

    let studentArray = [];

    exerOneBtn.addEventListener('click', () => {
        studentArray = [];
        studentFillArray(studentArray, firstStudent);
        exerOneBtn.disabled = true;
    })

    function studentFillArray(Array, stdnt) {
        Array.push(stdnt.firstname, stdnt.lastname, stdnt.studentAge);
        Array.forEach((e, i) => {
            OuterDivOne.innerHTML += `<li>${Array[i]}</li>`;
        })
    }
}

{
    ///////// EXERCISE TWO //////////

    function animals(name, type) {
        this.animalName = name;
        this.animalType = type;
    }

    animals.prototype.speak = function () {
        return `${this.animalName} says hello, ${this.animalName} is a ${this.animalType}`;
    }

    let props = ["animalName", "animalType"];

    let animal = new animals();

    exerTwoBtn.addEventListener('click', () => {

        fillAnimalArray(props, exerTwoInput, animal)
        exerTwoPar.innerHTML = animal.speak();
    })

    function fillAnimalArray(Array, inpField, object) {
        field = inpField.value
        field = inpField.value.split(',');
        Array.forEach((e, i) => {
            object = Object.assign(object, { [Array[i]]: field[i] })
        })
    }
}

{
    /////////// HOMEWORK PART 2 /////////////

    function books(title, author) {
        this.bookTitle = title;
        this.bookAuthor = author;
    }

    let readingStatus = {
        read: false,
        readBook: function () {
            return `${this.title} by ${this.author} has been read`
        },
        unReadBook: function () {
            return `${this.title} by ${this.author} hasn't been read yet`
        }
    };

    let bookOne = { title: "One Day", author: "David Nicholls" };
    let bookTwo = { title: "Eclipse", author: "Stephenie Meyer" };
    let bookThree = { title: "Brick Lane", author: "Monica Ali" };

    Object.setPrototypeOf(bookOne, readingStatus);
    Object.setPrototypeOf(bookTwo, readingStatus);
    Object.setPrototypeOf(bookThree, readingStatus);

    bookOneBtn.addEventListener('click', () => {
        bookOne.read = true;
        bookOneBtn.disabled = true;
    })
    bookTwoBtn.addEventListener('click', () => {
        bookTwo.read = true;
        bookTwoBtn.disabled = true;
    })
    bookThreeBtn.addEventListener('click', () => {
        bookThree.read = true;
        bookThreeBtn.disabled = true;
    })

    exerThreeButton.addEventListener('click', () => {
        exerThreePar.innerHTML = '';
        readCheck();
    })

    const resetbtn = document.querySelector(".reset");

    resetbtn.addEventListener("click", () => {
        bookOne.read = false;
        bookThree.read = false;
        bookTwo.read = false;
        bookThreeBtn.disabled = false;
        bookTwoBtn.disabled = false;
        bookOneBtn.disabled = false;
        exerThreePar.innerHTML = '';
    })

    function readCheck() {

        if (bookOne.read === true) {
            exerThreePar.append(`\n${bookOne.readBook()}`);
        } else {
            exerThreePar.append(`\n${bookOne.unReadBook()}`);
        }
        if (bookTwo.read === true) {
            exerThreePar.append(`\n${bookTwo.readBook()}`);
        } else {
            exerThreePar.append(`\n${bookTwo.unReadBook()}`);
        } if (bookThree.read === true) {
            exerThreePar.append(`\n${bookThree.readBook()}`);
        } else {
            exerThreePar.append(`\n${bookThree.unReadBook()}`);
        }
    }
}
