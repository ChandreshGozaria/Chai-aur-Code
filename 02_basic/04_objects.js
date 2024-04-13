// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "1234abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fulllname: {
        username: {
            firstname: "classic",
            lastname: "chandu"
        }
    }
}

// console.log(regularUser.fulllname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = {5: "e", 6: "f"};

// let newObj = Object.assign(obj1, obj2, obj3)
// Object.assign(obj1, obj2, obj3)
// console.log(newObj == obj1);
const mainObj = { ...obj1, ...obj2, ...obj3};
// console.log(mainObj);
// console.log(mainObj === obj1);


let result = "chandresh".split("").reduce((acc, curr) => {
    // return
    if(acc[curr]){
        acc[curr]++;
    }else{
        acc[curr] = 1
    }
    return acc;
    // console.log("value: -------", value);
},{})

// console.log(result);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn11"));

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const { courseInstructor: instructor } = course;
// console.log(instructor);




