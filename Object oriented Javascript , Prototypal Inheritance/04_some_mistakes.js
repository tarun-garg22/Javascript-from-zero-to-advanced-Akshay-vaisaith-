const user1 = {
  firstName: "Tarun",
  age: 8,
  about: function() {
    console.log(this.firstName, this.age);
  },
};
// user1.about()
// don't do this mistake
// undefined ayega
const myfunc = user1.about.bind(user1);

myfunc();
