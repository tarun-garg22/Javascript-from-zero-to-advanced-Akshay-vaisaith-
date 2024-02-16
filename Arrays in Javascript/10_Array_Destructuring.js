// Array destructuring
const myArray = ["value1", "value2", "value3"];

// let myVarible1 = myArray[0];
// let myVarible2 = myArray[1];
// console.log(`value of myVariable is ${myVariable1} and value of myVarible is ${myVarible2}`);

// let [myVarible1,myVarible2,myVarible3] = myArray
let [myVarible1, myVarible2, ...mynewArray] = myArray;
myVarible1 = "value changed";
console.log("value of myvarible1", myVarible1);
console.log("value of myvarible2", myVarible2);
// console.log("value of myvarible3",myVarible3);

console.log(mynewArray);
