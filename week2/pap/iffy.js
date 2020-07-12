//practice

if(2 === 5){
    console.log("2 equals 5")
} else if(2 === 4){
    console.log("2 equals 4")
} else if(2 === 2){
    console.log("2 equals 2")
}


//actual assignment

if(5 > 3){
    console.log("is greater than")
}

var cat = {
    length: 3
}
if(cat.length = 3){
    console.log("is the length")
}

var person = {
    name: "Bobby",
    age: 12
}

if(person.age < 18){
    console.log("is not allowed in the movie")
} else if(person.age >= 18){
    console.log("is allowed in the movie")
}

if(person.name.startsWith("B")){
    console.log("is allowed in the movie")
}

if(person.name.startsWith("B") && person.age >= 18){
    console.log("is allowed in the movie")
} else if(person.name.startsWith("B") && person.age < 18){
    console.log("is not allowed in the movie")
}

if(1 === 1){
    console.log("strict")
} else if("1" == 1){
    console.log("strict")
} else {
    ("not equal at all")
}

if(1 <= 2 && 2 === 4){
    console.log("yes")
}