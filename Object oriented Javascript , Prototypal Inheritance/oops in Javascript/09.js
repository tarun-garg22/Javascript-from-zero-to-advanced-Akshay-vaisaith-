// constructor function
function CreateUser(firstName, lastName, email, age, address) {
          this.firstName = firstName;
          this.lastName = lastName;
          this.email = email;
          this.age = age;
          this.address = address
        }
        // console.log(CreateUser.prototype);
        CreateUser.prototype.about = function () {
          return `${this.firstName} is ${this.age} years old `;
        };
        CreateUser.prototype.is18 = function () {
          return this.age > 18;
        };
        CreateUser.prototype.issing = function () {
          return `haaaaaaaaaa`;
        };
        
        const user1 = new CreateUser("Tarun", "Garg", "tarun@gmail.com", 25, "Agra");
        const user2 = new CreateUser("Tarun", "Garg", "tarun@gmail.com", 25, "Agra");
        const user3 = new CreateUser("Tarun", "Garg", "tarun@gmail.com", 25, "Agra");
        
for(let key in user1){
          // console.log(key);
          if(user1.hasOwnProperty(key)){
                    console.log(key);
          }
}