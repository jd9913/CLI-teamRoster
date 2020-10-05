
//in addition to employee's properties and methods + github, getGithub(), getRoles()

const Employee = require("./Employee.js");


class Engineer extends Employee {
    constructor (name, id, email, github) {
      super(name, id, email);
      this.github=github;  
    }

    getRole(){
        return "Engineer";
    }

    getGithub(){
        return this.github;
    }
  //  getManager(){
  //      return this.manager;
 //   }
}




module.exports=Engineer;