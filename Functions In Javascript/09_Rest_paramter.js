// Rest perameter
// function myfunc(a,b,c,...d){
//           console.log(`a is ${a}`);
//           console.log(`b is ${b}`);
//           console.log(`c is ${c}`);
//           // they give array
//           console.log(`d is`, d);


// }
// myfunc(3,4,5,6,7,8)

function addall(...numbers){
          // console.log(numbers);
          // console.log(Array.isArray(numbers));
          let total =0;
          for(let i=0;i<numbers.length;i++){
                    total = numbers[i]+total
                
          }    return total
}
console.log(addall(6,7,8,9,3,4,5))