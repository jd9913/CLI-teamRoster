//include employee's properties and methods + officeNumber, getRole()

const Manager=require('../lib/Manager.js');

jest.mock('../lib/Manager.js');


test('creates a Manager object', () => {
    const manager = new Manager('');

    expect(manager.officeNum).toEqual(expect.any(String));

});  