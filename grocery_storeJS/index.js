var name = "Sam"
var age = 21
var isAlive = true
var groceryCart = ["milk", "eggs", "bread", "lemonade", "orangejuice", "cheese"]

var shopper = {
    firstName: "Dude",
    lastName: "Guy",
    age: 31,
    hairColor: "brown",
    isAlive: true,
    mentallyStable: "false",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

console.log("My name is" + " " + shopper.fullName())