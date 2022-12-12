const valueDisplay = document.querySelector(".Celsio");
const inputDisplay = document.querySelector(".Fahrio");
const info = document.getElementById("Info")
const convertBtn = document.querySelector(".convert");
const enterBtn = document.querySelector(".mainBtn");
const title = document.getElementById("Title");

{
    function celsi(tempsc) {
        convertedValue = (tempsc * 1.8) + 32;
        rounded = convertedValue.toPrecision(3);
        inputDisplay.append(tempsc);
        valueDisplay.append(rounded);
    }

    function celToFah() {
        celsius = parseFloat(prompt("Enter Celsius"));
        if (Number.isNaN(celsius) || celsius === null) {
            info.append("I don't think thats a valid number");
        } else if (celsius >= 100) {
            info.append("And people say global warming is fake");
            celsi(celsius);
        } else {
            celsi(celsius);
        }
    }

    function fahri(tempsf) {
        convertedValue = (tempsf - 32) * (5 / 9);
        rounded = convertedValue.toPrecision(3);
        inputDisplay.append(tempsf);
        valueDisplay.append(rounded);
    }

    function fahToCel() {
        fahrenheit = parseFloat(prompt("Enter Fahrenheit"));
        if (Number.isNaN(fahrenheit) || fahrenheit === null) {
            info.append("I don't think thats a valid number");
        } else if (fahrenheit >= 100) {
            info.append("Cold day in Gevgelija");
            fahri(fahrenheit);
        } else {
            fahri(fahrenheit);
        }
    }

    fuReset = () => {
        valueDisplay.innerHTML = ``;
        inputDisplay.innerHTML = ``;
        info.innerHTML = ``;
    }

    enterBtn.addEventListener('click', fuReset);
    enterBtn.addEventListener('click', celToFah);

    let a = "cel";

    convertBtn.addEventListener('click', change);

    function change() {
        switch (true) {
            case (a == "far"):
                enterBtn.addEventListener('click', celToFah);
                enterBtn.removeEventListener('click', fahToCel);
                convertBtn.innerHTML = "°F to °C";
                title.innerHTML = "Convert Celsius to Fahrenheit";
                a = "cel";
                break;
            case (a == "cel"):
                enterBtn.addEventListener('click', fahToCel);
                enterBtn.removeEventListener('click', celToFah);
                convertBtn.innerHTML = "°C to °F";
                title.innerHTML = "Convert Fahrenheit to Celsius";
                a = "far";
                break;
        }
    }
}
