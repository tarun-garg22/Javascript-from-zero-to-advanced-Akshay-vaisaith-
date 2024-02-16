// Event Object

// const firstButton = document.querySelector("#one");


// firstButton.addEventListener("click",function(e){
//           console.log(this);
// })

// jab bhi mai kisi bhi element pe event listener add hoga
// js engine -- line by line excute karta hai
// browser -- js engine + extra features
// browser -- js engine + web api

// jab browser ko pata chala ki user ne event perform kiya
// jo hm listen kar rahe hai
// browser -- 2
// 1.) callback function hai woh js engine ko dega ....
// 2.) callback function ke sath browser jo event hua hai uski information bhi dega
// yeah info hamein ek object ke form mai milegi

// function hello(a){
//           console.log(a);
// }

// hello({firstkey:"value1",secondekey:"value2"})


const allbuttons =  document.querySelectorAll(".my-buttons button");

allbuttons.forEach((button)=>{
          button.addEventListener("click",(e)=>{
                    // console.log(e.target.textContent);
                    console.log(e.currentTarget.textContent);
          })
})