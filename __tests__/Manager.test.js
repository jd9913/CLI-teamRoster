//include employee's properties and methods + officeNumber, getRole()

const Manager=require('../lib/Manager.js');


test ('sets office number', ()=>{
    const offNum='123-123-1234';
    const manager=new Manager('somename', 123456, "someemail@email.com", offNum);
    expect(manager.officeNum).toEqual(offNum);
})

test('gets managers role=manager',()=>{
const role='Manager';
const manager= new Manager('somename', 123456, 'someemail@email.com', "123-123-1234");
expect(manager.getRole()).toBe(role);


});

test ('gets managers office num with getOfficeNum',()=>{
const offNum='123-123-1234';
const manager=new Manager('somename', 123456, 'someemail@email.com', offNum);
expect(manager.getOfficeNum()).toBe(offNum);

})




    
    
    