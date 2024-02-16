// filter method

const numbers = [6,7,8,9,3,4,5];
// const isEven = (number)=>{
//           return number%2 ===0
// }
const newNumbers = (numbers.filter(function(number){
          return number%2===0
}))
console.log(newNumbers)