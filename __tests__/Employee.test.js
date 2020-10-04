const Employee = require('../lib/Employee.js');




test('creates an employee object', () => {
    const employee = new Employee();

    expect(typeof (employee)).toBe("object");

});


test('sets employees name as object', () => {
    const name = 'Mandy'
    const employee = new Employee(name);

    expect(employee.name).toBe(name);


});


test('sets employees Id as object', () => {
    const id = 123456;
    const employee = new Employee('somename', id);

    expect(employee.id).toBe(id);


});

test('sets employees email as object', () => {
const email='someemail@email.com';
const employee=new Employee('somename',123456,email)
    expect(employee.email).toBe(email);

})

test('gets employee name via getName()', ()=>{
const name='somename';
const employee=new Employee(name);
expect(employee.getName()).toBe(name);

});

test('gets employee id via getId()', ()=>{
const id=123456;
const employee=new Employee('somename', id);
expect(employee.getId()).toBe(id);

});

test ('gets employee email via getEmail()',()=>{
const email='someemail@email.com';
const employee=new Employee('somename', 123456, email);
expect (employee.getEmail()).toBe(email);



})

test('gets employees role as object role should = employee', () => {
const role='employee';
const employee=new Employee('somename',123456,'someemail@email.com');
    expect(employee.getRole()).toBe(role);

})





//Employee parent class with these properties and methods
//name, id, email, getName(), getId(), getEmail(), getRole()--returns 'Employee'