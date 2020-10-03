
//in addition to employee's properties and methods + github, getGithub(), getRoles()

const Employee = require("./Employee");


class Engineer extends Employee {
    constructor (name, id, email, github) {
      super(name, id, email);
      this.github=github;  
    }

    getRole(){
        return "engineer";
    }

    getGithub(){
        return this.github;
    }
}




module.exports=Engineer;