// keypress and mouseoverevent

// keypress Event
// mouseover Event

// const body = document.body;
// console.log(body);
// body.addEventListener("keypress", (e) => {
//   console.log(e.key);
// });

// mouse over event

const mainbutton  = document.querySelector(".btn-headline");
// console.log(mainbutton);
mainbutton.addEventListener("mouseover",()=>{
          console.log("mouseover event occur")
})
mainbutton.addEventListener("mouseleave",()=>{
          console.log("mouseover event occurs again")
})
