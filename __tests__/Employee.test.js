const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Mandy');

    expect(employee.name).toBe('Mandy');
    expect(employee.id).toEqual(Number);
    expect(employee.email).toBe(expect.any(email));
});


//Employee parent class with these properties and methods
//name, id, email, getName(), getId(), getEmail(), getRole()--returns 'Employee'