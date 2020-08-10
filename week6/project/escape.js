const readlineSync = require("readline-sync");

const userName = readlineSync.question("What is your name?");
console.log("Hi " + userName + "!");
console.log("You find yourself ina square room with a single hole in the wall and a locked door. To excape you must find the key!")

const roomSearch = readlineSync.question("Would you like to check the room?", {
    trueValue: ["yes"],
    falseValue: ["no"]
});
if (roomSearch === true) {
    console.log("You found the key!")
} else {
    console.log("Okay, moving on!")
}

const intoHole = readlineSync.question("Would you like to check the hole in the wall?", {
    trueValue: ["yes"],
    falseValue: ["no"]
});
if (intoHole === true){
    console.log("You died, oh no ):")
} else {
    console.log("Good idea, let's move on.")
}

const openDoor = readlineSync.question("Would you like to try and open the door?", {
    trueValue: ["yes"],
    falseValue: ["no"]
});

if (roomSearch === true, openDoor === true) {
    console.log("Congrats, you made it!")
} else if (roomSearch === false, openDoor === true) {
    console.log("I'm sorry, you don't have the key ):")
} else {
    console.log("Alright, guess you're stuck here.")
}