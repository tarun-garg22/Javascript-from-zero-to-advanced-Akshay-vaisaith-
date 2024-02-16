// Add events on multiple events
// const button1 = document.querySelector("#one")


// button1.addEventListener("click",()=>{
// console.log("you clicked me");
// })

const allbuttons =  document.querySelectorAll(".my-buttons button");
// console.log(allbuttons);

// for(let i=0;i<allbuttons.length;i++){
//           allbuttons[i].addEventListener("click",function(){
//                     // console.log("you clicked me");
//                     console.log(this.textContent);
//           })
// }

// for(let button of allbuttons){
//           button.addEventListener("click",function(){
//                     console.log(button.textContent);
//           })
// }

allbuttons.forEach((button)=>{
          button.addEventListener("click",(e)=>{
                    console.log(button.textContent);
          })
})