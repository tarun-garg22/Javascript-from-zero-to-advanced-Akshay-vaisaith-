// set interval
// console.log("script start");
// setInterval(()=>{
//           console.log(Math.random());
// },1000)

// console.log("script end");

// console.log("script start");
// setInterval(()=>{
//           let total = 0;
//           for(let i =0;i<10000000;i++){
//           //          continue
//           total += i
//           }
//           console.log(total);
//           console.log(Math.random());
// },500)

// console.log("script end");

// little project with SetInterval
const button = document.querySelector("button")
const body = document.body;
const setIntervalid=  setInterval(()=>{
          const red = Math.floor(Math.random() * 255)
          const green = Math.floor(Math.random() * 255)
          const blue = Math.floor(Math.random() * 255)
          const rgb = `rgb(${red},${green},${blue})`;
          // console.log(rgb);
          body.style.background = rgb

},1000)
button.addEventListener("click",()=>{
          clearInterval(setIntervalid);
          button.textContent = body.style.background;
})
console.log(setIntervalid);