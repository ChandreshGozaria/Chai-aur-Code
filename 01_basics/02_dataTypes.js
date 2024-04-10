const data = [
  {
    id: 1,
    name: "Mayur",
    surname: "Shah",
    gender: "Male",
    physics: 30,
    maths: 99,
    english: 20,
  },
  {
    id: 2,
    name: "Rajesh",
    surname: "Donga",
    gender: "Male",
    physics: 50,
    maths: 30,
    english: 90,
  },
  {
    id: 3,
    name: "Ajay",
    surname: "Savaliya",
    gender: "Male",
    physics: 60,
    maths: 30,
    english: 40,
  },
  {
    id: 4,
    name: "Priya",
    surname: "Sharma",
    gender: "Male",
    physics: 80,
    maths: 70,
    english: 60,
  },
  {
    id: 5,
    name: "Tapan",
    surname: "Patel",
    gender: "Male",
    physics: 52,
    maths: 60,
    english: 30,
  },
  {
    id: 6,
    name: "Mayur",
    surname: "Sharma",
    gender: "Male",
    physics: 30,
    maths: 99,
    english: 20,
  },
];


let userName =  data.reduce((acc, curr) => {
//  if(acc.curr.name; 
// console.log(acc);  
if(!acc.includes(curr.name)){
    acc.push(curr.name)
}
return acc;
},[]);

console.log(" --------------- 111", userName);
// let userInfo = [];
// let getName = data.map((users) => {
//     if(userInfo.indexOf(users.name)){
//         // userInfo.push(key.name)
//         return users.name;
//     }
// })

// data.forEach((users) => {
//   if (userInfo.indexOf(users.name)) {
//     userInfo.push(users.name)
//     // return users.name;
//   }
// });

// console.log("userInfo ---------- > ", userInfo);
// console.log(getName);
// let getResult = data.filter(user => {
//     if(user.physics >= 33 && user.maths >= 33 && user.english >= 33){
//         return user
//     }
// })
// console.log(getResult);
