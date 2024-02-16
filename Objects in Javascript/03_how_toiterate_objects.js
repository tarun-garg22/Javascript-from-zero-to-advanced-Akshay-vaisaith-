// how to iterate objects
const person = {
          name :"Tarun garg",
          age:25,
          'person hobbies':["guitar","sleeping","music"]

}

// for in loop
// Object.keys

for(let key in person){
          // console.log(key);
          // console.log(person[key]);
          console.log(`${key}: ${person[key]}`);
          console.log(key, ":",person[key]);

}

console.log(typeof (Object.keys(person)));