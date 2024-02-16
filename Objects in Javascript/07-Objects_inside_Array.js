// Objects inside array

// very useful in real world applications

const users = [
          {userid:1,firstName:"tarun",gender:"male"},
          {userid:2,firstName:"mohit",gender:"male"},
          {userid:3,firstName:"nitish",gender:"male"},
]

for(let user of users){
          console.log(user.firstName);
}