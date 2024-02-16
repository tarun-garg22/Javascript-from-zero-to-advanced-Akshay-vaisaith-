// Event Bubbling
// console.log("hello world");

const Grandparent = document.querySelector(".grandparent")
const Parent = document.querySelector(".parent")
const Child = document.querySelector(".child")
const body = document.body
Child.addEventListener("click",()=>{
        console.log("you clicked on child");  
})

Parent.addEventListener("click",()=>{
          console.log("you clicked on parent");  
  })
  
  Grandparent.addEventListener("click",()=>{
          console.log("you clicked on grandparent");  
  })
  
  body.addEventListener("click",()=>{
          console.log("you clicked on body");  
  })
  