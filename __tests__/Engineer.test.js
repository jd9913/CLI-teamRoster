//in addition to employee's properties and methods + github, getGithub(), getRoles()

const Engineer=require('../lib/Engineer.js');
jest.mock('../lib/Engineer.js');


test('creates an engineer object', () => {
    const engineer = new Engineer('');

    expect(engineer.github).toEqual(expect.any(String));

});  

test('gets data from employee', ()=>{

const engineer=new Engineer('');

expect (engineer.getEmployeeData()).toEqual(expect.any(Array));




});

test('gets engineers role',()=>{
const engineer=new Engineer('');

expect(engineer.getRole()).toEqual(expect.stringContaining(engineer.role.toString()));

});