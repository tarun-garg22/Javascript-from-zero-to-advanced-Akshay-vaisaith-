// Fetch Api
const URL = "https://jsonplaceholder.typicode.com/posts";

// const my_Value = fetch(URL);
// console.log(my_Value);

// get method
// fetch(URL)
// .then((response)=>{
//           // console.log(response.json());
//           if(response.ok){
//           return response.json()
//           }else{
//                     throw new Error("Something went wrong")
//           }
          
// })
// .then((data)=>{
//           console.log(data);
// })
// .catch((error)=>{
//           console.log("inside catch");
//           console.log(error);
// })

fetch(URL,{
          method: 'POST',
          body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
.then((response)=>{
          // console.log(response.json());
          if(response.ok){
          return response.json()
          }else{
                    throw new Error("Something went wrong")
          }
          
})
.then((data)=>{
          console.log(data);
})
.catch((error)=>{
          console.log("inside catch");
          console.log(error);
})