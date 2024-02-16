// function return promise
function ricepromise() {
  const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];
  return new Promise((resolve, reject) => {
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
}

ricepromise().then(
    // jab promise resolve hoga
    (myfriedRice) => {
      console.log("lets eat", myfriedRice);
    }
    // jab promise reject hoga
  )
  .catch((error) => {
    console.log(error);
  });
