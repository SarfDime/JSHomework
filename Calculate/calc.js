let div = document.getElementById("show");
let div2 = document.getElementById("show2");
let div3 = document.getElementById("show3");
let div4 = document.getElementById("show4");
let div5 = document.getElementById("show5");
let div6 = document.getElementById("show6");

{
    let phone = parseInt(prompt("Enter Phone Price"));
    let supply = parseInt(prompt("Enter Amount of Phones"));

    function tax(input, multiplier) {
        output = (input * 5) / 100;
        taxedinput = input + output;
        total = (output + input) * multiplier;
    }

    tax(phone, supply);

    div.append("Total plus tax is " + total + "$")
    div2.append("Phone price is " + phone + "$");
    div3.append("You ordered " + supply + " phones");
    div4.append("5% Tax is " + output + "$");
    div5.append("Taxed phone is " + taxedinput + "$")
}
function remove() {
    div6.innerHTML = "";
}

/////////////////
function redo() {
    {
        let radius = parseFloat(prompt("Enter Radius"));
        const area = 3.1415;

        function square(input) {
            return (input * input) * area;
        }

        div6.append("Circle Area is " + square(radius))
    }
}

let dim = document.querySelector(".dime");

dim.addEventListener('click', remove);
dim.addEventListener('click', redo);