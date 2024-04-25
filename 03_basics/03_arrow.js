// const user = {
//   username: "classic",
//   price: 999,
//   welcomeMessage: function () {
//     // console.log(`${this.username},  welcome to website`);
//     // console.log(this);
//   },
// };

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai1(){
//     let username = "classic";
//     console.log(this.username);
// }
// chai1();

// const chai = () => {
//   let username = "classic";
//   console.log(this.username);
// };

// chai()

// const addTwo = (num1, num2) => ({ username: "classic"})

// console.log(addTwo(3, 4));

const user = {
  username: "hitesh",
  price: 999,
  welcome: function(){
    console.log(`${this.username} welcome to website.`);
  }
}

// console.log(user.welcome( ));

// function chai(){
//   let username = "classic";
//   console.log(this.username);
// }

// chai();


// const chai = function(){
//   let username = "classic";
//   console.log(this.username);
// }

const chai = () => {
  let username = "classic";
  console.log(this.username);
}

// chai()
