// Do while loop

let i =0;

do{
          console.log("value of i is",i);
          i++
}while(i<=9)

console.log(`value of i is a ${i}`);

// reverse in string
let givenString = "Tarun garg";

//           let newString = " ";
//           for(let i=givenString.length-1;i>=0;i--){
//                     newString  = newString+givenString[i]
                   
//           }

function reversestring(givenString){
var new_string = " ";
for(let i=givenString.length-1;i>=0;i--){
          new_string += givenString[i]
}
return new_string
}
const mystring  = reversestring("Tarun garg");
console.log(mystring);
// console.log(newString);

let finalString = givenString.split("").reverse().join("")
console.log(finalString)

