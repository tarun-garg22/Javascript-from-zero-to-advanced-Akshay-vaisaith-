// Nested Destructuring 

const users = [
          {userid:1,firstName:"tarun",gender:"male"},
          {userid:2,firstName:"mohit",gender:"male"},
          {userid:3,firstName:"nitish",gender:"male"},
]
const [user1,user2,user3] = users;
const [{firstName:userfirstname,userid},,{gender:user3gender}] = users
console.log(user1);
console.log(userfirstname);
console.log(user3gender);
console.log(userid);
