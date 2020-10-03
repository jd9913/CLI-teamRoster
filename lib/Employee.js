//Object to create the employee
//Employee parent class with these properties and methods
//name, id, email, getName(), getId(), getEmail(), getRole()--returns 'Employee'



function Employee(name="", id, email) {
    this.name = name;
    this.id = id;
    this.email = email;

    this.getName=function(){
        return {
            name: this.name
                   };
    };

    this.getId=function(){
       
       return{
        id: this.id}
        
    };

    this.getEmail=function(){
     return{
        email: this.email}
    };

    //returns the role of the employee
    this.getRole=function(){
        return 'employee';
    };



};















module.exports = Employee;