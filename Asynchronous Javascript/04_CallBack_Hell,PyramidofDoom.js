// CallBack ,CallBackHell , Pyramid of Doom

// asynchronous programming

const heading1 = document.querySelector(".heading-1");
const heading2 = document.querySelector(".heading-2");
const heading3 = document.querySelector(".heading-3");
const heading4 = document.querySelector(".heading-4");
const heading5 = document.querySelector(".heading-5");
const heading6 = document.querySelector(".heading-6");
const heading7 = document.querySelector(".heading-7");

// text  Delay  Color
// one   1s     violet
// Two   2s     purple
// Three  2s     red
// Four   1s     Pink
// Five   2s     green
// Six   3s     blue
// Seven  1s    brown

// callback hell
// setTimeout(() => {
//   heading1.textContent = "one";
//   heading1.style.color = "violet";
//   setTimeout(() => {
//     heading2.textContent = "two";
//     heading2.style.color = "purple";
//     setTimeout(() => {
//       heading3.textContent = "three";
//       heading3.style.color = "red";
//       setTimeout(() => {
//         heading4.textContent = "four";
//         heading4.style.color = "pink";
//         setTimeout(() => {
//           heading5.textContent = "five";
//           heading5.style.color = "green";
//           setTimeout(() => {
//             heading6.textContent = "six";
//             heading6.style.color = "blue";
//             setTimeout(() => {
//               heading7.textContent = "seven";
//               heading7.style.color = "brown";
//             }, 1000);
//           }, 3000);
//         }, 2000);
//       }, 1000);
//     }, 2000);
//   }, 2000);
// }, 1000);

// pyramid of Doom

function changeText(element, text, color, time, onsucess, onfailure) {
  setTimeout(() => {
    if (element) {
      element.textContent = text;
      element.style.color = color;
      if (onsucess) {
        onsucess();
      } else {
        if (onfailure) {
          onfailure();
        }
      }
    }
  }, time);
}

changeText(
  heading1,
  "one",
  "violet",
  1000,
  () => {
    changeText(heading2, "two", "purple", 1000, () => {
      changeText(heading3, "three", "red", 1000, () => {
        changeText(heading4, "four", "blue", 1000, () => {
          changeText(heading5, "five", "pink", 1000, () => {
            changeText(heading6, "six", "orange", 1000, () => {
              changeText(heading7, "seven", "cyan", 1000, () => {
                console.log("heading7 does not exit");
              });
              console.log("heading6 does not exit");
            });
            console.log("heading5 does not exit");
          });
          console.log("heading4 does not exit");
        });
        console.log("heading3 does not exit");
      });
      console.log("heading2 does not exit");
    });
  },
  () => {
    console.log("heading1 does not exit");
  }
);
