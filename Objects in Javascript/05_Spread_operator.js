// Spread Operator in Javascript

const array1  = [1,2,3];
const array2 = [5,6,7];

const newArray = [...array1,...array2,78,89];
const newArray1 = [..."abc"];

// iterables means jinpe hm for loop laga sakte hai

const obj1 = {
          key1:"value1",
          key2:"value2",
          key1:'value3'
}
// baad wali key ki value ayegai aur key ki value same nahi ho sakti
const obj2 = {
          key1:"uniquevalues",
          key3:'value4',
          key4:"value5"
}
const newObject = {...obj1,...obj2};
const newObject1 = {...obj2,...obj1,key56:"valuehai"};
const newObject23 = {..."abc"}
const newObject233 = {...["abc"]}

console.log(newObject);
console.log(newObject1);
console.log(newObject23);
console.log(newObject233);





