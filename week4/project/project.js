const readline = require("readline-sync");

var firstNumber = readlineSync.question("Please enter your first number");
var secondNumber = readlineSync.question("Please enter your second number");
var firstNumber = readlineSync.question("Please enter the operation to perform");

function plus(num1, num2){
    return num1 + num2
}

var result = plus(420, 69)
console.log(result)

function multiply(num1, num2){
    return num1 * num2
}

var result = multiply(420, 69)
console.log(result)

function divide(num1, num2){
    return num1 / num2
}

var result = divide(420, 69)
console.log(result)

function subtract(num1, num2){
    return num1 - num2
}

var result = subtract(420, 69)
console.log(result)

console.log("The result is: ", result)