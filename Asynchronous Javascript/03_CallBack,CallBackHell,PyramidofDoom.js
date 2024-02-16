// CallBack ,CallBackHell , Pyramid of Doom

// asynchronous programming
const heading1 = document.querySelector(".heading-1");
const heading2 = document.querySelector(".heading-2");

setTimeout(() => {
  heading1.textContent = "Heading1";
  heading1.style.color = "violet";
  setTimeout(() => {
          heading2.textContent = "Heading2";
          heading2.style.color = "purple";
        }, 1000);
}, 1000);

