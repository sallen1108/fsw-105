const readlineSync = require("readline-sync");

const enemies = ["Roc", "Mimic", "Nightmare", "Headless Horseman"];

console.log("Welcome to the magical yet scary world of Efren, " + userName + "!")
console.log("Feel free to wander, but watch your step. Press 'W' to get started.")

let i = enemies.length;
while(i) {const userName = readlineSync.question("What is your name?");

console.log("Don't be afraid to keep moving with 'W'.")

function encounterEnemy() {
    console.log("Oh no, you've encountered the " + enemies[Math.floor(Math.random() * enemies.length)] + "!")
    console.log("Press 'F' to fight or 'R' to run!")
}



document.body.addEventListener("keydown", function(a) {
    if (a.keyCode == 87){
        const chance = Math.floor(Math.random() * 4)
        if (chance.value === 1){
            encounterEnemy();
        } else {
            console.log("You move forward.")
        }
    }
})

const itemsDropped = ["unknown tooth", "broken dagger", "glass shard"]

const min = 0
const max = 60
function fightEnemy() {
    const value = Math.floor(Math.random() * 61)
    if (value.value === 0) {
        console.log("Your enemy dodged your attack!")
    } else if (value <= 59) {
        console.log("Not quite, you only hit for " + value + " damage out of 60!")
        console.log("You strike again and ill it!")
    } else if (value === 60) {
        console.log("Your enemy is dead, well done!")
    }
}

document.body.addEventListener("keydown", function(a) {
    if (a.keyCode == 70){
        fightEnemy();
    }
})

function runAway() {
    const value2 = Math.floor(Math.random() * 2);
    if (value2.value === 1) {
        console.log("You were able to escape!")
    } else {
        console.log("The enemy blocks your way. You must fight!")
        fightEnemy()
    }
}

document.body.addEventListener("keydown", function(a) {
    if (a.keyCode == 82){
        runAway();
    }
})
}