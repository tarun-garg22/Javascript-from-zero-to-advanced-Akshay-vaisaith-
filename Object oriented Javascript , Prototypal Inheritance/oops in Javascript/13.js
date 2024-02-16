// example of class
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
// dog class

class Dog extends Animal{
     constructor(name,age,speed){
          super(name,age);
          this.speed = speed
     }  
     run(){
          return `${this.name} is running at ${this.speed}`
     }   
}
// object ko instance bhi bol sakte hai
const tommy  =new Dog("tommy",10,45);
console.log(tommy);
console.log(tommy.run());
console.log(tommy.isSupercute());