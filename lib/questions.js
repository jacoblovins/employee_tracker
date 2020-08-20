const typeQuestion = [
    {
        type: "list",
        message: "What type of employee would you like to add?",
        name: "employee",
        choices: ["Engineer", "Intern", "I dont want to add another employee"]
    }
];

const generalQuestions = [
    {
        type: "input",
        message: "Name:",
        name: "name"
    },
    {
        type: "input",
        message: "ID:",
        name: "id"
    },
    {
        type: "input",
        message: "Email:",
        name: "email",
        validate: function (email) {
  
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

            if (valid) {
                return true;
            } else {
                console.log(".  Please enter a valid email")
                return false;
            }
        }
    }
];

const managerQuestion = [
    {
        type: "input",
        message: "Office number:",
        name: "number"
    }
];

const engineerQuestion = [
    {
        type: "input",
        message: "GitHub Username:",
        name: "github"
    }
];

const internQuestion = [
    {
        type: "input",
        message: "School:",
        name: "school"
    }
];

module.exports = {
    typeQuestion,
    generalQuestions,
    managerQuestion,
    engineerQuestion,
    internQuestion
};