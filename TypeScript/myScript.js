console.log("Hello world!");
// java - int num = 10;
// let num: number = 10;
// console.log(num);
// num = 20;
// console.log(num);
// num = 'aaa';
// console.log(num);
// type annotations in TS 
var age = 32; // number variable
var empName = "John"; // string variable
var isUpdated = true; // boolean variable
//java -  void display(int id, String name) {
function display(id, name) {
    console.log("Id = " + id + ", Name = " + name);
}
display(10, 'Sonu');
// display(10, 20);
var myVariable;
myVariable = 20;
myVariable = "abc";
myVariable = true;
var list = [1, 2, 3];
var employee = [1, "Steve"];
var person = [1, "Steve", true];
var user; // declare tuple variable
user = [1, "Steve", true, 20, "Admin"]; // initialize tuple variable
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
// Function returning never must have unreachable end point
function error(message) {
    throw new Error(message);
}
// function infiniteLoop(): never {
//     while (true) {
//     }
// }
// error("aa");
// infiniteLoop();
var code = 123;
var employeeCode = code;
// default parameters 
function fun2(a) {
    if (a === void 0) { a = 1; }
    console.log(a);
}
fun2(10);
fun2();
// optional parameters 
function fun3(a, b) {
    if (b) {
        console.log(a + b);
    }
    else {
        console.log(a);
    }
}
fun3(10, 20);
fun3(10);
