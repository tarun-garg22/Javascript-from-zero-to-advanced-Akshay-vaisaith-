// Some old methods to support poor IE
// appendChild
// insertBefore
// replaceChild
// removeChild

const todo1 = document.querySelector(".todo1");
const newTodo = document.createElement("li");
newTodo.textContent = "new Todo";
// todo1.appendChild(newTodo);

const referenceTodo = document.querySelector(".first-todo");
// todo1.insertBefore(newTodo,referenceTodo)

// replacechild
todo1.replaceChild(newTodo,referenceTodo)
// remove child
todo1.removeChild(newTodo)