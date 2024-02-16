// Short Syntax

const user1  ={
          firstName : "Tarun",
          age : 25,
          about:function(){
                    return `${this.firstName} ${this.age}`;
                  
          }
}
// short syntax for creating methods
const user2 ={
          firstName : "Mohit",
          age : 28,
          about(){
          console.log( this.firstName,this.age);
          }
}
const myfunc  =user1.about.bind(user1)
console.log(myfunc())
const myfunc2  =user2.about();
console.log(myfunc2);
