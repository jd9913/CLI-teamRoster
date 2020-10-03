﻿
//in addition to Employees properties and methods + school, getSchool(), getRole()--overridden to return 'Intern'



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