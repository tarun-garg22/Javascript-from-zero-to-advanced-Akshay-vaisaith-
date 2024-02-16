let numbers = new Array(1,2,3);
console.log(Array.prototype);
console.log(Array.isArray(Array.prototype));

// console.log(Array.prototype);
// prototype
// prtotype --> functions

// let numbers = [1,2,3];
// console.log(Object.getPrototypeOf(numbers));

function hello(){
          console.log("hello");
}
// prototype
// console.log(hello.prototype);
hello.prototype = []
hello.prototype.push("1")
console.log(hello.prototype);