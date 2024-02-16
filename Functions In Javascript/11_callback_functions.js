// Callback functions



function myfunc2(name){
          console.log("inside my myfunc2");
          console.log(`your name is ${name}`);
}
function myfunc(Callback){
          console.log("hi calling the callback function");
          Callback("Tarun")        
}
myfunc(myfunc2)