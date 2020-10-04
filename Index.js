const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern.js");
const fs = require('fs');


let employeeData = [];
let idCollection = [];

function createEntireTeam() {

    function addEmployee() {
        console.log('this form will add employees to your team');

        inquirer.prompt([
            {
                type: 'list',
                name: 'addOtherEmp',
                message: "Which type of employee do you want to add?",
                choices: [
                    "Engineer",
                    "Intern",
                    "Manager",
                    "I'm finished adding employees"
                ]
            }
        ]).then(userChoice => {
            switch (userChoice.addOtherEmp) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                case "Manager":
                    addManager();
                    break;
                default:
                    buildTeam();
            }
        })

    }

    function addManager() {
        console.log("please add a manager");
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'What is the name of the manager?'

            },
            {
                type: 'input',
                name: 'managerId',
                message: 'what is the ID # of the manager?',
                validate: response => {
                    const yes = response.match(
                        /^[1-9]\d*$/
                    );
                    if (yes) {
                        if (idCollection.includes(response)) {
                            return "This ID already is used, please enter a different ID";
                        } else {
                            return true;
                        }
                    }

                }

            },

            {
                type: 'input',
                name: 'managerEmail',
                message: 'what is the email address of the manager?',
                validate: response => {
                    const yes = response.match(
                        /\S+@\S+\.\S+/
                    );
                    if (yes) {
                        return true;
                    }
                    return "the entered email address is not valid, please try again";
                }
            },

            {

                type: 'input',
                name: 'managerOfficeNum',
                message: "what is the manager's office number?"
            }

        ]).then(responses => {
            const manager = new Manager(responses.managerName, responses.managerEmail, responses.managerOfficeNum, responses.managerId);
            employeeData.push(manager);
            idCollection.push(responses.managerId);
            addEmployee();
        })
    }

    function addEngineer() {

        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is the name of the engineer?'

            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'what is the ID # of the engineer?',
                validate: response => {
                    const yes = response.match(
                        /^[1-9]\d*$/
                    );
                    if (yes) {
                        if (idCollection.includes(response)) {
                            return "This ID already is used, please enter a different ID";
                        } else {
                            return true;
                        }
                    }

                }

            },

            {
                type: 'input',
                name: 'engineerEmail',
                message: 'what is the email address of the engineer?',
                validate: response => {
                    const yes = response.match(
                        /\S+@\S+\.\S+/
                    );
                    if (yes) {
                        return true;
                    }
                    return "the entered email address is not valid, please try again";
                }
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: "what is the engineer's github user account name?"
            },
            {
                type: 'input',
                name: "engineerManager",
                message: "Enter the manager ID this engineer is assigned to"
            }

        ]).then(responses => {
            const engineer = new Engineer(responses.engineerName, responses.engineerId, responses.engineerEmail, responses.engineerGithub, responses.engineerManager);
            employeeData.push(engineer);
            idCollection.push(responses.engineerId);
            addEmployee();
        });

    }
    function addIntern() {

        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'What is the name of the intern?'

            },
            {
                type: 'input',
                name: 'internId',
                message: 'what is the ID # of the intern?',
                validate: response => {
                    const yes = response.match(
                        /^[1-9]\d*$/
                    );
                    if (yes) {
                        if (idCollection.includes(response)) {
                            return "This ID already is used, please enter a different ID";
                        } else {
                            return true;
                        }
                    }

                }

            },

            {
                type: 'input',
                name: 'internEmail',
                message: 'what is the email address of the intern?',
                validate: response => {
                    const yes = response.match(
                        /\S+@\S+\.\S+/
                    );
                    if (yes) {
                        return true;
                    }
                    return "the entered email address is not valid, please try again";
                }
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "what is the name of the intern's school?"
            },
            {
                type: 'input',
                name: "internManager",
                message: "Enter the manager ID this intern is assigned to"
            }

        ]).then(responses => {
            const intern = new Intern(responses.internName, responses.internId, responses.internEmail, responses.internSchool, responses.internManager);
            employeeData.push(intern);
            idCollection.push(responses.internId);
            addEmployee();
        });

    }
    function buildTeam() {
        fs.writeFile(outputPath, render(employeeData), 'utf-8');

    }
}
createEntireTeam();

