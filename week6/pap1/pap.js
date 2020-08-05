const employees = [
    {
        
    }
]

function Employee(name, jobTitle, salary){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = "Full Time"
    this.changeStatus = function (status) {
        this.status = status;
    }
    this.printEmployeeForm = function () {
        console.log(this.name + ", " + this.jobTitle + ", " + this.salary + ", " + this.status)
    }
}

var joe = new Employee("Joe", "Professor", "$50/hour")
var diane = new Employee("Diane", "Assistant", "$14/hour")
var karen = new Employee("Karen", "Village Idiot", "$0.01/hour")

karen.changeStatus("Part Time")

joe.printEmployeeForm()
diane.printEmployeeForm()
karen.printEmployeeForm()

employees.push(joe)
employees.push(diane)
employees.push(karen)

console.log(employees)