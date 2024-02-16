// find method

const myArray = ["Hello","cat","dog","lion"];
// function islength(string){
//           return string.length ===3
// }
// const ans = myArray.find(islength)
// console.log();

const users = [
          {userid:1,userName:"Tarun"},
          {userid:2,userName:"Shivkant"},
          {userid:3,userName:"Shivam"},
          {userid:4,userName:"Mohit"},

]
const myUser = users.find(user=>
          user.userid ===3
)
console.log(myUser);