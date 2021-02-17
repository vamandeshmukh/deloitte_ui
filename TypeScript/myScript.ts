
console.log("Hello world!");

// java - int num = 10;

// let num: number = 10;

// console.log(num);

// num = 20;

// console.log(num);

// num = 'aaa';

// console.log(num);

// type annotations in TS 

var age: number = 32;          // number variable
var empName: string = "John";  // string variable
var isUpdated: boolean = true; // boolean variable

//java -  void display(int id, String name) {

function display(id: number, name: string): void {
    console.log("Id = " + id + ", Name = " + name);

}

display(10, 'Sonu');
// display(10, 20);

let myVariable: any;

myVariable = 20;

myVariable = "abc";

myVariable = true;

let list: number[] = [1, 2, 3];


let employee: [number, string] = [1, "Steve"];
let person: [number, string, boolean] = [1, "Steve", true];

let user: [number, string, boolean, number, string]; // declare tuple variable
user = [1, "Steve", true, 20, "Admin"]; // initialize tuple variable

enum Color { Red, Green, Blue }
let c: Color = Color.Green;
console.log(c);


// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// function infiniteLoop(): never {
//     while (true) {
//     }
// }

// error("aa");
// infiniteLoop();


let code: any = 123;
let employeeCode = <number>code;

// default parameters 
function fun2(a: number = 1): void {
    console.log(a);
}

fun2(10);
fun2();

// optional parameters 
function fun3(a: number, b?: number): void {
    if(b) {
        console.log(a + b);
    }
    else {
        console.log(a);
    }
}

fun3(10, 20);
fun3(10);

let myVariable2: string | number;

myVariable2 = 'a';
myVariable2 = 10;
// myVariable2 = true;

let person2: { name: string, age: number } = {
    name: 'Hari',
    age: 25
 };
 

