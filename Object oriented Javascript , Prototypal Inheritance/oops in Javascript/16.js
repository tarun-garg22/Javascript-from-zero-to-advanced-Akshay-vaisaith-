// static methods and their properties
class Person{
          constructor(firstName,lastName,age){
                    this.firstName = firstName,
                    this.lastName = lastName,
                    this.age = age
          }
          static classInfo(){
                    return `this is person class`
          }
          static desc = "static property"
          get fullName(){
                    return `${this.firstName} ${this.lastName}`
          }
          set fullName(fullName){
                    const [firstName,lastName] = fullName.split(" ");
                    this.firstName = firstName,
                    this.lastName = lastName
          }
          eat(material){
                    return `this ${this.firstName} is eating ${material}`
          }
          isSupercute(){
                    return this.age<=1
          }
          isCute(){
                    return true
          }
          }

          const person1 = new Person("Tarun","Garg",25);
          // console.log(person1.eat("hel"));
          // gives me error
//          console.log(person1.classInfo());
         const info = Person.classInfo();
         console.log(info);
         console.log(Person.desc);


          
          