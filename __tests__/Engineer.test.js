//in addition to employee's properties and methods + github, getGithub(), getRoles()

const Engineer=require('../lib/Engineer.js');



test('set github account',()=>{
const githubAccount= 'userAccount';
const engineer=new Engineer('somename', 123456, 'semeemail@email.com', githubAccount);
expect (engineer.github).toBe(githubAccount);

})

test('gets engineers role',()=>{
const role='engineer';

    const engineer=new Engineer('somename',12345,'someemail@email.com','userAccount');

expect(engineer.getRole()).toBe(role);

});

test('gets engineers github account',()=>{
    const githubAccount='userAccount';
    const engineer=new Engineer('somename',12345,'someemail@email.com',githubAccount);
    
    expect(engineer.getGithub()).toBe(githubAccount);
    
    });