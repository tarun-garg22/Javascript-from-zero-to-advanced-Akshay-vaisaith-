// How to get the dimensions of element
// height width
const todosection = document.querySelector(".todo-section");
const info  = todosection.getBoundingClientRect()
console.log(info);