// this and window in global excution context

console.log(this);
console.log(window);
console.log(myfunction);
console.log(firstName);

function myfunction(){
          console.log("this is my function");
}
var firstName = "Tarun";
var lastName =  "Garg";
var fullName = firstName +  " " +  lastName;
console.log(fullName);