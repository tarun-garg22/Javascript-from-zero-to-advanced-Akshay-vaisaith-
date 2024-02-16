// Every method

const numbers =[ 2,4,6,8,10];

const ans = numbers.every((number)=>{
          return number%2===0
})

// callback function --> true/false (boolean)
// every method --> true/false (boolean)
// console.log(ans);

const products = [
          {producid:1,productName:"pi",price:300},
          {producid:2,productName:"p2",price:3000},
          {producid:3,productName:"p3",price:450},
          {producid:4,productName:"p4",price:600}
]
const myValue = products.every((cartitem)=>{return cartitem.price>=300});
console.log(myValue);

