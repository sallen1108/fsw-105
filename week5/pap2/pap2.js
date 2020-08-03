let nameMan = "John"
const age = 101

function runForLoop(pets) {
    let petObjects = []
    for (var i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
console.log("man name: ", nameMan)
return petObjects
}

runForLoop(["cat", "dog"])

//really lost on the one below.... yikes

const carrots = ["bright orange", "ripe", "rotten"]

const myVegetables = () => {
    return arr.map("carrot" + carrot)
}

//i feel like you should also be aware that having to type out everything because you use pictures kinda sucks lol
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    },
]

const friendly = () => {
    return arr.filter(function(person) {
        return person.friendly
    })
}

const doMathSum = (a,b) => {
    return a + b
}

const produceProduct = (a, b) => {
    return a * b
}

//by template literals did you mean object literals...?

const firstName = "Jane"
const lastName = "Doe"
const age = 100

const printString = (firstName, lastName) => {
    return "Hello " + firstName + " " + lastName + ", how does it feel to be" + age + " ?"
}

console.log(printString)

