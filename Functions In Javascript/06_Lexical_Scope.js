// Lexical scope
const myvar = "value1"
function myapp(){
         
     function myfunc(){
          // const myvar = "value59",
          const myfunc2 = ()=>{
                    console.log("inside myfunc",myvar)
          }
        myfunc2()
     } myfunc()
  
}
console.log(myvar);
myapp()