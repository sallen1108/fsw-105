//regular loops

for(var i = 0; i < 10; i++) {
    console.log(i)
}

for(var i = 0; i < 10; i+=2) {
    console.log(i)
}

var favFoods = ["pizza", "pasta", "steak", "banana"]

console.log(favFoods[3])

for (var i = 0; i < favFoods.length; i++){
    console.log(favFoods[i])
}

var numbers = [1, 2, 3, 4, 5, 6]

for (var i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        console.log(numbers[i])
    }
}

var count = 0

while(count < 10){
    console.log("hi")
    count++
}

//nested loops
var arrayOfArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for(var i = 0; i < arrayOfArrays.length; i++){
    for(var j = 0; j < arrayOfArrays[1].length; j++){
        console.log(arrayOfArrays[1][1])
    }
}

//actual assignment

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    },{
        name: "Madeline",
        age: 80,
        gender: "female"
    },{
        name: "Cheryl",
        age: 22,
        gender: "female"
    },{
        name: "Sam",
        age: 30,
        gender: "male"
    },{
        name: "Suzy",
        age: 4,
        gender: "female"
    }
]

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is allowed to see Mad Max, let her in.")
        } else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is allowed to see Mad Max, let him in.")
        }
    } else {
        if (peopleWhoWantToSeeMadMaxFuryRoad === "female"){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not allowed to see Mad Max, do not let her in.")
        } else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not allowed to see Mad Max, do not let him in.")
        }
    }
}

for (var k = 0; k < 101; k++){
    if (k % 2 === 0){
        console.log("Even")
    } else {
        console.log("Odd")
    }
}

var array2 = [
    [2, 5, 435, 4, 3],
    [1, 1, 1, 1, 3],
    [9, 3, 4, 2]
]

for(var a = 0; a < array2.length; ++a){
    for(var b = 0; b < array2[0].length; b++){
        console.log("The light is on")
    }
    for(var b = 0; b < array2[1].length; b++){
        console.log("The light is on")
    }
    for(var b = 0; b < array2[2].length; b++){
        console.log("The light is off")
    }
}