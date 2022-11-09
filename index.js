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

const questions = async () => {
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

        if (answers.role === "Manager") {
            const managerAnswer = inquirer.prompt([
                {
                    type: "input",
                    name: "officeNumber",
                    message: "What is your office number?",
                },
            ])

            const newManager = new Manager(
                answers.name,
                answers.id,
                answers.email,
                managerAnswer.officeNumber
            );
            teamData.push(newManager);
        } else if (answers.role === "Intern") {
            const internAnswer = inquirer.prompt([
                {
                    type: "input",
                    name: "school",
                    message: "What college/university did you go to?",
                },
            ])

            const newIntern = new Intern(
                answers.name,
                answers.id,
                answers.email,
                internAnswer.school
            );
            teamData.push(newIntern)
        } else if(answers.role === "Engineer") {
            const engineerAnswer = inquirer.prompt([
                {
                    type: "input",
                    name: "github",
                    message: "What is your username on Github?",
                },
            ])

            const newEngineeer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                engineerAnswer.github
            );
            teamData.push(newEngineeer)
        }
    }
};

async function askQuestions() {
    await questions()

    const addTeamAnswers = inquirer.prompt([
        {
            name: "addEmployee",
            type: "list",
            message: "Would you like to add another team member?",
            choices: ['Yes', 'No, create team roster.']
        }
    ])

    if (addTeamAnswers === 'Yes') {
        return askQuestions()
    }
    return createTeam
}

askQuestions();

function createTeam () {
    fs.writeFileSync("./dist/index.html", generateTeam(teamData), "utf-8");
};