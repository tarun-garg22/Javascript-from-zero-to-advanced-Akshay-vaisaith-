// CallBack In general
// understand callBack
// function myfunc(){
//           console.log("going some task");
// }
// function myfunc2(){
//           console.log("function is doing task2");
// }
// myfunc()
// myfunc2()
// function myfunc3(){
//           console.log("function is doing task");
// }
function myfunc4(CallBack){
          console.log('function is doing another task');
          CallBack()
}
// myfunc4(myfunc3)


// myfunc4(()=>{
//           console.log("function is doing task");
// })

// function getTwoNumbers(number1,number2,callBack){
//           // console.log(number1,number2);
//           if(typeof number1 === "number" && typeof number2 === "number"){
//                     callBack(number1,number2)
//           }else{
//                     console.log("wrong data type")
//           }
          
// }
// getTwoNumbers(4,5)
// function addTwoNumbers(num1,num2){
//           console.log(num1+num2);
// }

// using two callbacks
function getTwoNumbers(number1,number2,onsuccess,onfailure){
          // console.log(number1,number2);
          if(typeof number1 === "number" && typeof number2 === "number"){
                    onsuccess(number1,number2)
          }else{
                    onfailure()
          }
          
}
// getTwoNumbers(5,6,addTwoNumbers)
const userinput1 = +prompt("Enter the number1")
const userinput2 = +prompt("Enter the number2")

getTwoNumbers(5,6,(num1,num2)=>{
          console.log(num1+num2);
},()=>{
          console.log("wrong data type");
          console.log("type correct");
})
