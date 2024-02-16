// Sets(it is iterable)
// store data
// sets also have its own methods
// no index based access
// Order is not guarented
// uinque items only (no duplicates allowed)

// const numbers = new Set([1,2,3]);
// const numbers = new Set("abc");



// console.log(numbers);
// undefined
// console.log(numbers[0]);

const numbers = new Set();
// numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
numbers.add("items");
numbers.add(["item1","item2"]);
numbers.add(["item1","item2"]);
if(numbers.has(1)){
          console.log("1 is present");
}else{
          console.log("not found");
}

console.log(numbers);


for(let number of numbers){
          console.log(number);
}

const newArrays =  [1,2,3,4,4,5,6,7,8];
const uniqueElements  = new Set(newArrays);
// undefined
console.log(uniqueElements);

let length = 0;
for(let uniqueElement of uniqueElements){
          length++
}
console.log(length);