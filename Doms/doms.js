const firstOuterDiv = document.querySelector(".Exercise1");
const secondOuterDiv = document.querySelector(".Exercise2");
const thirdOuterDiv = document.querySelector(".Exercise3");
const fourthOuterDiv = document.querySelector(".Exercise4");
const fifthOuterDiv = document.querySelector(".Exercise5");

{
    ///////// EXERCISE 1 /////////

    const Exer1Pars = firstOuterDiv.getElementsByTagName("p");

    const lastDiv = firstOuterDiv.lastElementChild;
    const lasth1 = lastDiv.getElementsByTagName("h1")[0];
    const lasth3 = lasth1.nextElementSibling;
    let secondDivPar = document.querySelector(".par2").innerHTML;

    document.querySelector("text").innerText = " text!";
    lasth1.innerText = 'This is the H1 text from JS';
    lasth3.innerText = 'This is the H3 text from JS';
}

{
    /////////// EXERCISE 2 //////////

    const exerTwoPar1 = secondOuterDiv.getElementsByTagName("p")[0];
    const chickenTitle = secondOuterDiv.getElementsByTagName("h3")[0];
    const exerTwoBtn = document.querySelector(".exer2Button");
    const exerTwoSwitchBtn = document.querySelector(".exer2SwitchButton");

    let kilograms = 0;
    let chickens = 0;
    let chiOrK = "chicken";
    let result = 0;

    exerTwoBtn.addEventListener('click', () => {
        exerTwoBtn.innerHTML = 'Re-Calculate'
        exerTwoCalculator();
    })

    exerTwoSwitchBtn.addEventListener('click', () => {
        switcher();
    })

    function switcher() {
        switch (true) {
            case (chiOrK == "chicken"):
                chickenTitle.innerHTML = 'KG to Chicken';
                chiOrK = "kg";
                break;
            case (chiOrK === "kg"):
                chickenTitle.innerHTML = 'Chicken to KG';
                chiOrK = "chicken";
                break;
        }
    }

    function exerTwoCalculator() {
        switch (true) {
            case (chiOrK == 'chicken'):
                chickens = parseFloat(prompt("Enter weight in Chickens"));
                if (isNaN(chickens)) {
                    exerTwoPar1.innerHTML = 'Please enter proper value'
                } else {
                    result = chickens * 0.5;
                    exerTwoPar1.innerHTML = `${chickens} chickens is ${result} in kilograms`
                }
                break;
            case (chiOrK === 'kg'):
                kilograms = parseFloat(prompt("Enter weight in Chikens"));
                if (isNaN(kilograms)) {
                    exerTwoPar1.innerHTML = 'Please enter proper value'
                } else {
                    result = kilograms / 0.5;
                    exerTwoPar1.innerHTML = `${kilograms} kilograms is ${result} in chickens`
                }
                break;
        }
    }
}

{
    /////////// HOMEWORK 1 ////////////

    const homeOneH1 = thirdOuterDiv.getElementsByTagName('h1', 'h3');
    const homeOneH3 = thirdOuterDiv.getElementsByTagName('h3');
    const homeOnePars = thirdOuterDiv.getElementsByTagName('p');
    const homeOneText = thirdOuterDiv.getElementsByTagName('text');
    const homeOneBtn = document.querySelector(".exer3Button");

    homeOneBtn.addEventListener('click', () => {
        change()
        homeOneBtn.disabled = true;
    });

    function change() {
        for (let i = 0; i < homeOneH1.length; i++) {
            homeOneH1[i].innerHTML = 'I have been changed';
        }

        for (let i = 0; i < homeOneH3.length; i++) {
            homeOneH3[i].innerHTML = 'I have been changed';
        }

        for (let i = 0; i < homeOnePars.length; i++) {
            homeOnePars[i].innerHTML = 'Me too';
        }

        for (let i = 0; i < homeOneText.length; i++) {
            homeOneText[i].innerHTML = 'Me too';
        }
    }
}

{

    //////////// HOMEWORK 2 ///////////

    const Home4Btn = fourthOuterDiv.getElementsByTagName("button")[0];
    const Home4Par = fourthOuterDiv.getElementsByTagName("p")[0];
    const Home4Ul = fourthOuterDiv.getElementsByTagName('ul')[0];

    let Home4Array = [897, 13, 20, 17];
    let sum = 0;
    let finalCalc = [];

    Home4Btn.addEventListener('click', () => {
        Home4Par.innerHTML = ``; //// Ova ne raboti ako funkcijata raboti, zoshto???
        Home4Ul.innerHTML = ``;
        calcArray(Home4Array)
        Home4Btn.disabled = true; /// Zatoa go napraviv ova
    });

    function calcArray(Array) {
        Array.forEach((e, i) => {
            sum += Array[i];
            let plus = "+";
            let Number = Array[i];

            const Calculation = `${Number}`;
            const clac2 = `${plus}`

            finalCalc.push(Calculation);
            finalCalc.push(clac2);
        });
        finalCalc.splice(-1);

        let equation = `${finalCalc.join(" ")} = ${sum}`;

        Home4Par.innerHTML = `This is the calculation: ${equation}.`;

        Array.forEach((e, i) => {
            Home4Ul.innerHTML += `<li>${Array[i]}</li>`;
        });
    }
}

{
    ///////// BONUS HOMEWORK /////////

    const RecipeName = document.getElementById('RcpName');
    const RecipeIngredients = document.getElementById('Ingredients');
    const RcpBtn = document.getElementById("RecipeButton");
    const RcpH3 = fifthOuterDiv.getElementsByTagName('h3')[0];
    const RcpUl = fifthOuterDiv.getElementsByTagName('ul')[0];
    const RcpTable = document.querySelector('.RecipeTable');
    const RcpTableHead = RcpTable.getElementsByTagName('th')[0];
    const RcpTableRow = RcpTable.getElementsByTagName('tr')[1];

    let Ingredients = [];

    arrayFill();

    function RecName() {
        RcpH3.innerHTML = RecipeName.value;
    }

    RcpBtn.addEventListener('click', () => {
        RcpH3.innerHTML = '';
        RcpUl.innerHTML = '';
        RcpTableRow.innerText = '';
        RcpTableHead.innerHTML = '';
        RecName();
        arrayFill();
        ArrayDisplay(Ingredients);
        ArrayDisplayTable(Ingredients);
    });

    function arrayFill() {
        Ingredients.push(RecipeIngredients.value);
        Ingredients = RecipeIngredients.value.split(",")
    }

    function ArrayDisplay(Array) {
        Array.forEach((e, i) => {
            console.log(Array)
            RcpUl.innerHTML += `<li>${Array[i]}</li>`;
        });
    }

    function ArrayDisplayTable(Array) {
        Array.forEach((e, i) => {
            let td = document.createElement('td');
            td.innerHTML = Array[i];
            RcpTableRow.appendChild(td);
        });
        RcpTableHead.innerHTML = RecipeName.value;
    }
}