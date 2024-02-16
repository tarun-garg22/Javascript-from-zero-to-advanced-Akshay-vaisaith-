// closures example3

function myfunc() {
  let counter = 0;
  return function () {
    if (counter === 0) {
      console.log("hi you called me");
      counter++;
    } else {
      console.log("mai ek baar call ho chuka hu");
    }
  };
}

const myans = myfunc();
myans();
myans();
const myans2 = myfunc();
myans2();
