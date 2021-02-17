// // combine 2 arrays, return the combined one
// function combineArrays(a1: any[], a2: any[]): any[] {
// 	return [...a1, ...a2];
// }
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
function combineArrays(a1, a2) {
    return __spreadArrays(a1, a2);
}
var names = combineArrays(['hari', 'krish'], ['shiv', 'amar']);
console.log(names);
var numbers = combineArrays([10, 20, 30], [40, 50]);
console.log(numbers);
