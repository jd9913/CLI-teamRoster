//Object to create the employee
//Employee parent class with these properties and methods
//name, id, email, getName(), getId(), getEmail(), getRole()--returns 'Employee'

class Employee {
    constructor(name, id, email) {

        this.name = name;
        this.id = id;
        this.email = email;
        
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
    getRole() {
        return 'employee';
    }
};


module.exports=Employee;















module.exports = Employee;