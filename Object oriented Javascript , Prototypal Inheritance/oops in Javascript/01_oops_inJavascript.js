// object oriented programming in javascript

// const User = {
//           firstName : "Tarun",
//           lastName : "Garg",
//           email:"Tarungarg@gmail.com",
//           age:24,
//           adrress:"Agra",
//           about(){
//                     return `${this.firstName} is ${this.age} years old `},
//           isi8(){
//                     return this.age>24
//                     }
// }
// const newUser = User.about()
// console.log(newUser);

//1.) function (that function create object)
//2.) add key value pair
//3.) object ko return karega

function CreateUser(firstName,lastName,email,age,address){
const user = {};
user.firstName = firstName;
user.lastName = lastName;
user.email = email,
user.age  = age,
user.address = address,
user.about = function(){
          return `${this.firstName} is ${this.age} years old `},
user.is18 = function(){
          return this.age>18
}
          return user
}

const User1 = CreateUser("Tarun","Garg",'tarun@gmail.com',25,"Agra");
console.log(User1);
const is18 = User1.is18();
console.log(is18);
