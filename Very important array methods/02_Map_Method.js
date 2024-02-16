// Map method 

// gives new array
// they always return value
const numbers = [5,6,7,56,7,8];
// function square(number){
//           return number*number
// }
// const squarenumber = numbers.map(square);

// console.log(squarenumber);

// const squarenumber = numbers.map((number,index)=>{
//           return `${number*number},${index}`
// })
// console.log(squarenumber);

const users = [
          {firstname : "Tarun",age:25 },
          {firstname : "Mohit",age:26 }, 
          {firstname : "Garima",age:27 },
]

const StoredNumber  = users.map((user)=>{
return user.firstname
})
console.log(StoredNumber);

