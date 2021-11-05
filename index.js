// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager')
const Employee = require('./lib/employee')
const generateHTML = require('./src/generateHTML')

let members = [];

// TODO: Create an array of questions for user input

const oneManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the team manager's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the team manager's ID number?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the team manager's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the team manager's office number?",
            name: "phone"
        }

    ])
        .then(answers => {
            const { name, id, email, phone } = managerInfo
            const manager = new Manager(name, id, email, phone)

            members.push(manager)
            console.log(manager)
        })
}
async function nextMem() {
    try {
        let nextMember = await inquirer.prompt([
            {
                type: "rawlist",
                message: "Which type of team member would you like to add?",
                name: "nextMem",
                choices: [
                    'Engineer',
                    'Intern',
                    "I don't want to add any more members"
                ]

            }
        ])


        if (nextMember.nextMem == "Engineer") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "What is the team engineer's name?",
                    name: "name"
                },
                {
                    type: "input",
                    message: "What is the team engineer's ID number?",
                    name: "id"
                },
                {
                    type: "input",
                    message: "What is the team engineer's email?",
                    name: "email"
                },
                {
                    type: "input",
                    message: "What is the engineer's GitHub username?",
                    name: "gitHub"
                },

            ]).then(answers => {
                return (answers)
            })
        }

        function intern() {
            inquirer.prompt([
                {
                    type: "input",
                    message: "What is the team intern's name?",
                    name: "name"
                },
                {
                    type: "input",
                    message: "What is the team intern's ID number?",
                    name: "id"
                },
                {
                    type: "input",
                    message: "What is the team intern's email?",
                    name: "email"
                },
                {
                    type: "input",
                    message: "What is the intern's school?",
                    name: "school"
                }
            ]).then(answers => {
                return (answers)
            })

        }

    } catch (err) {
        console.error(err)
    }
}