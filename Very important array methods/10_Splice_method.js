// Splice method

// start , delete,insert

const myArray = ["item1","item2","item3","item4","item5"];
myArray.splice(1,1);
console.log(myArray);
// insert and delete
const deleted_item = myArray.splice(1,2,"value1","value2","value3");
console.log(myArray);
// Array hai jo item delete hue hai 
console.log(deleted_item);