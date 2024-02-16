// Demo-project in event delegation

const todoform  = document.querySelector(".form-todo");
const formtodo  = document.querySelector(".form-todo input[type='text']");
const todolist = document.querySelector(".todo1")
console.log(formtodo);
todoform.addEventListener("submit",(e)=>{
          e.preventDefault();
          const newtodotext = formtodo.value;
          const newLi = document.createElement("li")
          newLi.innerHTML= `<span class="text">${newtodotext}</span>
          <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
          </div>`
          formtodo.value = ""
          todolist.append(newLi);
});
todolist.addEventListener("click",(e)=>{
// console.log(e.target);
// check if user clicked on done button
if(e.target.classList.contains("done")){
const lispan = e.target.parentNode.previousElementSibling;
lispan.style.color ="green"
}
if(e.target.classList.contains("remove")){
          const li = e.target.parentNode.parentNode
         li.remove()
          }
})