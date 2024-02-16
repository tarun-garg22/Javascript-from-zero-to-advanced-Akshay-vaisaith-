// function excution context

// console.log("hello world");
// let firstName = "Tarun";
// let lastName = "Garg";
// const myfunc = function(){
// let var1 = "firstVariable";
// let var2= "second Variable";
// console.log(var1);
// console.log(var2);
// };
// myfunc()

let foo = "foo";
console.log(foo);
function getFullName(firstName,lastName){
          console.log(arguments);
          let myvar = "var inside function"
          console.log(myvar);
          const fullName = firstName + " " + lastName;
          return fullName
}
const personName = getFullName("Tarun","Garg");
console.log(personName);