// callback hell to flat code

const heading1 = document.querySelector(".heading-1");
const heading2 = document.querySelector(".heading-2");
const heading3 = document.querySelector(".heading-3");
const heading4 = document.querySelector(".heading-4");
const heading5 = document.querySelector(".heading-5");
const heading6 = document.querySelector(".heading-6");
const heading7 = document.querySelector(".heading-7");

function changeText(element, text, color, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.textContent = text;
        element.style.color = color;
        resolve();
      } else {
        reject("heading is not found");
      }
    }, time);
  });
}

changeText(heading1, "one", "violet", 1000)
  .then(() => {
    return changeText(heading2, "two", "purple", 1000);
  })
  .then(() => {
    return changeText(heading3, "three", "red", 1000);
  })
  .then(() => {
    return changeText(heading4, "four", "green", 1000);
  })
  .then(() => {
    return changeText(heading5, "five", "pink", 1000);
  })
  .then(() => {
    return changeText(heading6, "six", "cyan", 1000);
  })
  .then(() => {
    return changeText(heading7, "seven", "blue", 1000);
  })
  .catch((error) => {
    alert(error);
  });
