import inquirer from 'inquirer';
import fs from "fs"
// import generateHTML from './src/generateHTML.js'

// const Manager = require("./lib/Manager.js")
// const Engineer = require("./lib/Engineer.js")
// const Intern = require("./lib/Intern.js")

// const questions = 
const employeeGroup = [];

const userInput = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?",
        },
        {
            type: "input",
            name: "name",
            message: "What is your name?",
        },
        {
            type: "input",
            name: "name",
            message: "What is your name?",
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