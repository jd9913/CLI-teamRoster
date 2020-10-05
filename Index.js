const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const fs = require('fs');

const outputFile = "./dist/teamProfile.html";
const render = require('./src/generate-page.js');

let employeeData = [];
let idCollection = [];


function teamApp() {

    function addManager() {
        console.log("please add a manager");
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'What is the name of the manager?',
                validate: response => {
                    if (response !== "") {
                        return true;
                    }
                    return "Please enter at least one value";
                }
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
                message: "what is the manager's office number?",
                validate: response => {
                    const yes = response.match(/^[1-9]\d*$/
                    );
                    if (yes) {
                        return true;
                    }
                    return "please enter a valid phone number";
                }
            }

        ]).then(response => {
            const manager = new Manager(response.managerName, response.managerEmail, response.managerOfficeNum, response.managerId);
            employeeData.push(manager);
            idCollection.push(response.managerId);
            addEmployee();
        });
    }

    function addEmployee() {

        console.log('this form will add employees to your team');

        inquirer.prompt([
            {
                type: 'list',
                name: 'addEmployee',
                message: "Which type of employee do you want to add?",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern",
                    "I'm finished adding employees"
                ]
            }
        ]).then(choice => {
            switch (choice.addEmployee) {
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
        });
    }

    function addEngineer() {

        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is the name of the engineer?',
                validate: response => {
                    if (response !== "") {
                        return true;
                    }
                    return "please enter a name";
                }

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
                    return "please enter a valid Id number";
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
                message: "what is the engineer's github user account name?",
                validate: response => {
                    if (response !== "") {
                        return true;
                    }
                    return "please enter a valid account name";
                }
            },
         /*   {                 going to be added later
                type: 'input',
                name: "engineerManager",
                message: "Enter the manager ID this engineer is assigned to",
                validate: response => {
                    const yes = response.match(
                        /^[1-9]\d*$/
                    );
                    if (yes) {
                        if (idCollection.includes(response)) {
                            return employeeData.manager.name;
                        } else {
                            console.log("please add a manager before adding an engineer")
                            addManager();
                        }
                    }
                }
            }*/

        ]).then(response => {
            const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
            employeeData.push(engineer);
            idCollection.push(response.engineerId);
            addEmployee();
        });
    }
    function addIntern() {

        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'What is the name of the intern?',
                validate: response => {
                    if (response !== "") {
                        return true;
                    }
                    return "please enter a valid name"
                }

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
                    return "please enter a valid Id";

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
                message: "what is the name of the intern's school?",
                validate: response => {
                    if (response !== "") {
                        return true;
                    }
                    return "please enter a valid name";
                }
            },
           /* {
                type: 'input',
                name: "internManager",
                message: "Enter the manager ID this intern is assigned to",
                validate: response => {
                    const yes = response.match(
                        /^[1-9]\d*$/
                    );
                    if (yes) {
                        if (idCollection.includes(response)) {
                            return employeeData.manager.name;
                        } else {
                            console.log("please add a manager before adding an intern")
                            addManager();
                        }
                    }
                }
            }*/

        ]).then(response => {
            const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
            employeeData.push(intern);
            idCollection.push(response.internId);
            addEmployee();
        });
    }

    function buildTeam() {

        fs.writeFileSync(outputFile, render(employeeData), err => {
            if (err) throw new Error(err);
            console.log('file created.  open file in browser to see it');
        });

    }
    addManager();
}
teamApp();


