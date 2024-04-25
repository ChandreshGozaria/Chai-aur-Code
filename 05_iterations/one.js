// For

// for (let i = 1; i <= 10; i++) {
//     console.log("outer loop value: ",i );
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} ${j} = ${j * i}`);   
//     }
// }

// let myArray = ["flash", "batman", "superman"];

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

//         * * * * *
//          * * * * 
//           * * * 
//            * *
//             *

// for (let i = 1; i <=5 ; i++) {
//     // let str = ""
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(" ");
//     }

//     for (let k = 0; k < 5 - i; k++) {
//         process.stdout.write("* ");
//     }
//     console.log();    
// }

// for (let index = 1; index <= 20; index++) {
    
//     if(index === 5){
//         console.log("value if 5");
//         break;
//     }
//     console.log(`value of index value: ${ index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    
    if(index === 5){
        console.log("value if 5");
        continue;
    }
    console.log(`value of index value: ${ index}`);
    
}