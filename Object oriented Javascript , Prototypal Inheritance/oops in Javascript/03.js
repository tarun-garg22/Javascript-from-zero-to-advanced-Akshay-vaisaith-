// object oriented programming in javascript
// memory
const usermethods = {
          about:  function(){
                    return `${this.firstName} is ${this.age} years old `},
          is18 : function(){
                    return this.age>18},
          issing : function(){
                    return `haaaaaaaaaa`
          }
}
//           function CreateUser(firstName,lastName,email,age,address){
//                     const user = {};
//                     user.firstName = firstName;
//                     user.lastName = lastName;
//                     user.email = email,
//                     user.age  = age,
//                     user.address = address,
//                     user.about = usermethods.about,
//                     user.is18  = usermethods.is18,
//                     user.issing = usermethods.issing
//                               return user
//                     }

// using proto
function CreateUser(firstName,lastName,email,age,address){
          const user = Object.create(usermethods); //{}
          user.firstName = firstName;
          user.lastName = lastName;
          user.email = email,
          user.age  = age,
          user.address = address
                    return user
          }
          
          const user1 = CreateUser("Tarun","Garg","tarun@gmail.com",25,"Agra");
          const user2 = CreateUser("Tarun","Garg","tarun@gmail.com",25,"Agra")     
          const user3 = CreateUser("Tarun","Garg","tarun@gmail.com",25,"Agra") 
          console.log(user1);  
          console.log(user1.about());  