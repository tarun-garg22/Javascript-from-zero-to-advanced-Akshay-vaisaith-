// important array methods

const numbers = [1,2,3,4,5];
// will not give new Array
// function myfunc(number,index){
// console.log("index is ",index);
// console.log(number*2);
// }
// for(let i=0;i<numbers.length;i++){
//          myfunc(numbers[i],i)
// }

// numbers.foreach(myfunc);
// numbers.forEach((number,index)=>{
//           console.log(`index is ${index} and number is ${number*2}`);
// })
const users = [
          {firstname : "Tarun",age:25 },
          {firstname : "Mohit",age:26 }, 
          {firstname : "Garima",age:27 },
]
users.forEach((user)=>{console.log(user.firstname)})
for(let user of users){
console.log(user.firstname);
}