// new keyword

function CreateUser(firstName,age){
this.firstName = firstName,
this.age = age
}
CreateUser.prototype.about=  function(){
          console.log(this.firstName,this.age);
}
const User1 = new CreateUser("Tarun",25);
// new keyword
// 1.) empty object this  = {};
// 2.) return object
// 3.) const user = Object.create(CreateUser.prototype); //{}
User1.about();