// Object 

const mySym = Symbol("key1");
// console.log(mySym);
// object literals
const jsUser = {
    name: "classic",
    "full name": "classic chandu",
    age: 29,
    [mySym]: "myKeyValue",
    location: "Gozaria",
    email: "classic@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "s]Saturday"]
};

// console.log(jsUser.email);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "claasic@123.com";
// Object.freeze(jsUser)
jsUser.email = "claasic@456.com";

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}

// jsUser.greeting();

jsUser.greeting2 = function(){
    console.log(`Hello js user, ${this.name}`);
}

jsUser.greeting2();

