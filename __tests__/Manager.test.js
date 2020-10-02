//include employee's properties and methods + officeNumber, getRole()

const Manager=require('../lib/Manager.js');

jest.mock('../lib/Manager.js');


test('creates a Manager object', () => {
    const manager = new Manager('');

    expect(manager.officeNum).toEqual(expect.any(String));

});  


test('gets data from employee', ()=>{

    const manager=new Manager('');
    
    expect (manager.getEmployeeData()).toEqual(expect.any(Array));
    
    manager.employeeData=[];
    
    
    });