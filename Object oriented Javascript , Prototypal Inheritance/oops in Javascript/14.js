// same class in subclass
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
          eat(){
                    return `modified Eat : ${this.name} is eating`
          } 
          run(){
               return `${this.name} is running at ${this.speed}`
          }   
     }

const tommy  =new Dog("tommy",10,45);
console.log(tommy);
console.log(tommy.run());
console.log(tommy.eat());
console.log(tommy.isSupercute());