// closures example2

function myfunction(power){
          return function(number){
                    return number ** power
          }
}
const ans = myfunction(3);
const myans = ans(2);
console.log(myans);
