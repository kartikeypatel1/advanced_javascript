
// // const fruits=new Map([
// //     ["apple",500],
// //     ["bananas",400],
// //     ["oranges",200]
// // ]);
// // console.log(fruits);



// //create a map
// const fruits=new Map();
// //set map values
// fruits.set("apples",500);
// fruits.set("bananas",300);
// fruits.set("oranges",200);

// fruits.set("bananas",400); // this is change the value 

// console.log(fruits);// the set() method cam also be used to change existing Map values

// // the get() method
// // the get() method to gets the value of a key in map

// console.log(fruits.get("apples"));

// console.log(typeof fruits);



//JAVASCRIPT MAP METHOD

// console.log(fruits.size);


// console.log(fruits.delete("apples"));
// console.log(fruits);

// //the clear() method are use to clear all the element

// // console.log(fruits.clear());
// // console.log(fruits);


// //Map.has()
// fruits.has("apples");
// fruits.delete("apples");
// console.log(fruits.has("apples"));

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

// let text=0;
// for(const x of fruits.values()){ //this give only the value
//     text+=x;
// }
// console.log(text);


// const fruits=[
//     {name:"apples",quantity:300},
//     {name:"bananas",quantity:500},
//     {name:"oranges",quantity:150},
//     {name:"kiwi",quantity:150}
// ];
// function myCallBack({quantity}){
//     return quantity>200?"ok":"low";
// }

// const result=Map.groupBy(fruits,myCallBack);
// console.log(result);




//JAVA DESCTRUCTURING 

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50
// };

// // Destructuring
// let { firstName, lastName } = person;

// console.log(firstName);
// console.log(lastName);


// let name="GurukulTheSchools";
// let[a1,a2,a3,a4,a5]=name;
// console.log(a1);
// console.log(a2);

// console.log(a3);

// console.log(a4);
// console.log(a5);


// const fruits=["bananas","ORANGES","Apples","MAngoes"];
// leet[fruit1,fruit2]=fruits;
// console.log(fruit1);
// console.log(fruit2);


// const fruits=["Bananas","Oranges","Apples","Mangoes"];
// let{[0]:fruit1,[1]:fruit2}=fruits;
// console.log(fruit1);
// console.log(fruit2);


//REST PROPERTY
// const numbers=[10,20,30,40,50,60,70];
// const[a,b,...rest]=numbers;

// const fruits=new Map([
//         ["apple",500],
//         ["bananas",400],
//         ["oranges",200]
//     ]);
//     let text="";
//     for(const[key,value] of fruits){
//         text+=key+""+value;
//     }
//     console.log(text);


//JAVASCRIPT EXPONENTIATION

// let x=5;
// let z=x**2;
// console.log(z);


// const fruits=["banana","ORanges","Apple","MANGOEs"];
// fruits.includes("MAngo");
// console.log(fruits);
// const fruits=["banana","ORanges","Apple","MANGOEs"];
// fruits.includes("banana",3); // the include( ) method are case sensitive



//THE  TRAILING COMMA


// const arr=[
//     "one",
//     "two",
//     "three",
// ];
// console.log(arr);

// const arr=[
//     "one",
//     "two",
//     "three",,
// ];
// console.log(arr);


const sparseArray=[1,,,4,5,,];
const arr=[,];
console.log(arr.length);