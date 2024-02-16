// Destructuring in Objects
let  band = {
          bandname : "ledZepllin",
          famousSong: 'stairway to heaven',
          year:1968,
          anotherFamousSong:'kashmir'
};
// const var1 = band.bandname;
// const var2 = band.famousSong;
// console.log(var1,var2);

// band.var1 = "amarband"
// console.log(band);

let {bandname:var1,famousSong:var2,...restprops} = band;
console.log(var1);
console.log(restprops);