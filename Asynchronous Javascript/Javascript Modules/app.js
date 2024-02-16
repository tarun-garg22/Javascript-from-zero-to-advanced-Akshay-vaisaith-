// console.log("hello world");

import { firstname as fname } from "./utlis/fname.js";
import a from "./utlis/age.js";
import { Person } from "./utlis/person.js";
// console.log(fname,age);
console.log(fname,a);
const person = new Person("John","Doe",22);
// console.log(person);
person.info()