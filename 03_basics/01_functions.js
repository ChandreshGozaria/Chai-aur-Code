function sayMyName() {
  console.log("C");
  console.log("L");
  console.log("A");
  console.log("S");
  console.log("S");
  console.log("I");
  console.log("C");
}

// sayMyName()
// function addTwoNum (number1, number2){
//     console.log(number1 + number2);
// }
function addTwoNum(a, b) {
    // let result = a + b;
    return a + b;
}

// console.log(addTwoNum(4, 5));


function loginUserMessage(username = "sam") {
    if(username === undefined){
        console.log("please enter user name");
        return
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("classic"));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 400, 5000));

const user = {
    username: "classic",
    price: 345
};

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}.`);
}
// handleObject(user)

// handleObject({
//     username: "sam",
//     price:8789
// });

const myNewArray = [200, 400, 100, 600];

function returnSecoundValue(getArray){
    return getArray[1]
}

// console.log(returnSecoundValue(myNewArray));

function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

// console.log(calculateCartPrice(300, 200, 500));

// const user = {

// }