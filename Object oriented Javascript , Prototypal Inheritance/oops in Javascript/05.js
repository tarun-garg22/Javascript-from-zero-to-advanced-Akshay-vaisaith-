function hello(){
          console.log("hello world");
}

// javscript function ==> function + object
// console.log(hello.name);

// you can add your own property
hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);
// hello()
// name property ---> tells function name;

// function provides more usefull properties
//  console.log(hello.prototype);// {}
//  only functions provide prototype property
// const hellos = ['value1']
// if(hellos.prototype){
// console.log(`prototype is present`);
// }else{
//           console.log(`prototype is not present`)
// }

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.bcd = "bcd";
hello.prototype.sing = function(){
          return `lalalllaaa`
}
console.log(hello.prototype);
console.log(hello.prototype.sing());