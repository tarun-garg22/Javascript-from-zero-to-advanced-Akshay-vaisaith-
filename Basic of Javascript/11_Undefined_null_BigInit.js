// Undefined
// null
// Biginit

// const mai undefined nahi kar sakte 
// gives me error
// const firstNames
let firstName ;
console.log(typeof firstName);
firstName = "Tarun";
console.log(typeof firstName, firstName);

// Null

let myVariable = null;
console.log(myVariable)
myVariable ="Tarun garg";
console.log(myVariable, typeof myVariable);
// Object
console.log(typeof null);

// BigInit
// let my_number  = 123;
let my_number1  = 5846734867458967546n;
let my_number2  = BigInt(45);
// BigInit only works with BigInit
let newnumber = my_number1 + my_number2
console.log(newnumber);
console.log(Number.MAX_SAFE_INTEGER);

