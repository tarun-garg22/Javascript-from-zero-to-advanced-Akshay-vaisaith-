// exapmle of class
class Animal{
          constructor(name,age){
                    this.name = name,
                    this.age = age
          }
          eat(material){
                    return `this ${this.name} is eating ${material}`
          }
          isSupercute(){
                    return this.age<=1
          }
          isCute(){
                    return true
          }
}
const getData = new Animal("Horse",34);
console.log(getData);

const getValue = getData.eat("grass");
// console.log(getValue);
// console.log(getData.isSupercute());

// dog class

// class Dog{
//           constructor(name,age){
//                     this.name  =name,
//                     this.age = age
//           }
//           eat(){
//                     return `this ${this.name} is eating ${material}`   
//           }
//           isSupercute(){
//                     return this.age<=1
//           }
//           isCute(){
//                     return true
//           }    
// }

class Dog extends Animal{
          
}
const tommy  =new Dog("tommy",10);
console.log(tommy);
console.log(tommy.isSupercute());