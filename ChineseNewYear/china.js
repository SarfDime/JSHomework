const chsnYear = document.querySelector(".chosenYear");
const youZodiac = document.querySelector(".yourZodiac");
const button = document.querySelector(".btn");

function fuReset() {
    chsnYear.innerHTML = ``;
    youZodiac.innerHTML = ``;
}
function fuReButton() {
    button.innerHTML = `Choose Again`;
}
button.addEventListener('click', () => {
    fuReset();
    fuZodiac();
    fuReButton();
})

{
    let year = 0;

    function fuCalculate() {
        result = (year - 4) % 12;
    }

    function fuZodiac() {
        year = parseInt(prompt("Enter your year"));
        if (Number.isNaN(year) || year === null) {
            chsnYear.append(`Enter year Properly`)
        } else {
            fuCalculate();
            chsnYear.append(`Your year is ${year}.`)
            switch (true) {
                case (result === 0):
                    youZodiac.append(`Your Zodiac is Rat.`)
                    break;
                case (result === 1):
                    youZodiac.append(`Your Zodiac is Ox.`)
                    break;
                case (result === 2):
                    youZodiac.append(`Your Zodiac is Tiger.`)
                    break;
                case (result === 3):
                    youZodiac.append(`Your Zodiac is Rabbit.`)
                    break;
                case (result === 4):
                    youZodiac.append(`Your Zodiac is Dragon.`)
                    break;
                case (result === 5):
                    youZodiac.append(`Your Zodiac is Snake.`)
                    break;
                case (result === 6):
                    youZodiac.append(`Your Zodiac is Horse.`)
                    break;
                case (result === 7):
                    youZodiac.append(`Your Zodiac is Goat.`)
                    break;
                case (result === 8):
                    youZodiac.append(`Your Zodiac is Monkey.`)
                    break;
                case (result === 9):
                    youZodiac.append(`Your Zodiac is Rooster.`)
                    break;
                case (result === 10):
                    youZodiac.append(`Your Zodiac is Dog.`)
                    break;
                case (result === 11):
                    youZodiac.append(`Your Zodiac is Rat.`)
                    break;
                default:
                    fuReset()
                    chsnYear.append('You broke it')
                    break;
            }
        }
    }
}

