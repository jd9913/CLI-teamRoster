//in addition to Employees properties and methods + school, getSchool(), getRole()--overridden to return 'Intern'

const Intern=require('../lib/Intern.js');




test('sets school in employee data', () => {
    const school='someSchool';
    const intern = new Intern('somename',12345,'someemail@email.com', school);

    expect(intern.school).toBe(school);

});  


    test('gets interns role =intern',()=>{
        const role='intern';
        const intern=new Intern('somename',12345,'someemail@email.com', 'someschool');
        
        expect(intern.getRole()).toBe(role);
        
        });

        test("gets school info from getSchool function",()=>{
            const school='someschool';
            const intern=new Intern('somename',12345,'someemail@email.com', school);
            expect(intern.getSchool()).toBe(school);
        });