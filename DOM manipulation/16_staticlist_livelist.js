// static  list live list

// querySelectoAll hamein static list degi
// getElementsBySomething hamein live list degi

// const li = document.querySelectorAll(".todo1 li");
const ul = document.querySelector(".todo1");
const li = ul.getElementsByTagName("li")
const sixthli = document.createElement("li");
sixthli.textContent = "item6";
// const ul  =document.querySelector(".todo1");
ul.append(sixthli)
console.log(li);