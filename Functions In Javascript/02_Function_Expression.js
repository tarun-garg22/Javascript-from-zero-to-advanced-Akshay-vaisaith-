// Function Expression
// anormous function --> kuch nahi hai

// console.log("happy birthday to you");
const singHappy = function(){
          console.log("happy birthaday to you");
}
singHappy()

//  const towplusfour = function (){
//           console.log(2+4);
// }
// const towplusfour= function(){
//           return 2+4
// }

// const returnedValue = towplusfour()
const sumtwonumber = function(num1,num2){
          return num1+num2
}
const returnedValue = sumtwonumber(1,5);
// console.log(returnedValue)




// odd or even
// input : 1 number
// output: true/false
// const isEven = function (number){
         
//           return  number % 2 === 0
// }
// const user = +prompt('Enter the Number');
// console.log(isEven(user))


// function
// input : string
// output: firstCharacter

// const firstchar = function(newString){
//          return newString[0]
// }
// console.log(firstchar("Tarun"))

// function 
// input : array  , target(number)
// output: index of target it target present in array
const myArray = [1,2,3,4,5,6]
const target = +prompt("Enter the target")
const findTarget = function(myArray,target){
          for(let i=0;i<=myArray.length-1;i++ ){
                    if(myArray[i]===target){
                              return i
                    }
                   
          } return -1
}
const targetFound = findTarget(myArray,target)
console.log(targetFound)