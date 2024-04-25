// ForEach

const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach( function (item) {
//     console.log(item);
// })

// coding.forEach((val) => {
//     console.log(val);
// })

// function printMe(text){
//     console.log(text);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
  {
    languageName: "Javascript",
    languageFileName: "js",
  },
  {
    languageName: "c++",
    languageFileName: "cpp",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
    console.log(item.languageFileName);
})
