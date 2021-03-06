// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager')
const generateHTML = require('./src/generateHTML')

console.log("\nWelcome to team generator!")
let members = [];

function teamMember() {

    inquirer.prompt([
        {
            type: "input",
            message: "What is your manager's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is your manager's id?",
            name: "id",
        },
        {
            type: "input",
            message: "What is your manager's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is your manager's office number?",
            name: "phone",
        }
    ])

        .then(function (answers) {
            let manager = new Manager(answers.name, answers.id, answers.email, answers.phone);
            members.push(manager)
            nextMem()
        })
        .catch(function (err) {
            console.log(err);
        });


    async function nextMem() {
        try {
            //console.log(members)
            let teamChoice = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'team',
                    message: 'Which type of team member would you like to add',
                    choices: ['Engineer', 'Intern', 'I don\'t want to add anymore team members.']
                }
            ]);

            if (teamChoice.team === 'Engineer') {

                inquirer.prompt([
                    {
                        type: "input",
                        message: "What is your engineer's name?",
                        name: "name",
                    },
                    {
                        type: "input",
                        message: "What is your engineer's id?",
                        name: "id",
                    },
                    {
                        type: "input",
                        message: "What is your engineer's email?",
                        name: "email",
                    },
                    {
                        type: "input",
                        message: "What is your engineer's GitHub username?",
                        name: "github",
                    }
                ])

                    .then(function (answers) {
                        let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                        members.push(engineer);
                        nextMem();
                    })
                    .catch(function (err) {
                        console.log(err);
                    });

            } else if (teamChoice.team === 'Intern') {
                inquirer.prompt([
                    {
                        type: "input",
                        message: "What is your intern's name?",
                        name: "name",
                    },
                    {
                        type: "input",
                        message: "What is your intern's id?",
                        name: "id",
                    },
                    {
                        type: "input",
                        message: "What is your intern's email?",
                        name: "email",
                    },
                    {
                        type: "input",
                        message: "What is your intern's school?",
                        name: "school",
                    }
                ])
                    .then(function (answers) {
                        let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                        members.push(intern);
                        nextMem();
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
                    

            } else { 
                console.log(members)
                generateHTML(members) }


        } catch (err) {
            console.log(err);
        }
    }



}

teamMember();








