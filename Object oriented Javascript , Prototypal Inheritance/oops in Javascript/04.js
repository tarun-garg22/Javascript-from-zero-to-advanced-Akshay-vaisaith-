const obj1 = {
          key1: "value1",
          key2:"value2"
}
// __proto__
// official ecmapscript documantation
// __proto__ , [[prototype]]

// prototpye
// const obj2 = {}
obj2  =Object.create(obj1)
// there is one more way to create empty object
          obj2.key3= "value3",
         obj2.key4="value4",
         obj2.key2 = "value5"

console.log(obj2);
console.log(obj2.__proto__);

// this is happening
