let birthInfo = document.querySelector(".birthInfo")
let birthBtn = document.querySelector(".birthButton")
let birthDisp = document.querySelector(".birthDisplay")
let youBirth = document.querySelector(".youBirth")
let yearDisp = document.querySelector(".yearDisplay")

{
    let curDate = new Date();
    let curYear = curDate.getFullYear();

    function calculateAge(inpYear) {
        calculated = curYear - inpYear
        yearDisp.append(`Current Year ${curYear}`);
        birthDisp.append(`You are ${calculated} years old`);
        youBirth.append(`Your birthday year is ${inpYear}`)
    }

    function mainBirth() {
        dates = parseFloat(prompt("Enter Year"))
        if (Number.isNaN(dates) || dates === null) {
            birthInfo.append("Enter year properly.")
        } else if (dates > curYear) {
            birthInfo.append(`How's ${dates} like, have flying cars been invented?`)
            calculateAge(dates)
        } else if (dates === curYear) {
            birthInfo.append(`You're pretty smart for a newborn`)
            calculateAge(dates)
        }
        else if (dates <= 1900) {
            birthInfo.append(`You're officially the oldest person alive.`)
            calculateAge(dates)
        } else {
            calculateAge(dates)
        }
    }

    birthReset = () => {
        birthDisp.innerHTML = '';
        birthInfo.innerHTML = '';
        yearDisp.innerHTML = '';
        youBirth.innerHTML = '';
    }

    birthBtn.addEventListener('click', () => {
        birthReset();
        mainBirth();
    });
}