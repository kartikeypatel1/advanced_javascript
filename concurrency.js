//concurrency iw whenever things are happening "at the same time" or in parallel
   

// CallBAcks is function pass as arguement in the function
// function doSomething(callback){
//     callback();
// }
// function sayHi(){
//     console.log("hi");
// }
// doSomething(sayHi);



// function judge(grade){
//     switch(true){
//         case grade=="A":
//             console.log("You got an ",grade,":amazing");
//             break;
//         case grade=="B":
//             console.log("You got an ",grade,":Well Done");
//             break;
//         case grade=="C":
//             console.log("You got an ",grade,":amazing");
//             break;

//         case grade=="D":
//             console.log("You got an ",grade,":amazing");
//             break;
//         default:
//             consol.log("An",grade,"!What!");
//     }
// }
// function getGrade(score,Callback){
//     let grade;
//     switch(true){
//         case score>=90:
//             grade="A";
//             break;
//         case score>=80:
//             grade="B";
//             break;
//         case score>=70:
//             grade="C";
//             break;
//         case score>=60:
//             grade="D";
//             break;
//         default:
//             grade="F";
//     }
//     Callback(grade);
// }
// getGrade(85,judge);




// setInterval(encourage,500);
// function encourage(){
//     console.log()
// }


//PROMISES
//with promises, we can organise the sequence of our code in slightly easier-to-maintain a way.
//when resolve() is called .the promise the presumed to be seccuesful and  whatever is between the arrows is returned and used as input for the then method on the promise object .if reject() is called the promise failed and the catch() method on the promise object (if presebnt) is executed wtih the arguement of the reject()


// let promise=new Promise(function(resolve,reject){
//     let x=20;
//     if(x>10){
//         resolve(x);
//     }
//     else{
//         reject("TOO low");
//     }
// });
// promise.then(
//     function(value){
//         console.log("Success",value);
//     },
//     function(error){
//         console.log("error",error);
//     }
// );

const promise=new Promise((resolve,reject)=>{
    // resolve("success");
    reject("Reject");
})
.then(value=>{
    console.log(value);
    return "we";
})
.then(value=>{
    console.log(value);
    return "can";
})
.then(value=>{
    console.log(value);
    return "Chain";
})
.then(value=>{
    console.log(value);
    return "promises";
})
.then(value=>{
    console.log(value);
})
.catch(value=>{
    console.log(value);
})