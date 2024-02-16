// function returning function

function myfunc() {
  return function hello() {
    return "hello world";
  };
}
const ans = myfunc();
const ans1 = ans();
console.log(ans1);
