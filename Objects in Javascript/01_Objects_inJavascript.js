// intro to objects
// arrays are good but not sufficient
// for real world data
// objects store key value pair
// objects don't have index

// how to create objects
const person = {
          name:"Tarun Garg",
          age: 25,
          hobbies : ["guitar","sleeping","listening music"],
          ['item1'] : ['item2'],
          "22":"tarun",
          true:"garg"
}
console.log(typeof person);
// how to access data for objects
// console.log(person.name);
console.log(person['name']);

console.log(person.age);
console.log(person.hobbies.length);

// how to add key valye pair to objects
// person.gender = "male";
person["gender"] = "male";

console.log(person);
console.log(typeof person.item1);
console.log(typeof person[22]);
console.log(typeof person.true)

