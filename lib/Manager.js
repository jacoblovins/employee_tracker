const Employee = require("./Employee")

// Manager class thart inherits from Employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber
        
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        const role = "Manager";
        return role;
    }
}

module.exports = Manager;