// Require all necessary modules
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("./lib/questions");
const render = require("./lib/htmlRenderer");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Create path to final HTML output
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Global variables that will be changed
let employees = [];
let person;

// Initial function when the page runs
// Gets info for the manager and pushes a manager object to employees array
async function init() {
    console.log("Input manager information:")
    try {
        const generalAnswers = await inquirer.prompt(questions.generalQuestions);
        const managerAnswer = await inquirer.prompt(questions.managerQuestion);
        person = new Manager(generalAnswers.name, generalAnswers.id, generalAnswers.email, managerAnswer.number)
        employees.push(person);
        otheremployees();
    } catch (error) {
        console.log(error);
    }
}

// Repeating function that asks either engineer or intern questions
// Creates a new engineer or intern object and pushes it to employees
async function otheremployees() {
    try {
        const typeAnswer = await inquirer.prompt(questions.typeQuestion);
        if (typeAnswer.employee === "Engineer") {
            // Engineer questions and actions
            console.log("Input engineer information:")
            const generalAnswers = await inquirer.prompt(questions.generalQuestions);
            const engineerAnswer = await inquirer.prompt(questions.engineerQuestion);
            person = new Engineer(generalAnswers.name, generalAnswers.id, generalAnswers.email, engineerAnswer.github);
            employees.push(person);
            otheremployees()
        } else if (typeAnswer.employee === "Intern") {
            // Intern questions and actions
            console.log("Input intern information:")
            const generalAnswers = await inquirer.prompt(questions.generalQuestions);
            const internAnswer = await inquirer.prompt(questions.internQuestion);
            person = new Intern(generalAnswers.name, generalAnswers.id, generalAnswers.email, internAnswer.school)
            employees.push(person);
            otheremployees()
        } else if (typeAnswer.employee === "I dont want to add another employee") {
            // Take the compiled information, run it through the render function, and
            // send the returned data to the team.html file
            fs.writeFile(outputPath, render(employees), function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("The file was saved!");
            });
            return
        } 
    } catch (error) {
        console.log(error);
    }
}
init();

