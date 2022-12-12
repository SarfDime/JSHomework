
///////////// EXERCISE 1 /////////////

{
    const arrDisplay = document.querySelector(".finderArray");
    const foundDisplay = document.querySelector(".finderFound");
    const fillBtn = document.querySelector(".fillButton");

    let nuRray = [];

    resetFields = () => {
        foundDisplay.innerHTML = '';
        arrDisplay.innerHTML = '';
    }

    fillBtn.addEventListener('click', () => {
        nuRray = [];
        resetFields();
        fillArray();
        enternumber();
    });


    function arrCheck(arr) {
        if (arr.includes('null', '', 'NaN') || arr.length < 1) {
            arrDisplay.append(`Fill Array Propely`);
        }
    }

    function fillArray() {
        while (true) {
            inputAr = parseFloat(prompt("Fill the Array"))
            if (inputAr === 'null' || Number.isNaN(inputAr) || inputAr === '') {
                break;
            } nuRray.push(Number(inputAr));
        }
        arrDisplay.append(nuRray);
    }

    function enternumber() {
        let foundValue = 0;
        numbe = parseFloat(prompt("Enter Number"));
        if (Number.isNaN(numbe) || numbe === null || numbe === '') {
            foundDisplay.append(`Please enter input value properly`);

        } else {
            for (let i = 0; i < nuRray.length; i++) {
                if (nuRray[i] === numbe) {
                    foundValue++;
                }
            }
            foundDisplay.append(`There was ${foundValue} iterations of ${numbe}`);
            arrCheck(nuRray);
        }
    }
}

/////////////////EXERCISE 2 & HOMEWORK #4 /////////////////

{

    const arrayDysplay = document.querySelector(".OddlyEvenArray");
    const oddEvenDisplay = document.querySelector(".OddlyEvenNumber");
    const evenTitle = document.querySelector(".OddTitle");

    const mainBttn = document.querySelector(".MainButton");
    const oddBtn = document.querySelector(".OddButton");

    let mixedArray = [];
    let evenlyOddArray = [];
    let oddlyEvenArray = [];

    resetOdds = () => {
        arrayDysplay.innerHTML = '';
        oddEvenDisplay.innerHTML = '';
    }

    mainBttn.addEventListener('click', () => {
        mixedArray = [];
        evenlyOddArray = [];
        oddlyEvenArray = [];
        resetOdds();
        arrayFiller();
    });

    mainBttn.addEventListener('click', evenTheOdds)

    oddBtn.addEventListener('click', change);

    function arrayFiller() {
        while (true) {
            inputedArrat = parseFloat(prompt(`Fill the Array`));
            if (inputedArrat === 'null' || Number.isNaN(inputedArrat) || inputedArrat === '') {
                break;
            } mixedArray.push(Number(inputedArrat));
        }
    }

    function evenTheOdds() {
        if (mixedArray.length < 1) {
            oddEvenDisplay.append(`Fill Array Propely`);
        } else {
            mixedArray.forEach((e) => {
                if (e % 2 === 1) {
                    oddlyEvenArray.push(e);
                    console.log(`${e} is an Odd Number with an         emphty space?`)
                }
            }); oddEvenDisplay.append(`Odd numbers are ${oddlyEvenArray}`);
            arrayDysplay.append(mixedArray);
        }
    }

    function oddTheEvens() {
        if (mixedArray.includes('null', '', 'NaN') || mixedArray.length < 1) {
            oddDisplay.append(`Fill Array Propely`);
        } else {
            mixedArray.forEach((e) => {
                if (e % 2 === 0) {
                    evenlyOddArray.push(e);
                    console.log(`${e} is an Even Number with a \n new line`)
                }
            }); oddEvenDisplay.append(`Even numbers are ${evenlyOddArray}`);
            arrayDysplay.append(mixedArray);
        }
    }

    let a = "odd";

    function change() {
        switch (true) {
            case (a == "odd"):
                mainBttn.addEventListener('click', oddTheEvens);
                mainBttn.removeEventListener('click', evenTheOdds);
                oddBtn.innerHTML = "Get Odds";
                evenTitle.innerHTML = "Get even numbers from an Array";
                a = "even";
                break;
            case (a == "even"):
                mainBttn.addEventListener('click', evenTheOdds);
                mainBttn.removeEventListener('click', oddTheEvens);
                oddBtn.innerHTML = "Get Evens";
                evenTitle.innerHTML = "Get odd numbers from an Array";
                a = "odd";
                break;
        }
    }
}

////////////// HOMEWORKS #1, #2 & #3 ///////////////////////

{

    const storyTime = document.querySelector(".StoryTime");
    const youArray = document.querySelector(".yourArray");
    const storyButton = document.querySelector(".StoryButton");
    const switchBtn = document.querySelector(".SwitchStory");
    const storyTitle = document.querySelector(".StoryTitle");

    let story = [];

    resetStory = () => {
        storyTime.innerHTML = '';
        youArray.innerHTML = '';
    }

    storyButton.addEventListener('click', () => {
        story = [];
        sumRray = [];
        sum = 0;
        resetStory();
    })

    storyButton.addEventListener('click', fillStory);

    switchBtn.addEventListener('click', changeStory);

    function fillStory() {
        while (true) {
            storyInput = prompt(`Write Name, Mood and Activity`); /// vnesi neshto stinsi ok i taka natamu i posle poslednoto ushte eden ok
            if (storyInput === 'null' || storyInput === '' || story.length > 2) {
                break;
            } story.push(storyInput);
        } checkStory();
    }

    function checkStory() {
        if (storyInput === null || story.length < 1 || storyInput === undefined) {
            storyTime.append('Please fill Array properly');
        } else {
            tellStory(story);
        }
    }

    function tellStory(arr) {
        let name = arr[0];
        let mood = arr[1];
        let activity = arr[2];
        let toldStory = `This is ${name}, ${name} is a nice person. Today ${name} is ${mood}. ${name} has been ${activity} all day long. Fin.`;
        storyTime.append(toldStory);
        youArray.append(story);
    }

    ////// Sum //////

    let sumRray = [];
    let sum = 0;

    function fillSummArray() {
        while (true) {
            sumInput = parseFloat(prompt(`Enter 5 numbers`));
            if (sumRray.length >= 5) {
                break;
            } sumRray.push(Number(sumInput));
        } checkSummArray();
    }

    function checkSummArray() {
        if (sumRray.length < 1 || Number.isNaN(sumInput)) {
            storyTime.append(`Fill Array Propely`);
        } else {
            SumArray(sumRray);
            storyTime.append(`The sum is ${sum}`)
            youArray.append(sumRray);
        }
    }

    function SumArray(Array) {
        Array.forEach((e, i) => {
            sum += Array[i];
        });
    }

    let b = "story";

    function changeStory() {
        switch (true) {
            case (b == "story"):
                storyButton.addEventListener('click', fillSummArray);
                storyButton.removeEventListener('click', fillStory);
                switchBtn.innerHTML = "Switch to Story";
                storyTitle.innerHTML = "Get a sum of Array content";
                storyButton.innerHTML = "Get Sum"
                b = "sum";
                break;
            case (b == "sum"):
                storyButton.addEventListener('click', fillStory);
                storyButton.removeEventListener('click', fillSummArray);
                switchBtn.innerHTML = "Switch to Sum";
                storyTitle.innerHTML = "Tell a Story";
                storyButton.innerHTML = "Tell Story"
                b = "story";
                break;
        }
    }
}

////////////// HOMEWORK #5 ///////////////

{

    const maxDisplay = document.querySelector(".MAXIMUMDISPLAY");
    const maxArrayDisplay = document.querySelector(".MAXIMUMARRAY");
    const maxBtn = document.querySelector(".MAXIMUMBUTTON");

    let maxArray = [];


    let min = Infinity;
    let max = 0;
    let sum = 0;

    maxReset = () => {
        maxDisplay.innerHTML = '';
        maxArrayDisplay.innerHTML = '';
    }

    maxBtn.addEventListener('click', () => {
        maxArray = [];
        max = 0;
        min = Infinity;
        maxReset();
        maxArryFill();
    });

    function maxArryFill() {
        while (true) {
            minMaxInput = parseFloat(prompt(`Fill Array with 10 numbers`));
            if (maxArray.length >= 10) {
                break;
            } maxArray.push(Number(minMaxInput));
        }checkMaxArray();   
    }

    function checkMaxArray() {
        if (maxArray.length < 1 || Number.isNaN(minMaxInput) || minMaxInput === null) {
            maxDisplay.append(`Fill Array Propely`);
        } else {
            minSum(maxArray);
            maxSum(maxArray);
            sum = max + min;  // Nemozhev da go napravam ova svoja funkcija shto kje koristi maxSum i minSum deka sekogash vrakjashe NaN za sum bez razlika kako ja povikav
            maxDisplay.append(`Max is ${max}, min is ${min}, sum is ${sum}`);
            maxArrayDisplay.append(maxArray);
        }
    }

    function minSum(Array) {
        Array.forEach((e, i) => {
            if (Array[i] < min) {
                min = Number(Array[i]);
            }
        });

    }
    function maxSum(Array) {
        Array.forEach((e, i) => {
            if (Array[i] > max) {
                max = Number(Array[i]);
            }
        });
    }

    /////////// HOMEWORK 6 /////////////

    let firstNames = ['Jack', 'Jill', 'Tom', 'Walter'];
    let lastNames = ['Black', 'Hill', 'Cruise', 'White'];

    function getFullNames(firstNames, lastNames) {

        if (firstNames.length !== lastNames.length) {
            console.log("Arrays aren't the same length");
            return;
        }

        let fullNames = [];

        for (let i = 0; i < firstNames.length; i++) {
            let number = i + 1;
            const firstName = firstNames[i];
            const lastName = lastNames[i];

            const fullName = `${number}. ${firstName} ${lastName}`;

            fullNames.push(fullName);
        }

        console.log(fullNames);
    }

    getFullNames(firstNames, lastNames);
}
