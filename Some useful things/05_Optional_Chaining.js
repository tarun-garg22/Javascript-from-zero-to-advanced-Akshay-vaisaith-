// optional chaining

const User = {
          firstName : "Tarun",
          address: {houseNumber:'1234'}
}

console.log(User.firstName);
console.log(User.address?.houseNumber);