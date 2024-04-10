// Primitive

// 7 types : String, Number, Boolean, Null, Undifined, Symbol, BigInt

// const score = 100;
// const scoreValue = 100.3;

// const isLoggedIn = false;
// const outsideTemp = null;
// let userEmail;

// const id = Symbol('123');
// const ontherId = Symbol('123');

// console.log(id === ontherId);
// const bigNumber = 1245632154558222n;



// Reference ( Non Primitive )

// Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];

// let person = {
//     name: "classic",
//     age: 29
// }

// const myFunction = function(){
//     console.log("hello world");
// }

// console.log(typeof myFunction);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack ( Primitive), Heap (Non - Primitive)

let myYoutubeName = "chandreshdotcom";
let anothername = myYoutubeName;
anothername = "chaiaurcode"

// console.log(myYoutubeName);
// console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo = userOne;

userTwo.email = "classic@google.com";

// console.log(userOne.email);
// console.log(userTwo.email); 