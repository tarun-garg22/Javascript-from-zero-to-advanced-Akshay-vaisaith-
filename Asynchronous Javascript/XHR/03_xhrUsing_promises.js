// xhr using promises

const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method,url){
          return new Promise((resolve,reject)=>{
                 const xhr = new XMLHttpRequest();
                 xhr.open(method,url) ;
                 xhr.onload = function(){
                    if(xhr.status >=200 && xhr.status < 300){
                              resolve(xhr.response)
                    }else{
                              reject("Something went Wrong")
                    }
                 } 
                 xhr.onerror = function(){
                    reject(new Error("Something went wrong"))
                 } 
                 xhr.send()
          })
}

sendRequest("GET",URL)
.then((response)=>{
//       console.log(response);    
const data  = JSON.parse(response);
// console.log(data);
return data
})
.then((data)=>{
          // console.log(data);
          const id  = data[3].id;
          // console.log(id);
          return id
})
.then((id)=>{
          // console.log(id);
          const url2 = URL + '/' + id
          return sendRequest("GET",url2)
})
.then((newresponse)=>{
//          console.log(newresponse); 
const data2 = JSON.parse(newresponse)
console.log(data2);
})
.catch((error)=>{
          console.log(error);
})