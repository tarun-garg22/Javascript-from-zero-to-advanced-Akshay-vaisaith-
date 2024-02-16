// Demo project

const main = document.querySelector('button');
const body =  document.body;
const currentColor  = document.querySelector(".CurrentColor")


 const randomcolorgenerator = function(){
          const red  = Math.floor(Math.random() * 256);
          const green  = Math.floor(Math.random() * 256)
          const blue  = Math.floor(Math.random() * 256)
          const randomColor = `rgb(${red}, ${green}, ${blue})`;
          return randomColor
}
main.addEventListener("click",()=>{
          const randomColor = randomcolorgenerator();
          console.log(randomColor)
          body.style.backgroundColor = randomColor;
          currentColor.textContent  =randomColor
})

