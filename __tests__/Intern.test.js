//in addition to Employees properties and methods + school, getSchool(), getRole()--overridden to return 'Intern'

const Intern=require('../lib/Intern.js');

jest.mock('../lib/Intern.js');


test('creates an Intern object', () => {
    const intern = new Intern('');

    expect(intern.school).toEqual(expect.any(String));

});  



