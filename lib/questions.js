const typeQuestion = [
    {
        type: "list",
        message: "What type of employee would you like to add?",
        name: "employee",
        choices: ["Engineer", "Intern", "I dont want to add another employee"]
    }
]

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
        name: "email"
    }
]

const managerQuestion = [
    {
        type: "input",
        message: "Office number:",
        name: "number"
    }
]

const engineerQuestion = [
    {
        type: "input",
        message: "GitHub Username:",
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