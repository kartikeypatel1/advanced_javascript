// // Classes and Objects.
// // Objects are the collection of the properties and methods.

// class ClassName{
//     constructor(prop1, prop2){                // first element of the class is constructor.
//         this.prop1 = prop1;
//         this.prop2 = prop2;
//     }
// }
// let Obj = new ClassName("arg1", "arg2");
// console.log(Obj.prop1);
// console.log(Obj.prop2);



// class Dog{
//     constructor(dogName, Weight, color,Breed){
//         this.dogName = dogName;                               // this.dogName is a formal argument, and dogName is the variable
//         this.Weight = Weight;
//         this.color = color;
//         this.Bread = Breed;
//     }
// }
// let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");
// console.log(dog.dogName);
// console.log(dog.Weight);
// console.log(dog.color);
// console.log(dog.Breed);

// // There can only be one constructor in a class.




// class Person{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
// let p = new Person("Maaike", "van Putten");
// console.log("Hi",p.firstName);




//// When defining these methods, we don't need to use the function keyword. we start directly with the name.

//  class Person{
//     constructor(firstName,lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     greet(){
//         console.log("Hi there! I'm",this.firstName);
//     }
//  }
//  let p = new Person()




// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     greet() {
//         console.log("Hi there!");
//     }

//     compliment(name, object) {
//         return "That is a wonderful " + object + ", " + name;
//     }
// }

// // Creating an instance of the Person class
// let p = new Person("John", "Doe");

// // Calling the compliment method
// let compliment = p.compliment("Harry", "hat");
// console.log(compliment);



// methods

// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
//     greet(){
//         console.log("hi there! I'm",this.firstname);
//     }
// }
// let p=new Person("kartikey","Patel");
// p.greet();

//Properties
// class Person{
//         constructor(firstname,lastname){
//             this.firstname=firstname;
//             this.lastname=lastname;
//         }
//     }
//     let p=new Person("kartikey","Patel");
//    console.log("hi",p.firstname);


// class Person{
//     #firstname;
//     #lastname;
//     constructor(firstname,lastname){
//         this.#firstname=firstname;
//         this.#lastname=lastname;
//     }
// }
// let p=new Person("kartikey","Patel");
// console.log("hi",p.firstname);


// class Person{
//     #firstname;
//     #lastname;
//     constructor(firstname,lastname){
//         if(firstname.startWith("M")){
//             this.#firstname=firstname;
//         }else{
//             this.#firstname="M"+firstname;
//         }
//         this.#lastname=lastname;
//     }
// }
// let p=new Person("kay","moon");



//GETTERS and SETTERS



// class Person{
//     #firstname;
//     #lastname;
//     constructor(firstname,lastname){
//         this.#firstname=firstname;
//         this.#lastname=lastname;
//     }
//     get firstname(){
//         return this.#firstname; //always return keyword use 
//     }
//     set firstname(firstname){
//         this.#firstname=firstname;// set are use for reinitialized the value
//     }
//     get lastname(){
//         return this.#lastname;
//     }
//     set lastname(lastname){
//         this.#lastname=lastname;
//     }
// }
// let p=new Person("kartikey","Patel");
// console.log(p.firstname);



// //INHERITENCE
// class Vehicle{
//     constructor(color,currentSpeed,maxSpeed){
//         this.color=color;
//         this.currentSpeed=currentSpeed;
//         this.maxSpeed=maxSpeed;
//     }
//     move(){
//         console.log("moving at",this.currentSpeed);
//     }
//     accelerate(amount){
//         this.currentSpeed+=amount;
//     }
// }
// class Motorcycle extends Vehicle{
//     constructor(color,currentSpeed,maxSpeed,fuel){
//         super(color,currentSpeed,maxSpeed);//super word in the constructor is calling the constructor fromo the parent
//         this.fuel=this.fuel;
//     }
//     doWheelie(){
//         console.log("Driving on one wheel!");
//     }
// }
// let motor=new Motorcycle("Black",0,250,"gasoline");
// console.log(motor.maxSpeed);
// motor.accelerate(50);
// motor.move();// wecannot acces any motorcycle specific properties or methods in our vehicle class

//PROTOTYPES

class Person{
        constructor(firstname,lastname){
            this.firstname=firstname;
            this.lastname=lastname;
        }
        greet(){
            console.log("hi there");
        }
    }
    Person.prototype.introduce=function(){
        console.log("Hi,I'm",this.firstname);
    };
    Person.prototype.favoriteColor="green";
    let p=new Person("Maria","Saga");
    console.log(p.favoriteColor);
    p.introduce();
