
//in addition to Employees properties and methods + school, getSchool(), getRole()--overridden to return 'Intern'

const Employee=require("./Employee.js");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getRole() {
        return 'intern';
    }

    getSchool() {
        return this.school;
    }


}


module.exports = Intern;