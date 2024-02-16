// getters and setters

class Person{
constructor(firstName,lastName,age){
          this.firstName = firstName,
          this.lastName = lastName,
          this.age = age
}
get fullName(){
          return `${this.firstName} ${this.lastName}`
}
// setName(firstName,lastName){
//           this.firstName = firstName,
//           this.lastName = lastName
// }
set fullName(fullName){
          const [firstName,lastName] = fullName.split(" ");
          this.firstName = firstName,
          this.lastName = lastName
}
}

// const person1 = new Person("Tarun","Garg",5);
// console.log(person1);
// methods
// console.log(person1.fullName())
// property
// console.log(person1.firstName);

// using get
// console.log(person1.fullName);

// console.log(person1.firstName);
// console.log(person1.lastName);
// using set
// (person1.setName("Shivkant","Goyal",8));
// console.log(person1.firstName);
// console.log(person1.lastName);
// normal way 
// person1.firstName = "Mohit",
// person1.lastName = "Gupta"
// console.log(person1.fullName);
// console.log(person1.firstName);
// console.log(person1.lastName);

const person1 = new Person("Tarun","Garg",5);
person1.fullName = "Shivkant Goyal";
// console.log(person1);
// console.log(person1.firstName);
// console.log(person1.lastName);
console.log(person1.fullName)

