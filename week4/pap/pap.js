var word1 = "example"
var word2 = word1.toUpperCase()
function twoWords() {
    return word1 + word2
}

console.log(twoWords())

function math() {
    return Math.floor(2.6)
}

console.log(math())

s1 = "trying"
var firstHalf = s1.slice(0, (s1.length/2))
console.log(firstHalf)

var otherHalf = s1.slice((s1.length/2))
console.log(otherHalf)

function mathWords() {
    return Math.floor(firstHalf.length)
}

console.log(mathWords())

var weirdWord1 = firstHalf.toUpperCase()
var weirdWord2 = otherHalf.toLowerCase()

function weirdWord() {
    return weirdWord1 + weirdWord2
}

console.log(weirdWord())

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
}

console.log(titleCase("Yeehaw I'm some text"))

//arrays i guess

var fruit = ["banana", "apple", "orange", "watermelon"]
var vegetables = ["carrot", "tomato","pepper", "lettuce"]

vegetables.pop()
fruit.shift()

var orangeIndex = fruit.indexOf("orange")
console.log(orangeIndex)

fruit.push(orangeIndex)

var veggiesNum = vegetables.length
console.log(veggiesNum)
vegetables.push(veggiesNum)

var food = fruit.concat(vegetables)

food.splice(4, 2)

var splitName = food.split("")
var reversedArr = splitName.reverse()
var reversedName = reversedArr.join("")

function allAtOnce(){
    return splitName + reversedArr + reversedName
}
console.log(allAtOnce())

function asString() {
    return food.toString
}

console.log(asString())

console.log("fruit: ", fruit)
console.log("vegetables: ", vegetables)
console.log(food)