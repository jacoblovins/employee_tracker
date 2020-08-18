const typeQuestion = [
    {
        type: "list",
        message: "What type of employee:",
        name: "employee",
        choices: ["Manager", "Engineer", "Intern", "I dont want to add another employee"]
    }
]

const generalQuestions = [
    {
        type: "input",
        message: "Employee name:",
        name: "name"
    },
    {
        type: "input",
        message: "Employee ID:",
        name: "id"
    },
    {
        type: "input",
        message: "Employee Email:",
        name: "email"
    },
]

const managerQuestion = [
    {
        type: "input",
        message: "Office Phone number:",
        name: "number"
    }
]

const engineerQuestion = [
    {
        type: "input",
        message: "GitHub Link:",
        name: "github"
    }
]

const internQuestion = [
    {
        type: "input",
        message: "School:",
        name: "school"
    }
]

module.exports = {
    typeQuestion,
    generalQuestions,
    managerQuestion,
    engineerQuestion,
    internQuestion
}