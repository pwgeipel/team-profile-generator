const inquirer = require("inquirer")
const fs = require("fs")

// import generateHTML from './src/generateHTML.js'

// const Manager = require("./lib/Manager.js")
// const Engineer = require("./lib/Engineer.js")
// const Intern = require("./lib/Intern.js")

// const questions = 
const Manager = require("./lib/Manager.js")
const Engineer = require("./lib/Engineer.js")
const Intern = require("./lib/Intern.js")

const teamData = [];

const userInput = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is your ID number?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
        },
        {
            type: "choice",
            name: "role",
            message: "What is your role?",
            choices: ["Manager", "Engineer", "Intern"],
        },
    ])
    .then (function(input) {
        console.log(input)
        let testEngineer = new Engineer(
            input.name,
            input.id,
            input.email,
            input.github,
        )
        employeeGroup.push(testEngineer)
        // addEmployee()
    })

}
function makeProfile () {
    const template = generateHTML(employeeGroup)
}
userInput();