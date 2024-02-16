// Maps in Javascript

// map is an iterable
// store data in ordered fashion
// store key value pair(like object)
// duplicate keys are not allowed like objects

// different between maps and objects

// objects can only have string or symbol
// as key


// in maps you can use anything as key
// like number,string,array
// object literal
// key-->string
// key-->symbol
// const person = {
//           firstName : "Tarun",
//           age: 7,
//           1:"one"
// }
// console.log(person.firstName);
// console.log(person['firstName']);
// console.log(person[1]);
// for(let key in person){
//           console.log(typeof key);
// }

// key value pair
const person  =new Map();
// person.set('firstName',"Tarun");
// person.set('age',7);
// person.set(1,'one');
person.set([1,2,3]),"onetwothree";
person.set({name:"Tarun"},"Garg")
// console.log(person);
// console.log(person.get("firstName"));
// console.log(person.get(1));
// console.log(person.keys());
console.log(person.get());
// for(let key of person.keys()){
// console.log(key,typeof key);
// }

// for(let [key,value] of person){
//           // console.log(Array.isArray(key));
//           console.log(key,value);
// }

// const person  =new Map([['firstName','Tarun'],['age',25]]);
// console.log(person);
const person1 = {
          id:1,
          firstName:"Tarun"
}
const person2 = {
          id:2,
          firstName:"Mohit"
}
const Userinfo  = new Map();
Userinfo.set(person1,{age:24,gender:"male"});
Userinfo.set(person2,{age:24,gender:"male"});
console.log(Userinfo);
console.log(person1.id);
console.log(Userinfo.get(person1).gender);
console.log(Userinfo.get(person2).gender);
// console.log(person1.id;);