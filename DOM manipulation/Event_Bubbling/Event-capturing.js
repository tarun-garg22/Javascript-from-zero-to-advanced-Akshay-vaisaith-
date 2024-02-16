// Event capturing

const Grandparent = document.querySelector(".grandparent");
const Parent = document.querySelector(".parent");
const Child = document.querySelector(".child");
const body = document.body;
// Capturing event
Child.addEventListener(
  "click",
  () => {
    console.log("you capture on child");
  },
  true
);

Parent.addEventListener(
  "click",
  () => {
    console.log("you capture on parent");
  },
  true
);

Grandparent.addEventListener(
  "click",
  () => {
    console.log("you capture on grandparent");
  },
  true
);

body.addEventListener(
  "click",
  () => {
    console.log("you capture on body");
  },
  true
);

//   not capturing event

Child.addEventListener(
  "click",
  () => {
    console.log("you click on child");
  },
  true
);

Parent.addEventListener(
  "click",
  () => {
    console.log("you click on parent");
  },
  true
);

Grandparent.addEventListener(
  "click",
  () => {
    console.log("you click on grandparent");
  },
  true
);

body.addEventListener(
  "click",
  () => {
    console.log("you click on body");
  },
  true
);
