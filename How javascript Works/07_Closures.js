// closures
// closure : 30-40%
// analyse : 70-80%
// real example: 100%

// function can return functions

// function outerfunction(){
//           function innerfuntion(){
//           console.log("hello world");
//           }
//           return innerfuntion ;
// }
// const ans  =outerfunction();
// ans();

function printfullName(firstName,lastName){
          const printName = function(){
                    console.log(firstName,lastName);
          }
          return printName
}

const ans = printfullName("Tarun","Garg");
ans();