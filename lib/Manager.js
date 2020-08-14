const Employee = require("./Employee")


// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        // this.icon = "";
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