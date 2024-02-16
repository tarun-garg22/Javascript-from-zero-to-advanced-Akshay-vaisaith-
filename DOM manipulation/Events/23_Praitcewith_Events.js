// little pratice with click event


const buttons = document.querySelectorAll(".my-buttons button")
console.log(buttons.length)
for(let button of buttons){
          button.addEventListener("click",(e)=>{
          //          console.log(e.currentTarget)
          e.target.style.color = "yellow";
          e.target.style.backgroundColor = "pink"
          })
}