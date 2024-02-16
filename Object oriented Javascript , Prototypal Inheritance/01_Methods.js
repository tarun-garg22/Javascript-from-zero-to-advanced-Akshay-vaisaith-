// methods
// functions inside object

// const person  ={
//           firstName : "Tarun",
//           age:8,
//           about : function(){
//                     console.log(this);
//                     console.log(`person name is ${this.firstName} and person ${this.age} is 8`);
//           }
// }

// person.about()
// console.log(this);

function personinfo() {
  console.log(`person name is ${this.firstName} and age is ${this.age}`);
}
const person1 = {
  firstName: "Tarun",
  age: 25,
  about: personinfo,
};

const person2 = {
  firstName: "Mohit",
  age: 23,
  about: personinfo,
};

const person3 = {
  firstName: "Nitish",
  age: 28,
  about: personinfo,
};
person1.about();
person2.about();
person3.about()
