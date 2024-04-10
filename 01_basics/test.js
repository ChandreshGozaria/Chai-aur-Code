var array = ["a", "b", "c", "d"];
// o/p: ["a","b","e","f","d"]
let newArr = [];

// let result = array.map(item => {
//     if(item == "c"){
//         array.push("e")
//         array.push("f")
//     }
//     return item
// })

// let newArray = [];


// array.forEach((item) => {
//     if(item == "c"){
//         newArr.push("e");
//         newArr.push("f");
//     }else{
//         newArr.push(item)
//     }
// })
// console.log("result", newArr);
// let result = array.map(item => {
//     if(item === "b"){
//         array.push("e");
//         array.push("f");
//     }
//     return item
// })
// array.forEach((item) => {
//     if(item == "b"){
//         newArr.push(item)
//         newArr.push("e")
//         newArr.push("f")
//     }
// })
// console.log(newArr);

Promise.resolve("two")
  .then((result) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(result + " one"), 0);
    });
  })
  .then((result) => console.log(result))
  .catch((err) => console.error(err));


// const express = require("express");
// const { userInfo } = require("os");
// const { config } = require("process");
// const app = new express();

// app.use()

// app.get("/", (req, res) => {

// })
// app.listen(port , () => {

// })

// src ->
//     config,
//     midd,
//     route -> 
//             user.routes.js

//     module -> user -> 
//                 user.model.js
//                 user.controller.js,
//                 user.service.js
//     utils
// .env    