const dogValueDisplay = document.querySelector(".DogCelsio")
const dogInputDisplay = document.querySelector(".DogFahrio")
const dogInfo = document.getElementById("DogInfo")
const dogConvertBtn = document.querySelector(".Dogconvert")
const dogEnterBtn = document.querySelector(".DogmainBtn")
const dogTitle = document.getElementById("DogTitle")

{
    function human(input) {
        dogValue = input * 7;
        dogInputDisplay.append(input);
        dogValueDisplay.append(dogValue);
    }

    function humanToDOg() {
        year = parseFloat(prompt("Enter Human Year"));
        if (Number.isNaN(year) || year === null) {
            dogInfo.append("Please enter a valid year");
        } else if (year < 0) {
            dogInfo.append("You aren't born yet?");
            console.log(year)
            human(year);
        } else {
            human(year);
        }
    }

    function doggy(input) {
        dogValue = input / 7;
        roundedDogValue = dogValue.toPrecision(3);
        dogInputDisplay.append(input)
        dogValueDisplay.append(roundedDogValue)
    }

    function dogToHuman() {
        year = parseFloat(prompt("Enter Dog Year"));
        if (Number.isNaN(year) || year === null) {
            dogInfo.append("Please enter a valid year");
        } else if (year < 0) {
            dogInfo.append("Your dog isn't born yet?");
            doggy(year)
        } else if (year > 200) {
            dogInfo.append("Is your dog Immortal?");
            doggy(year)
        } else {
            doggy(year)
        }
    }

    dogFuReset = () => {
        dogValueDisplay.innerHTML = ``;
        dogInputDisplay.innerHTML = ``;
        dogInfo.innerHTML = ``;
    }

    dogConvertBtn.addEventListener('click', dogChange);
    dogEnterBtn.addEventListener('click', dogFuReset)
    dogEnterBtn.addEventListener('click', humanToDOg)

    let b = "hum";

    function dogChange() {
        switch (true) {
            case (b == "dog"):
                dogEnterBtn.addEventListener('click', humanToDOg);
                dogEnterBtn.removeEventListener('click', dogToHuman);
                dogConvertBtn.innerHTML = "Dog to Human";
                dogTitle.innerHTML = "Convert Human to Dog Years";
                b = "hum";
                break;
            case (b == "hum"):
                dogEnterBtn.addEventListener('click', dogToHuman);
                dogEnterBtn.removeEventListener('click', humanToDOg);
                dogConvertBtn.innerHTML = "Human to Dog";
                dogTitle.innerHTML = "Convert Dog to Human Years";
                b = "dog";
                break;
        }
    }
}