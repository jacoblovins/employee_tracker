const Employee = require("./Employee")

// Intern class thart inherits from Employee class
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        const role = "Intern";
        return role;
    }
}

module.exports = Intern;