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

var myWord = "cat"
if (myWord.length == 3){
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
} else(person.name.startsWith("B") && person.age < 18) 
    console.log("is not allowed in the movie")

if(1 === 1){
    console.log("strict")
} else if("1" == 1){
    console.log("loose")
} else {
    ("not equal at all")
}

if(1 <= 2 && 2 === 4){
    console.log("yes")
}

console.log(typeof "dog");
console.log(typeof true);
if (typeof "dog" === undefined){
    console.log("this is undefined")
} else {
    console.log("this is defined")
}

if ("s" > 12){
    console.log("s is greater than 12")
} else {
    console.log("s is not greater than 12")
}

if ("a" < "d"){
    console.log("a is less than d")
} else {
    console.log("a is not less than d")
}

value = 1
if (value % 2 === 0){
    console.log("is even")
} else {
    console.log("is odd")
}