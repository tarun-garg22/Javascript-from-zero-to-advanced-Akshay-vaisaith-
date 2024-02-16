// get multiple elements using getElements by className
// get multiple elements using querySelectorAll
// Array like object hai array nahi hai
// Html collection
// const navItems = document.getElementsByClassName("nav-item");
// console.log(navItems[2]);
// console.log(Array.isArray(navItems));


const navItems = document.querySelectorAll(".nav-item");
console.log(navItems[1]);