
//in addition to Employees properties and methods + school, getSchool(), getRole()--overridden to return 'Intern'

const Employee=require("./Employee.js");

class Intern extends Employee {
    
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getRole() {
        return "Intern";
    }

    getSchool() {
        return this.school;
    }
   // getManager(){
   //     return this.manager;
 //   }


}


module.exports = Intern;