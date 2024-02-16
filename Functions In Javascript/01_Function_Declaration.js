// Function Declaration

// console.log("happy birthaday to you");
// function singHappy(){
//           console.log("happy birthaday to you");
// }
// singHappy()

// function twoplusfour(){
//           console.log(2+4);
// }
// function twoplusfour(){
//           return 2+4
// }

// const returnedValue = towplusfour()
function sumtwonumber(num1,num2){
          return num1+num2
}
const returnedValue = sumtwonumber(1,5);
// console.log(returnedValue)
// NaN
// console.log(undefined + undefined);
// NaN
// console.log(undefined + NaN);

// call , invoke ,run karna they all have same meaning
// dry==> don't repeat youself

// odd or even
// input : 1 number
// output: true/false
// function isEven(number){
         
//           return  number % 2 === 0
// }
// const user = +prompt('Enter the Number');
// console.log(isEven(user))


// function
// input : string
// output: firstCharacter

// function firstchar(newString){
//          return newString[0]
// }
// console.log(firstchar("Tarun"))

// function 
// input : array  , target(number)
// output: index of target if target present in array
const myArray = [1,2,3,4,5,6]
const target = +prompt("Enter the target")
function findTarget(myArray,target){
          for(let i=0;i<=myArray.length-1;i++ ){
                    if(myArray[i]===target){
                              return i
                    }
                   
          } return -1
}
const targetFound = findTarget(myArray,target)
console.log(targetFound)