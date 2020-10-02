//in addition to employee's properties and methods + github, getGithub(), getRoles()

const Engineer=require('../lib/Engineer.js');
jest.mock('../lib/Engineer.js');


test('creates an engineer object', () => {
    const engineer = new Engineer('');

    expect(engineer.github).toEqual(expect.any(String));

});  