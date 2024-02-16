// promises
console.log("script start");
const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

const friedRicepromise = new Promise((resolve, reject) => {
  if (
    bucket.includes("vegetables") &&
    bucket.includes("salt") &&
    bucket.includes("rice")
  ) {
    resolve({ value: "friedrice" });
  } else {
    reject(new Error("couldn't make it"));
  }
});
// produce

// consume
// how to consume
// microtask queue
friedRicepromise
  .then(
    // jab promise resolve hoga
    (myfriedRice) => {
      console.log("lets eat", myfriedRice);
    }
    // jab promise reject hoga
  )
  .catch((error) => {
    console.log(error);
  });

//   callback queue
setTimeout(()=>{
          console.log(Math.random());
},1000)
for(let i=0;i<100;i++){
          console.log(Math.random()*255);
}

console.log("script end");