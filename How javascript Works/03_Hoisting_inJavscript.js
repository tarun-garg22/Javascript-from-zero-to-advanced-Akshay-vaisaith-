// Hoisting in Javascript

console.log(this);
console.log(window);
console.log(myfunction);
myfunction()
console.log(firstName);
// // function declaration
// function myfunction(){
//           console.log("this is my function");
// }
// function expression
var myfunction = function(){
          console.log("this is my function");
}
var firstName = "Tarun";
var lastName =  "Garg";
var fullName = firstName +  " " +  lastName;
console.log(fullName);

