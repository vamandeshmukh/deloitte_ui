// CallBacks in JavaScript 

console.log(`one`);

// basic scenario 
// let fun = () => {
//     setTimeout(
//         () => {
//             console.log(`two`);
//         }
//         , 2000);
// }

// console.log(`one`);
// fun();
// console.log(`three`);

// callback problem  

// let fun = () => {
//     setTimeout(
//         () => {
//             return { 'name': 'Sonu' };
//         }
//         , 2000);
// }

// const myName = fun();
// console.log(myName.name);

// console.log(`three`);

// solution 1 callbacks 

let fun = (callback) => {
    setTimeout(
        () => {
            callback({ 'name': 'Sonu' }); // callback function invocation /call 
        }
        , 2000);
}

fun((doFun) => { console.log(doFun.name) }); // callback function definition 


// console.log(`three`);

// let abc = () => {
//     console.log("Some output");
// };

// function aaa() {
//     console.log("Some other output");
// }

// setTimeout(() => {
//     console.log("Some output")
// }, 2000);


// use cases for call backs 

1
2
3



