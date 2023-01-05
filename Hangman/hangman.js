const resetBtn = document.querySelector("#resetIcon");
const letterInp = document.querySelector(".letterInput");
const firstBtn = document.querySelector(".firstButton");
const doneBtn = document.querySelector("#doneIcon");
const moviesBtn = document.querySelector('#moviesButton');
const musicBtn = document.querySelector("#musicButton");
const hintBtn = document.querySelector("#hintButton");

const wordInp = document.querySelector("#wordInput");
const sMain = document.querySelector(".secondSection");
const fMain = document.querySelector(".firstSection");

const theHead = document.querySelector("#stickHead");
const trunk = document.querySelector("#torso");
const theNeck = document.querySelector("#neck");
const lftArm = document.querySelector("#leftArm");
const rghtArm = document.querySelector("#rightArm");
const lftLeg = document.querySelector("#leftLeg");
const rghtLeg = document.querySelector("#rightLeg");

const hangTable = document.querySelector(".hangTable");
const gameStatusDisp = document.querySelector(".gameStatusDisplay");
const wrongLettersDisp = document.querySelector(".wrongLettersDisplay");
const statusPar = document.querySelector("#statusParagraph");

{
    let tempWordArray = [];
    let wrongLetterArray = [];
    let correctLetter = 0;
    let word = "";
    let letter = ""
    let element1 = "";
    let element2 = "";
    let wordLength = 0;
    let tempLetter = [];
    let wordArray = [];

    const moviesAndMusic = ["Inception", "Predator", "Interstellar", "Parasite", "Power", "Elvis", "Eminem", "Sugar"];
    const hintUponHints = ["Dream within a dream within a dream...", "If it bleeds...", "Mathew McConaughey in space", "Popular movie during Covid times", "Kanye song about electricity", "King of Rock and Roll", "Greatest rapper of all time?", "Sweet Maroon 5 song"];

    function inputRefine(inp) {
        if (/[^a-zA-Z]/.test(inp) === false) {
            return inp.replace(/[^a-zA-Z]/g, '').toUpperCase();
        } else {
            gameStatusDisp.innerHTML = `Enter proper value`;
        }
    }

    function getRandom(array1, array2, min) {
        if (min === 0) {
            let randomIndex = Math.floor(Math.random() * (3 + 1));
            element1 = array1[randomIndex];
            element2 = array2[randomIndex];
            return;
        };
        if (min === 4) {
            let randomIndex = Math.floor(Math.random() * (7 - 4 + 1) + 4);
            element1 = array1[randomIndex];
            element2 = array2[randomIndex];
        };
    };

    function wordEr(wrd) {
        wordLength = wrd.length;
        tempWordArray = new Array(wordLength).fill(`&nbsp&nbsp&nbsp`);
    };

    function gameState(inpLetter, inpWord) {
        if (tempLetter.includes(inpLetter)) {
            gameStatusDisp.innerHTML = `You already entered this`;
            return;
        };
        if (inpWord.includes(inpLetter)) {
            correctLetter = wordLength;
            tempWordArray.forEach((e, i) => {
                if (inpWord[i] === inpLetter) {
                    tempWordArray[i] = inpLetter;
                    wordArray[i] = inpLetter;
                };
            });
        } else {
            wrongLetterArray.push(inpLetter);
            wrongLettersDisp.innerHTML += `${inpLetter}, `
        };
        hangedMan(inpLetter);
        tableMaker();
        tempLetter.push(inpLetter);
    };

    function tableMaker() {
        const row = document.createElement("tr");
        tempWordArray.forEach((e, i) => {
            let cell = document.createElement("td");
            cell.innerHTML = `<h4>${tempWordArray[i]}</h4>`;
            row.appendChild(cell);
        });
        hangTable.replaceChild(row, hangTable.firstChild);
    };

    function hangedMan() {
        switch (true) {
            case (tempWordArray.toString() === wordArray.toString()):
                doneBtn.disabled = true;
                gameStatusDisp.innerHTML = `You WON!!!!`;
                break;
            case (wrongLetterArray.length === 7):
                gameStatusDisp.innerHTML = `You lost :{`;
                rghtLeg.style.display = "block";
                doneBtn.disabled = true;
                break;
            case (wrongLetterArray.length === 6):
                gameStatusDisp.innerHTML = `You have 1 wrong letter left `;
                lftLeg.style.display = "block";
                break;
            case (wrongLetterArray.length === 5):
                gameStatusDisp.innerHTML = `You have 2 wrong letters left`;
                rghtArm.style.display = "block";
                break;
            case (wrongLetterArray.length === 4):
                gameStatusDisp.innerHTML = `You have 3 wrong letters left `;
                lftArm.style.display = "block";
                break;
            case (wrongLetterArray.length === 3):
                gameStatusDisp.innerHTML = `You 4 wrong letters left `;
                trunk.style.display = "block";
                break;
            case (wrongLetterArray.length === 2):
                gameStatusDisp.innerHTML = `You 5 wrong letters left `;
                theNeck.style.display = "block";
                break;
            case (wrongLetterArray.length === 1):
                gameStatusDisp.innerHTML = `You 6 wrong letters left `;
                theHead.style.display = "block";
                break;
        };
    };

    const inputColor = (input, inputValue, length, lengthTwo) => {
        if (inputValue === "") {
            input.classList.remove("GoodInp");
            input.classList.remove("BadInp");
        } else {
            if (inputValue === undefined || inputValue.length <= length || inputValue.length >= lengthTwo) {
                input.classList.remove("GoodInp");
                input.classList.add("BadInp");
            } else {
                input.classList.remove("BadInp");
                input.classList.add("GoodInp");
            };
        };
    };

    moviesBtn.addEventListener('click', () => {
        getRandom(moviesAndMusic, hintUponHints, 0);
        hintBtn.setAttribute('data-tooltip', element2);
        word = inputRefine(element1);
        wordEr(word);
        hangedMan();
        tableMaker();
        fMain.classList.toggle("firstSectionV");
        sMain.classList.toggle("secondSectionV");
    });

    musicBtn.addEventListener('click', () => {
        getRandom(moviesAndMusic, hintUponHints, 4);
        hintBtn.setAttribute('data-tooltip', element2);
        word = inputRefine(element1);
        wordEr(word);
        hangedMan();
        tableMaker();
        fMain.classList.toggle("firstSectionV");
        sMain.classList.toggle("secondSectionV");
    });

    wordInp.addEventListener('input', () => {
        word = inputRefine(wordInp.value);
        inputColor(wordInp, word, 2, 13);
    });

    letterInp.addEventListener('input', () => {
        letter = inputRefine(letterInp.value);
        inputColor(letterInp, letter, 0, 2);
    });

    firstBtn.addEventListener('click', () => {
        word = inputRefine(wordInp.value);
        if (word === undefined || word === '' || word.length <= 2 || word.length >= 13) {
            statusPar.innerHTML = `Please enter word properly`;
            return;
        };
        hintBtn.setAttribute('data-tooltip', `First letter is ${word.charAt(0)}.`);

        wordEr(word);
        hangedMan();
        tableMaker();

        wordInp.value = '';
        letterInp.value = '';

        fMain.classList.toggle("firstSectionV");
        sMain.classList.toggle("secondSectionV");
    });

    doneBtn.addEventListener('click', () => {
        gameStatusDisp.innerHTML = '';
        letter = inputRefine(letterInp.value);
        if (letter === undefined || letter === '' || letter.length > 1 || letter.length < 1) {
            gameStatusDisp.innerHTML = `Enter proper value`;
            return;
        };
        gameState(letter, word);
        letterInp.value = '';
        inputColor(letterInp, "", -1, 9);
    })

    resetBtn.addEventListener('click', () => {
        gameStatusDisp.innerHTML = '';
        statusPar.innerHTML = ``;
        tempWordArray = [];
        wrongLetterArray = [];
        correctLetter = 0;
        word = "";
        wrongLettersDisp.innerHTML = '';
        letter = "";
        wordLength = 0;
        tempLetter = [];
        wordArray = [];
        element1 = '';
        element2 = '';
        hangTable.firstChild.innerHTML = '';
        doneBtn.disabled = false;
        hintBtn.setAttribute('data-tooltip', "");

        theHead.style.display = "none";
        theNeck.style.display = "none";
        trunk.style.display = "none";
        lftArm.style.display = "none";
        rghtArm.style.display = "none";
        lftLeg.style.display = "none";
        rghtLeg.style.display = "none";

        inputColor(wordInp, word, 2, 10);
        inputColor(letterInp, letter, 0, 2);

        fMain.classList.toggle("firstSectionV");
        sMain.classList.toggle("secondSectionV");
    });
}

