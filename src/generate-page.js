//create the team with the data collected

const generateTeamPage = entireTeam => {

    //create manager HTML

    const createManager = manager => {
        return `
        <div class="card-section">

            <div class='row'>
                <div class="cell grid-item">
                    <div class="callout">
                        <h3 class="card-title">${manager.getName()}</h3>
                        <h4 class='subheader'><i class="fas fa-id-badge"> ${manager.getRole()}</i></h4>
                        <ul class="lead card-divider list-group">Employee Details
                        <li class="list-group-item">ID: ${manager.getId()} 1</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li class="list-group-item">Office Number: ${manager.getOfficeNum()}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
`;
    };

    //create engineer HTML

    const createEngineer = engineer => {
        return `
        <div class="cell grid-item">
            <div class="card">
                <div class="callout">
                    <h3 class="card-title">${engineer.getName()}</h3>
                    <h4 class='subheader'><i class="fas fa-id-badge"></i>${engineer.getRole()}</h4>
                    <ul class="card-divider lead list-group">Employee Details
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                    </ul>
                </div>
            </div>
        </div>
`;
    };

    //create intern HTML

    const createIntern = intern => {
        return `

        <div class="cell grid-item">
            <div class='card'>
                <div class="callout">
                    <h3 class="card-title">${intern.getName()}</h3>
                    <h4 class='subheader'><i class="fas fa-id-badge"></i>${intern.getRole()}</h4>
                    <ul class="lead card-divider list-group">Employee Details
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School Name: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
        </div>
`;

    };



    let htmlData = [];

    htmlData.push(entireTeam
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => createManager(manager))
    );
    htmlData.push(entireTeam
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => createEngineer(engineer))
        .join("")
    );

    htmlData.push(entireTeam
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => createIntern(intern))
        .join("")
    );

    return htmlData.join("");
}



module.exports = entireTeam => {


    return `
    <!doctype html>
    <html>
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width-device-width, initial-scale = 1.0" />
        <meta http-equiv="X-UA-
            Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.3/css/foundation.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/motion-ui/1.2.3/motion-ui.min.css">
        <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.3/css/foundation-prototype.min.css">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.css" rel="stylesheet"
            type="text/css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css" />
        
        <link rel="stylesheet" href="style.css" />
        <title>My team profile</title>
    </head>
    
    <body>
    
        <article class="grid-container">
            <div class="grid-x grid-margin-x">
                <div class="cell page-heading top">
                    <h1>Team Profile Page</h1>
                    <p class="subheader">building a team page using Node.js; npm Inquirer and Zurb Foundation for styling
                    </p>
                </div>
    
            </div>
            <div class="card-section">
    
                <hr />
            </div>
            <div class="section-header">
                <p class="lead">My team</p>
            </div>
         
         ${generateTeamPage(entireTeam)}

                </div>
            </div>
            
        </article>
    
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    
        <script src="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.6.3/js/foundation.min.js"></script>
    </body>
    
    </html
`;
};



/*${createManager(manager)}

<div class="grid-container">
    <div class="grid-x grid-margin-x small-up-1 medium-up-1 large-up-2">

${createEngineer(engineer)}

${createIntern(intern)}*/



