// Arrow function and this

const user1  ={
          firstName : "Tarun",
          age : 25,
          about:()=>{
                    console.log(this);
                    console.log(this.firstName,this.age);
          }
}
user1.about.call(user1)
user1.about()