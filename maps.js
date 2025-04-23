
// // const fruits=new Map([
// //     ["apple",500],
// //     ["bananas",400],
// //     ["oranges",200]
// // ]);
// // console.log(fruits);



// //create a map
const fruits=new Map();
//set map values
fruits.set("apples",500);
fruits.set("bananas",300);
fruits.set("oranges",200);

fruits.set("bananas",400); // this is change the value 

console.log(fruits);// the set() method cam also be used to change existing Map values

// the get() method
// the get() method to gets the value of a key in map

console.log(fruits.get("apples"));

console.log(typeof fruits);



//JAVASCRIPT MAP METHOD

console.log(fruits.size);


console.log(fruits.delete("apples"));
console.log(fruits);

//the clear() method are use to clear all the element

// console.log(fruits.clear());
// console.log(fruits);


//Map.has()
fruits.has("apples");
fruits.delete("apples");
console.log(fruits.has("apples"));

// let text=" ";
// fruits.forEach(function(value,key) { //the forEAch() method invokes a callback for each key/value paor in a map

//     text+=key+'='+value;
// })

// console.log(text);


//Map.entries()

// let text="";
// for(const x of fruits.entries()){
//     text+=x;
// }
// console.log(text);
//map.keys()


// let text="";
// for(const x of fruits.keys()){ //this give the only key 
//     text+=x;
// }
// console.log(text);

// let text="";
// for(const x of fruits.values()){ //this give only the value
//     text+=x;
// }
// console.log(text);

let text=0;
for(const x of fruits.values()){ //this give only the value
    text+=x;
}
console.log(text);
