// Create Elements

// document.createElement()
// append
// prepend
// remove
// const newTodoItem = document.createElement("li");
// const newTodoTextNode = document.createTextNode("Teach Students");
// const todoList = document.querySelector(".todo1")
// newTodoItem.append(newTodoTextNode);
// todoList.append(newTodoItem);
// console.log(newTodoItem);

// newTodoItem.textContent = "Teach Students";
// todoList.append(newTodoItem)
// todoList.appendChild(newTodoItem)

// todoList.prepend(newTodoItem)

// const todo1 = document.querySelector('.todo1 li');
//  todo1.remove();
// console.log(todo1);


// before 
// after
const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teach Students";
const todoList = document.querySelector(".todo1")
// todoList.before(newTodoItem)
todoList.after(newTodoItem)


