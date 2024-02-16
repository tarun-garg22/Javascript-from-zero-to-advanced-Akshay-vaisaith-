// lexical environment,scope chain

const lastName = "Garg";

function printName() {
  const firstName = "Tarun";
  function myfunc() {
    console.log(firstName);
    console.log(lastName);
  }
  return myfunc;
}
const my_ans = printName();
console.log(my_ans());

