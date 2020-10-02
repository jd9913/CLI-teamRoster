const Employee = require('../lib/Employee.js');

jest.mock('../lib/Employee.js');


test('creates an employee object', () => {
    const employee = new Employee('Mandy');

    expect(employee.name).toBe('Mandy');
    
    expect(employee.id).toEqual(expect.any(Number));
        
    expect(employee.email).toEqual(expect.any(String));
    
});


//Employee parent class with these properties and methods
//name, id, email, getName(), getId(), getEmail(), getRole()--returns 'Employee'