// xhr and error handling

const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

xhr.open("GET", URL);
xhr.onload = function () {
  // const response  = xhr.response;
  // const data =  JSON.parse(response);
  // console.log(data);
  if (xhr.status >= 200 && xhr.status < 300) {
    const data = JSON.parse(xhr.response);
    // console.log(data);
    const id = data[3].id;
//     console.log(id);
const xhr2 = new XMLHttpRequest();
const url2 = URL + "/" + id;
xhr2.open("GET",url2);
xhr2.onload = function(){
          if(xhr2.status >= 200 &&  xhr2.status <300){
                    const data2 = JSON.parse(xhr2.response);
                    console.log(data2);
          }
}
xhr2.send();
  } else {
    console.log("Something went wrong");
  }
};

xhr.onerror = () => {
  console.log("network error");
};
xhr.send();
