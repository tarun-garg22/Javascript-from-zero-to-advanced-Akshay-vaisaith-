// Dot versus bracket notation

const key = 'email';
          const person = {
                    name:"Tarun Garg",
                    age: 25,
                    "person hobbies" : ["guitar","sleeping","listening music"],
          }
          console.log(person["person hobbies"]);
// compute the key
person[key]='tarungarg@gmail.com';
console.log(person);
