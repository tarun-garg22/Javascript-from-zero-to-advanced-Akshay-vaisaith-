// synchronous programming vs  asynchronous programming
// synchronous programming
// console.log("script start");

// for(let i=1; i<10000;i++){
//           console.log("inside for loop");
// }
// console.log("script end");

// setTimeout
// console.log("Script start");
// function hello(){
//           console.log("Hello World");
// }
// setTimeout(hello,1000);
// setTimeout(() => {
//     console.log("niside setTimeout");
// }, 1000);

// setTimeout(() => {
//   console.log("inside setTimeout");
// }, 0);
// for (let i = 0; i < 100; i++) {
//   console.log("...");
// }
// console.log("script end");

// clearTimeout()
console.log("Script start");
const id = setTimeout(() => {
     console.log("inside setTimeout");     
}, 1000);

for(let i=0; i < 100; i++){
          console.log("....");
}
// console.log("SetTimeout id id ",id);
console.log("clear timeout");
clearTimeout(id);

console.log("script end");