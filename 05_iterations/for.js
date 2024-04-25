const myObjects = {
    js: "javascript",
    cpp: "c++",
    rb : "ruby",
    swift: "swift by apple"
}

// for (const key in myObjects) {
//     console.log(`${key} shortcut is for ${myObjects[key]}`);
// }

// const programming = ["js", "rb", "py", "java", "cpp"];

// for(let key in programming){
//     console.log(programming[key]);
// }

const map =  new Map();

map.set('IN', "India")
map.set('USA', "United states of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);
for(let key in map){
    console.log(map[key]);
}