// // combine 2 arrays, return the combined one
// function combineArrays(a1: any[], a2: any[]): any[] {
// 	return [...a1, ...a2];
// }

// // call the function with string arrays
// const names = combineArrays(
//     ['hari', 'krish'],
//     ['shiv', 'amar']
//     );
//     console.log(names);
//     // output: ["hari", "krish", "shiv", "amar"]

//     // call the function with number arrays
// const numbers = combineArrays(
//     [10, 20, 30],
//     [40, 50]
//     );
//     console.log(numbers);
//     // output: [10, 20, 30, 40, 50]



// combine 2 arrays, return the combined one
// using generic function syntax
function combineArrays<T>(a1: T[], a2: T[]): T[] {
    return [...a1, ...a2];
}

const names = combineArrays<string>(
    ['hari', 'krish'], ['shiv', 'amar']
);
console.log(names);

const numbers = combineArrays([10, 20, 30], [40, 50]);
console.log(numbers);
