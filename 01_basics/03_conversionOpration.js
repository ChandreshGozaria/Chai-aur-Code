let score = "chandresh";

console.log(":  CHANDRESH  :");
console.log(" ");

let valueInNumber = Number(score);
// console.log(valueInNumber);
// console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => Nan
// true => 1; false => 0

let isLoggedIn = "name";

let booleanLoggedIn = Boolean(isLoggedIn);
// console.log(booleanLoggedIn);

// 1 => true; = => false
// " => false
// "name" => true

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(typeof stringNumber);
// console.log(stringNumber);

// ************************** Operations ************************

let value = 3;
let negValue = -value;
// console.log(negValue );

let firstName = "Chandresh ";
let lastName = "Thakor";

let fullName = firstName + lastName;
// console.log(" : ", fullName);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log(1 + 2 + "2" );

// Primitive value
// undefined, null, string, number: No change

let myString = "ChanDreSh";
let newString = myString.toLowerCase();

// console.log(newString);
// console.log(myString);

// Objects are mutable ( you can change them)

let myObject23 = { name: "Chandresh" };
myObject23.name = "Classic";
myObject23.lastName = "Chandu";
// console.log(myObject);

// array are also mutable
let heroScore = [2, 4, 5, 6, 1];
heroScore[1] = 6;
// console.log(heroScore);

// Object are called as reference types
// reference is assigned

let arrayRef = [1, 2];
let anotherArrayRef = arrayRef;

anotherArrayRef[0] = 5;
// console.log(arrayRef);
// console.log(arrayRef ===  anotherArrayRef); true

let yetAnotherArray = Array.from(arrayRef);
// console.log(yetAnotherArray === arrayRef); false

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// type conversion
// JS get what JS wants

// 10 + "objects" // 10objects
// "7" * "4" // 28

// let num = 1 + "x";
// console.log(num + " Objects");

let infosysStock = 1600.4343;
// console.log(infosysStock.toFixed(2));
// console.log(Boolean(""));
// console.log(Boolean([]));

// Object to primitive value

// 1. prefer-stringNumber
// 2. prefer-Number
// 3. No-preference

let colorValue = 14;
let binaryColorValue = colorValue.toString(2);
// console.log(binaryColorValue);

// console.log({1: "one"}.toString(2));

// let newDate = new Date(2022, 1, 1);
// console.log(newDate.valueOf());

// toString() || valueOf()


// console.log(+true); 1
// console.log(+""); 0

let num1, num2, num3;
num1 = num2 = num3 = 2+ 2

// console.log(num1); 4
// console.log(num2); 4
// console.log(num3); 4

let gameCounter = 100;
gameCounter ++;
// console.log(gameCounter);


// let arr = [ 1, 2, 3, 2];

// let result = arr.filter((num, index) => {
//     if(arr.indexOf(num) === index){
//         return num;
//     }
// })

// console.log(result);

// for of

//  const arr = [1, 2, 3, 4, 5];

//  for (const num of arr){
//     // console.log(num)
//  }

//  const greetings = "hello world";
//  for(const greet of greetings){
//     console.log(greet)
//  }

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States Of America");
map.set('FR', "France")

// for (const [key, value] of map){
//     console.log(key, ':- ', value);
// }
// console.log(map);

// const myObject2 = { 
//     game1: "NFS",
//     game2 : "Spiderman"
// }

// for(const key of myObject2){
//     console.log(key, ':-', value);
// } 

