// Reduce method 

const numbers = [6,7,8,9];

// aim : sum of all the numbers

const sum  =numbers.reduce((accumulator,currentvalue)=>{
          return accumulator + currentvalue
},0)
console.log(sum);

// accumulator , currentValue , return
// 6             7              13
// 13            8              21
// 21            9              30

// let myString  = "Welcome to sunwell solutions";

// const mynewString = myString.split("").reduce((accumulator,currentvalue)=>currentvalue+accumulator);
// console.log(mynewString)

// const myString1  =myString.split("");
// console.log(myString1);

const userCarts = [
          {productId : 1,prodcutName: "mobile",price:12000},
          {productId : 2,prodcutName: "laptop",price:23000},
          {productId : 3,prodcutName: "tv",price:20000},
]

const usersprices =  userCarts.reduce((totalprice,currentPrice)=>{
         return  totalprice+currentPrice.price
},0)
console.log(usersprices);

// for of loop
// let totalprice = 0;
// for(let userCart of userCarts){
//          totalprice = totalprice+ userCart.price
// }
// console.log(totalprice);