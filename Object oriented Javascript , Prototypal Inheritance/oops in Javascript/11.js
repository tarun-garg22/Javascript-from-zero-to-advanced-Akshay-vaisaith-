// 2015/es6
// class keyword
// class are fake
// constructor function

class CreateUser{
          constructor(firstName,lastName,email,age,address){
                    this.firstName = firstName,
                    this.lastName - lastName,
                    this.age = age,
                    this.email = email,
                    this.address = address
          }
          about(){
                    return `${this.firstName} is ${this.age} years old `;      
          }
          is18(){
                    return this.age > 18;      
          }
          issing(){
                    return `haaaaaaaaaa`; 
          }
          func(a){
                    console.log(a);
          }
}
        
        const user1 = new CreateUser("Tarun", "Garg", "tarun@gmail.com", 25, "Agra");
        const user2 = new CreateUser("Tarun", "Garg", "tarun@gmail.com", 25, "Agra");
        const user3 = new CreateUser("Tarun", "Garg", "tarun@gmail.com", 25, "Agra");
        
// console.log(user1.about());
console.log(Object.getPrototypeOf(user1));
(user1.func("a ki value dena bhai"));