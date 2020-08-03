//practice

function doMath(num1, num2, callback){
    return callback(num1, num2)
}


function sum(num1, num2){
    return num1 + num2
}

function subtract(num1, num2){
    return num1 - num2
}

//console.log(doMath(5, 10, sum))

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result = arr.filter(num => num % 2 === 0)

const movies = [
    { name: "movie1", genre: "horror" },
    { name: "movie2", genre: "action" },
    { name: "movie3", genre: "action" },
    { name: "movie4", genre: "fantasy" }
]

const actionMovies = movies.filter(movie => movie.genre === "action")

// actual assignment

const sectionA = [3, 6, 8, 2]

const resultA = sectionA.filter(function(num) {
    if (num >= 5){
        return true
    }
})

console.log(resultA)

const resultB = sectionA.filter(function(num) {
    if (num % 2 === 0){
        return true
    }
})

console.log(resultB)

const sectionB = [2, 5, 100]
const sectionBNames = ["john", "Jacob", "jinGleHeimer", "schmidt"]

const resultC = sectionB.map(function(num){
    return num * 2
})

console.log(resultC)

const resultD = sectionB.map(function(num){
    return num.toString()
})

console.log(resultD)

const resultE = sectionBNames.map(function(string){
    return string[0].toUpperCase() + string[1].toLowerCase()
})

console.log(resultE)

const extraCredit = [
    {
        name: "Angelina Jolie",
        age: 80,
    },
    {
        name: "Eric Jones",
        age: 2,
    },
    {
        name: "Paris Hilton",
        age: 5,
    },
    {
        name: "Kanye West",
        age: 16,
    },
    {
        name: "Bob Ziroll",
        age: 80,
    }
]

const resultF = extraCredit.map(function(extraCredit){
    return extraCredit.name
})

console.log(resultF)

const resultG = extraCredit.map(function(extraCredit){
    if (extraCredit.age >= 18){
        return extraCredit.name + " can go to The Matrix"
    } else {
        return extraCredit.name + " is underage"
    }
})

console.log(resultG)

const sectionC = [1, 2, 3]

const resultH = sectionC.reduce(function(final, num){
    final += num
    return final
})

console.log(resultH)

const resultI = sectionC.reduce(function(final, num){
    final
    return num.toString
})

console.log(resultI)

const voters = [
    {name:'Bob', age: 30, voted: true},
    {name:'Jake', age: 32, voted: true},
    {name:'Kate', age: 25, voted: false},
    {name:'Sam', age: 20, voted: false},
    {name:'Phil', age: 21, voted: true},
    {name:'Ed', age: 55, voted: true},
    {name:'Tami', age: 54, voted: true},
    {name:'Mary', age: 31, voted: false},
    {name:'Becky', age: 43, voted: false},
    {name:'Joey', age: 41, voted: true},
    {name:'Jeff', age: 30, voted: true},
    {name:'Zack', age: 19, voted: false},
]

const resultJ = voters.reduce(function(final, voter){
    if(voter.voted) {
        final++
    }
    return final
}, 0)

console.log(resultJ)

const sectionD = [1, 3, 5, 2, 90, 20]

const resultK = sectionD.sort(function(a, b){
   return a - b
})

console.log(resultK)

const resultL = sectionD.sort(function(a, b){
    return b - a
 })
 
 console.log(resultL)

const sectionD2 = ["dog", "wolf", "by", "family", "eaten"]
 
const resultM = sectionD2.sort(function(a, b){
    return a.length - b.length
 })
 
console.log(resultM)

console.log(sectionD2.sort())

