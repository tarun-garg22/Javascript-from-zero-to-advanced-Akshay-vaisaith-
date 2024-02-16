// this keyword inside event listener 

const btn = document.querySelector(".btn-headline");

// arrow function ke case mai this ki value window object hoti hai
btn.addEventListener("click",function(){
          console.log("you clicked me");
          console.log("value of this");
          console.log(this);
})
