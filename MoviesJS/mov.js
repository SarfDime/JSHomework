const button = document.querySelector(".btn")
const resultDiv = document.querySelector(".resulOfChoice")
const treeDiv = document.querySelector(".treeOfChoice")

{
    let choice;
    let foodChoice;
    let movieChoice;
    let result;
    let fridayCash;

    function fuChoose() {
        fridayCash = parseInt(prompt("Enter money amount"));
        if (fridayCash === null || Number.isNaN(fridayCash)) {
            console.log(fridayCash)
            treeDiv.append(`You messed around`);
        } else {
            switch (true) {
                case (fridayCash < 0):
                    resultDiv.append(`You are in debt`);
                    treeDiv.append(`You had ${fridayCash}$`);
                    break;
                // < 17
                case (fridayCash < 17):
                    resultDiv.append(`Save your money. Watch TV and eat noodles`);
                    treeDiv.append(`You had less than 17$`);
                    break;
                // < 29
                case (fridayCash < 29):
                    treeDiv.append(`You had ${fridayCash}$`);
                    if (fridayCash < 20) {
                        result = fridayCash - 17;
                        treeDiv.append(`\nYou also had less than 20$`);
                        resultDiv.append(`The Stew is 17$, you have ${result}$ left`);
                    } else {
                        foodChoice = prompt("Choose Pork Or Stew");
                        if (foodChoice === null || foodChoice === undefined) {
                            resultDiv.append(`Don't mess around`);
                        } else if (foodChoice === 'Stew') {
                            result = fridayCash - 17;
                            resultDiv.append(`The Stew is 17$, you have ${result}$ left`);
                            treeDiv.append(`\nYou Chose the Stew`);
                        } else if (foodChoice === 'Pork') {
                            result = fridayCash - 20;
                            resultDiv.append(`The Pork is 20$, you have ${result}$ left`);
                            treeDiv.append(`\nYou Chose the Pork`);
                        } else {
                            resultDiv.append(`Don't mess around`);
                        }
                    } break;
                // -50
                case (fridayCash < 53):
                    treeDiv.append(`You had ${fridayCash}$`)
                    choice = prompt("You can't choose all options. Choose Movie or Meal")
                    if (choice === null || choice === undefined) {
                        resultDiv.append(`Don't mess around`)
                    } else if (choice === 'Movie') {
                        treeDiv.append(`\nYou chose Movie`)
                        console.log('%c%s', 'color: #f200e2', 'Youve chosen Movie');
                        if (fridayCash < 33) {
                            result = fridayCash - 29;
                            resultDiv.append(`Sonic is 28$, you have ${result}$ left`)
                            treeDiv.append(`\n You chose Sonic because you had < 33$`)
                        } else {
                            movieChoice = prompt("Sonic or Godfather")
                            if (movieChoice === undefined || null) {
                                resultDiv.append(`Dont mess Around`)
                            }
                            else if (movieChoice === 'Sonic') {
                                result = fridayCash - 29;
                                resultDiv.append(`Sonic is 28$, you have ${result}$ left`)
                                treeDiv.append(`\nYou chose Sonic`)
                            } else if (movieChoice === 'Godfather') {
                                result = fridayCash - 33;
                                resultDiv.append(`Godfather is 33$, you have ${result}$ left`)
                                treeDiv.append(`\nYou chose Godfather`)
                            } else {
                                resultDiv.append(`You're messing around`)
                            }
                        }
                    } else if (choice === 'Meal') {
                        treeDiv.append(`\nYou chose Meal`);
                        foodChoice = prompt("Choose Pork Or Stew");
                        if (foodChoice === null || foodChoice === undefined) {
                            resultDiv.append(`Don't mess around`);
                        } else if (foodChoice === 'Stew') {
                            result = fridayCash - 17;
                            resultDiv.append(`The Stew is 17$, you have ${result}$ left`);
                            treeDiv.append(`\nYou Chose the Stew`);
                        } else if (foodChoice === 'Pork') {
                            result = fridayCash - 20;
                            resultDiv.append(`The Pork is 20$, you have ${result}$ left`);
                            treeDiv.append(`\nYou Chose the Pork`);
                        } else {
                            resultDiv.append(`Don't mess around`);
                        }
                    } else {
                        resultDiv.append(`Don't mess around`);
                    } break;
                // 50+
                case (fridayCash >= 53):
                    treeDiv.append(`You had ${fridayCash}$`);
                    choice = prompt("Choose Movie, Meal or Both");
                    if (choice === null || choice === undefined) {
                        resultDiv.append(`You're too rich to be messing around`);
                    } else if (choice === 'Movie') {
                        movieChoice = prompt("Sonic or Godfather")
                        treeDiv.append(`\nYou chose Meal`)
                        if (movieChoice === 'Sonic') {
                            result = fridayCash - 29;
                            resultDiv.append(`Sonic is 28$, you have ${result}$ left`)
                            treeDiv.append(`\nYou chose Sonic`)
                        } else if (movieChoice === 'Godfather') {
                            result = fridayCash - 33;
                            resultDiv.append(`Godfather is 33$, you have ${result}$ left`)
                            treeDiv.append(`\nYou chose Godfather`)
                        } else {
                            resultDiv.append(`You're messing around`)
                        }
                    } else if (choice === 'Meal') {
                        treeDiv.append(`\nYou chose Meal`);
                        foodChoice = prompt("Choose Pork Or Stew");
                        if (foodChoice === 'Stew') {
                            result = fridayCash - 17;
                            resultDiv.append(`The Stew is 17$, you have ${result}$ left`);
                            treeDiv.append(`\nYou Chose the Stew`);
                        } else if (foodChoice === 'Pork') {
                            result = fridayCash - 20;
                            resultDiv.append(`The Pork is 20$, you have ${result}$ left`);
                            treeDiv.append(`\nYou Chose the Pork`);
                        } else {
                            resultDiv.append(`Don't mess around`);
                        }
                    } else if (choice === 'Both') {
                        treeDiv.append(`\nYou Chose Both`)
                        movieChoice = prompt("Choose movie first. Sonic or Godfather")
                        if (choice === null || choice === undefined) {
                            resultDiv.append(`You're too rich to be messing around`);
                        } else if (choice === 'Movie') {
                            movieChoice = prompt("Sonic or Godfather")
                            treeDiv.append(`\nYou chose Meal`)
                            if (movieChoice === 'Sonic') {
                                result = fridayCash - 29;
                                resultDiv.append(`Sonic is 28$, you have ${result}$ left`)
                                treeDiv.append(`\nYou chose Sonic`)
                            } else if (movieChoice === 'Godfather') {
                                result = fridayCash - 33;
                                resultDiv.append(`Godfather is 33$, you have ${result}$ left`)
                                treeDiv.append(`\nYou chose Godfather`)
                            } else {
                                resultDiv.append(`You're messing around`)
                            }
                        } else if (choice === 'Meal') {
                            treeDiv.append(`\nYou chose Meal`);
                            foodChoice = prompt("Choose Pork Or Stew");
                            resultDiv.append(`Don't mess around`);
                            if (foodChoice === 'Stew') {
                                result = fridayCash - 17;
                                resultDiv.append(`The Stew is 17$, you have ${result}$ left`);
                                treeDiv.append(`\nYou Chose the Stew`);
                            } else if (foodChoice === 'Pork') {
                                result = fridayCash - 20;
                                resultDiv.append(`The Pork is 20$, you have ${result}$ left`);
                                treeDiv.append(`\nYou Chose the Pork`);
                            } else {
                                resultDiv.append(`Don't mess around`);
                            }
                        } else {
                            resultDiv.append(`Don't mess with me`)
                        }
                    } else {
                        resultDiv.append(`Stop it!`)
                    } break;
                default:
                    resultDiv.append(`Please Stop Messing Around`);
                    break;
            }
        }
    }
}

function fuReset() {
    resultDiv.innerHTML = ``;
    treeDiv.innerHTML = ``;
}
function fuReButton() {
    button.innerHTML = `Choose Again`;
}
button.addEventListener('click', () => {
    fuReset();
    fuChoose();
    fuReButton();
})
