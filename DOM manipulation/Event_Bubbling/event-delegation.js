// event delegation

const Grandparent = document.querySelector(".grandparent");

// Grandparent.addEventListener("click",()=>{
//           console.log("you clicked grandparent");
// })

// Event object ka use karenge event delegation ke liye

Grandparent.addEventListener("click",(e)=>{
          console.log(e.target.textContent);
})