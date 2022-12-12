let withDrawBTN = document.querySelector(".withDraw");
let depoBTN = document.querySelector(".deposit");
let atmInf = document.querySelector(".atmInfo");
let youMoney = document.querySelector(".yourMoney");
let lefOver = document.querySelector(".leftOver");

{
    let accMoney = 500;

    function deposit(amount) {
        accMoney = accMoney + amount;
        lefOver.append(`You have ${accMoney}$ in your Account`)
        youMoney.append(`You deposited ${amount}$`)
        return accMoney;
    }

    function bankPosit() {
        depAmount = parseFloat(prompt("Enter Withdraw Amount"));
        if (Number.isNaN(depAmount) || depAmount === null) {
            atmInf.append("Stop playing with the ATM or the police will be contacted");
        } else if (depAmount <= 0) {
            atmInf.append("Are you going to deposit money or are you just playing around?");
            youMoney.append(`You tried to deposit ${depAmount}$`);
            lefOver.append(`You have ${accMoney}$ in your Account`);
        } else if (depAmount >= 1000000) {
            atmInf.append("Is there Anything else we can do for you Mr. Rockefeller");
            deposit(depAmount);
        } else {
            deposit(depAmount);
        }
    }

    function wthDraw(amount) {
        accMoney = accMoney - amount;
        lefOver.append(`You have ${accMoney}$ in your Account`)
        youMoney.append(`You withdrew ${amount}$`)
        return accMoney;
    }

    function bankDraw() {
        wthAmount = parseFloat(prompt("Enter Withdraw Amount"))
        if (Number.isNaN(wthAmount) || wthAmount === null) {
            atmInf.append("Stop playing with the ATM or the police will be contacted");
        } else if (wthAmount > accMoney) {
            atmInf.append("You're too poor to withdraw that much");
            lefOver.append(`You have ${accMoney}$ in your Account`);
            youMoney.append(`You tried to withdraw ${wthAmount}$`)
        } else if (wthAmount <= 0) {
            atmInf.append("Are you going to withdraw money or are you just playing around?");
            youMoney.append(`You tried to deposit ${wthAmount}$`);
            lefOver.append(`You have ${accMoney}$ in your Account`);
        } else {
            wthDraw(wthAmount);
        }
    }

    bankreset = () => {
        youMoney.innerHTML = '';
        lefOver.innerHTML = '';
        atmInf.innerHTML = '';
    }

    withDrawBTN.addEventListener('click', () => {
        bankreset();
        bankDraw();
    });

    depoBTN.addEventListener('click', () => {
        bankreset();
        bankPosit();
    });
}