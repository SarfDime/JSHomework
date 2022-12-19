

let aboutMe = {
    myName: "Dime",
    dateOfBirth: 2002,
    myFavMovies: ["Equilibrium", "Reservoir Dogs"],
    couldThinkOf5Properties: false
}

aboutMe.myName = "Barley"
aboutMe.dateOfBirth = 2017
aboutMe.myFavMovies = "Doesn't watch movies"
aboutMe.isHuman = false
delete aboutMe.couldThinkOf5Properties


let trainer = {
    name: "Stefan",
    lastName: "Stefanovski",
    academy: "SEDC",
    lecture: "Objects"
}

delete trainer.lecture

trainer.age = 23

trainer.getfullName = function(){
    return this.name + this.lastName
} 
