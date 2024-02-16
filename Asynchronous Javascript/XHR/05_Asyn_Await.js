// async await


// fetch(URL)
// .then((response)=>{
//           return response.json()
// })
// .then((data)=>{
//           console.log(data);
// })

console.log("srcipt start");
const URL = "https://jsonplaceholder.typicode.com/posts";

const getpost =  async ()=>{
          // await check karega ki resolve ho raha hai yeah nahi
         const response =  await fetch(URL);
         if(!response.ok){
          throw  new Error("Somwthing went wrong")
         }else{
          const data  = await response.json()
          return data
         }
//          console.log(response);
}


// promise return karega
// const returned  = getpost();
// console.log(returned);

// getpost()
// const mydata = getpost();
// console.log(mydata);

getpost()
.then((mydata)=>{
console.log(mydata);
})
.catch((error)=>{
          console.log(error);
})


console.log("script end");