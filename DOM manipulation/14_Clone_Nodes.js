// CloneNodes
const ul = document.querySelector(".todo1");
const li = document.createElement("li");
li.textContent=  "New Todo";
const li2 = li.cloneNode(true)
ul.append(li);
ul.prepend(li2)