// xhr(XML http request)
const url  = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// console.log(xhr);
// step1
// yeah kaam asynchronously hoga
// xhr.open("GET",url)
// xhr.onreadystatechange  = function(){
//           // console.log(xhr)
//           // console.log(xhr.readyState)
//           if(xhr.readyState===4){
//                     // console.log(xhr.readyState);
//                     // console.log(xhr);
//                     // console.log(xhr.response);
//                     // console.log(typeof xhr.response);
//                   const response  = xhr.response;
//                   const data  = JSON.parse(response);
//                   console.log(data);


//           }

// }

// xhr.send()

// onload function

xhr.open("GET",url);
xhr.onload= function(){
          // console.log(xhr.readyState);
          const response = xhr.response
          const data = JSON.parse(response);
          console.log(data);
}

xhr.send()