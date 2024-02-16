// Intro to Events
// click


// event add karne ke tin tarike hai

const button = document.querySelector(".btn-headline");
// console.dir(button);
// button.onclick = function(){
//           console.log("you clicked me");
// }

// method --> add Eventlistener
// function clickme(){
//           console.log("you clicked me");
// }
button.addEventListener("click",()=>{
          console.log("you clicked me");
});