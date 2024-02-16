// use prototype in previous problem
// const usermethods = {
//           about:  function(){
//                     return `${this.firstName} is ${this.age} years old `},
//           is18 : function(){
//                     return this.age>18},
//           issing : function(){
//                     return `haaaaaaaaaa`
//           }
// }
function CreateUser(firstName,lastName,email,age,address){
          const user = Object.create(CreateUser.prototype); //{}
          user.firstName = firstName;
          user.lastName = lastName;
          user.email = email,
          user.age  = age,
          user.address = address
                    return user
          }
// console.log(CreateUser.prototype);
CreateUser.prototype.about = function(){
          return `${this.firstName} is ${this.age} years old `};
CreateUser.prototype.is18 = function(){
          return this.age>18};
CreateUser.prototype.issing = function(){
          return `haaaaaaaaaa`};
          
          const user1 = CreateUser("Tarun","Garg","tarun@gmail.com",25,"Agra");
          const user2 = CreateUser("Tarun","Garg","tarun@gmail.com",25,"Agra")     
          const user3 = CreateUser("Tarun","Garg","tarun@gmail.com",25,"Agra") 
          console.log(user1);  
          console.log(user1.about());  
          console.log(user1.issing());  

