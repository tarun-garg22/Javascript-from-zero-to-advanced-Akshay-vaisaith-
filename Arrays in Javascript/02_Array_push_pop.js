// push pop operator

// array shift unshit

let fruit = ["apple","graphes","guava"];
// push
// array will changed the orginal array
fruit.push("pineapple")
// console.log(fruit);
let newfruit = fruit.pop()
console.log(newfruit);
console.log(fruit)

//  unshift
fruit.unshift("banana","dragonfruit");
console.log(fruit);

// shift
let shiftFruit = fruit.shift()
console.log(shiftFruit);

// push pop is faster than shift unshift

