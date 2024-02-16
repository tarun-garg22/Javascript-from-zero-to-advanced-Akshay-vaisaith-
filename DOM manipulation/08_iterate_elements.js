// loop
// get multiple elements using getElements by className
// get multiple elements using querySelectorAll
// Array like object --> indexing, length property hoti hai
// Html collection
// let navItems = document.getElementsByTagName("a");
// console.log(navItems);
// we can't use forEach method to iterate through HTMLCollection
// simple for loop
// for of loop
// forEach

// simple for loop
// for(let i=0;i<navItems.length;i++){
//           // console.log(navItems[i]);
//           const navItem  = navItems[i];
//           navItem.style.color = "green";
//           navItem.style.backgroundColor = "white";
//           navItem.style.fontWeight = "bold"

// }

// for of loop
// for(let navItem of navItems){
//           // console.log(navItem);
//           navItem.style.color = "green";
//           navItem.style.backgroundColor = "white";
//           navItem.style.fontWeight = "bold"
// }
// HTML collection change into array
// navItems = Array.from(navItems)
// console.log(Array.isArray(navItems))
// forEach
// gives me error
// navItems.forEach((navItem)=>{
//           navItem.style.color = "green";
//           navItem.style.backgroundColor = "white";
//           navItem.style.fontWeight = "bold"
// })
// console.log(navItems[2]);
// console.log(Array.isArray(navItems));

let navItems = document.querySelectorAll("a");
console.log(navItems);
// we can use all loops
// simple for loop
// for of loop
// forEach

// simple for loop
// for(let i=0;i<navItems.length;i++){
//           // console.log(navItems[i]);
//           const navItem  = navItems[i];
//           navItem.style.color = "green";
//           navItem.style.backgroundColor = "white";
//           navItem.style.fontWeight = "bold"

// }

// for of loop
// for(let navItem of navItems){
//           // console.log(navItem);
//           navItem.style.color = "green";
//           navItem.style.backgroundColor = "white";
//           navItem.style.fontWeight = "bold"
// }

// forEach loop
navItems.forEach((navItem)=>{
          navItem.style.color = "green";
          navItem.style.backgroundColor = "white";
          navItem.style.fontWeight = "bold"
})
navItems = Array.from(navItems)
console.log(Array.isArray(navItems))
// console.log(navItems[1]);