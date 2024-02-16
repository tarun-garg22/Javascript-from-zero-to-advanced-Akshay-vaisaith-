// Some method

// kya ek bhi number esa hai jo even hai
// true
// const numbers = [1,2,3,4,5,7,8]
// const ans  = numbers.some((number)=>{return number%2===0})
// console.log(ans);

const products = [
          {producid:1,productName:"p1",price:300},
          {producid:2,productName:"p2",price:3000},
          {producid:3,productName:"p3",price:450},
          {producid:4,productName:"p4",price:600}
]
const found_product = products.some((product)=>{
          return product.price>=3000
})
console.log(found_product);