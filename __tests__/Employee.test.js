const Employee = require('../lib/Employee.js');

jest.mock('../lib/Employee.js');


test('creates an employee object', () => {
    const employee = new Employee('Mandy');

    expect(employee.name).toBe('Mandy');
    
    expect(employee.id).toEqual(expect.any(Number));
        
    expect(employee.email).toEqual(expect.any(String));
    
});


test('gets employees name as object', ()=>{

const employee = new Employee('Mandy');

expect(employee.getName()).toHaveProperty('name');


});

test('gets employees name as object', ()=>{

    const employee = new Employee('Mandy');
    
    expect(employee.getName()).toHaveProperty('name');
    
    
    });
    test('gets employees Id as object', ()=>{

        const employee = new Employee('Mandy');
        
        expect(employee.getId()).toHaveProperty('id');
        
        
        });

test('gets employees email as object', ()=>{

    expect(employee.getEmail()).toHaveProperty('email');

})

test('gets employees role as object', ()=>{

    expect(employee.getRole()).toHaveProperty('role');

})





//Employee parent class with these properties and methods
//name, id, email, getName(), getId(), getEmail(), getRole()--returns 'Employee'