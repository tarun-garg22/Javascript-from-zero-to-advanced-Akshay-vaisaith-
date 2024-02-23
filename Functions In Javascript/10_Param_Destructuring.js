// Param Destructuring

// object
// a lot use in react

const person = {
          firstname : "Tarun",
          age: 25
}
function printdetails(obj){
         console.log(person.firstname);
         console.log(person.age);
         console.log(person.gender);
}

function printdetails({firstname,age}){
          console.log(firstname);
          console.log(age);
}
printdetails(person)