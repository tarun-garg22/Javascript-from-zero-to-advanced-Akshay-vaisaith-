// Block scope vs function scope


// let and const are block are block scope
// var is function scope
// Both firstname are different variable
// {
//           let firstname = "Tarun"
// }
// console.log(firstname);
// {
//           let firstname  = "garima"
// }
// console.log(firstname);
// {
//           var firstname  = "garima"
// }
// console.log(firstname);

// if(true){
//           let firstname = "tarun";
//           console.log(firstname);
// }
// console.log(firstname);
// function myapp(){
//           if(true){
//                     var firstname = "tarun";
//                     console.log(firstname);
//           }
//           if(true){
//                     console.log(firstname);
//           }
//           console.log(firstname);
// }
// myapp()

function myfunc(){
          console.log(myvar1);
          function myfunc2(){
                    var myvar1 = "Tarun garg"
          }
          myfunc2
}
myfunc()