const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");


let employeeData = [];



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
            message: 'what is the ID # of the manager?'

        },

        {
            type: 'input',
            name: 'managerEmail',
            message: 'what is the email address of the manager?'
        },
      
    {

        type: 'input',
        name: 'managerOfficeNum',
        message: "what is the manager's office number?"
    }
    
]).then (responses=>{
    const manager=new Manager(responses.managerName, responses.managerEmail, responses.managerOfficeNum, responses.managerId);
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
        message: 'what is the ID # of the engineer?'

    },

    {
        type: 'input',
        name: 'engineerEmail',
        message: 'what is the email address of the engineer?'
    },
    {
        type: 'input',
        name:'engineerGithub',
        message:"what is the engineer's github user account name?"
    },
    {
        type: 'input',
        name: "engineerManager",
        message: "Enter the manager ID this engineer is assigned to"
    }

   ]).then(responses=>{
       const engineer=new Engineer(responses.engineerName, responses.engineerId, responses.engineerEmail, responses.engineerGithub, responses.engineerManager);
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
         message: 'what is the ID # of the intern?'
 
     },
 
     {
         type: 'input',
         name: 'internEmail',
         message: 'what is the email address of the intern?'
     },
     {
         type: 'input',
         name:'internSchool',
         message:"what is the name of the intern's school?"
     },
     {
         type: 'input',
         name: "internManager",
         message: "Enter the manager ID this intern is assigned to"
     }
 
    ]).then(responses=>{
        const engineer=new Engineer(responses.internName, responses.internId, responses.internEmail, responses.internSchool, responses.internManager);
        employeeData.push(intern);
        idCollection.push(responses.internId);
        addEmployee();
    });
 
 }

 