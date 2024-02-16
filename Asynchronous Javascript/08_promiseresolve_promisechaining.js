// Promise.resolve
// Promise.chaining
// const myPromise = Promise.resolve(5);
// myPromise.then(value=>{
//          console.log(value); 
// })

// then()
// then method hamesha promise return karta hai

function mypromise(){
          return new Promise((resolve, reject) => {
                    resolve("foo");   
          })
}
mypromise().then((value)=>{
          console.log(value);
          value += "bar";
          // return value
          // return Promise.resolve(value)
          return Promise.resolve(value)


})
.then((value)=>{
          console.log(value);
          value+="bar2";
          return value
})
.then((value)=>{
          console.log(value);;
})