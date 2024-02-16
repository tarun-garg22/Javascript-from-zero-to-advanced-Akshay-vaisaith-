// Cloning array
// How to clone array
// how to concetenate array

let array1 = ['item1','item2','item3'];
// let array2 =['item1','item2','item3'];
// let array2  = array1.slice(0)
// let array3 = [].concat(array1,array2)


// new way
// spread operator
let onemorearray = [1,2,3,4,5]
let array2 = [...array1,...onemorearray]
// let array2   = [...array1,"item3","item4"]
// let array2   = [].concat(array1,"item3","item4")
// let array2  = array1.slice(0).concat("item4","item5")

array1.push("item4")
console.log(array1===array2);
console.log(array1);
console.log(array2);

// slice ki performance sabse tez hoti hai

