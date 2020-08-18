const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("./lib/questions");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

function getQuestions(typeAnswer){

    if(typeAnswer.employee === "Manager"){
        return questions.managerQuestion;
    } else if(typeAnswer.employee === "Engineer") {
        return questions.engineerQuestion;
    } else if(typeAnswer.employee === "Intern"){
        return questions.internQuestion;
    }
}

let employees = [];
let person;

async function init(){
    try{
        const typeAnswer = await inquirer.prompt(questions.typeQuestion);
        if(typeAnswer.employee === "I dont want to add another employee"){
            
            fs.writeFile(outputPath, render(employees), function(err) {
                if(err) {
                    return console.log(err);
                }
                console.log("The file was saved!");
            }); 
            
            return
        } else{
            const choice = await getQuestions(typeAnswer);
            const generalAnswers = await inquirer.prompt(questions.generalQuestions);
            const employeeAnswer = await inquirer.prompt(choice);

            if(typeAnswer.employee === "Manager"){
                person = new Manager(generalAnswers.name, generalAnswers.id, generalAnswers.email, employeeAnswer.number)
            } else if(typeAnswer.employee === "Engineer"){
                person = new Engineer(generalAnswers.name, generalAnswers.id, generalAnswers.email, employeeAnswer.github)
            } else if(typeAnswer.employee === "Intern"){
                person = new Intern(generalAnswers.name, generalAnswers.id, generalAnswers.email, employeeAnswer.school)
            } 

            employees.push(person);
            init()
        }

    } catch (error) {
        console.log(error);
    }
}
init();

