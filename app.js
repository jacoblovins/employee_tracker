const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

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


function getQuestions(typeAnswer){

    if(typeAnswer.employee === "Manager"){
        return managerQuestion;
    } else if(typeAnswer.employee === "Engineer") {
        return engineerQuestion;
    } else if(typeAnswer.employee === "Intern"){
        return internQuestion;
    }
    init();
}

let employees = [];

async function init(){
    try{
        const typeAnswer = await inquirer.prompt(typeQuestion);
        if(typeAnswer.employee === "I dont want to add another employee"){
            render(employees);
            return
        } else{
            const choice = await getQuestions(typeAnswer);
            const generalAnswers = await inquirer.prompt(generalQuestions);
            const employeeAnswer = await inquirer.prompt(choice);
            let employeeDetails = {
                ...generalAnswers,
                ...employeeAnswer
            };
            employees.push(employeeDetails);
            console.log(employees);
            init()
            // .map the employees informatin into a new array
        }

    } catch (error) {
        console.log(error);
    }
}
init();
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
