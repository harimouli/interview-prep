

// Function Statement 

function a() {
    console.log("a is called!");
}


// Function Expression 

var b = function () {
    console.log("b is called!");
}

//Hoisting 
// function statement vs function expression
// 1. Function statements are hoisted, function expressions are not.



a(); // works
b(); // works

// but if we call them before their definition 



//c(); // output - typeError 
d(); // output - d is called 
var c = function () {
    console.log('c is called!')
}

function  d() {
    console.log("d is called...");
}


// Anonymous Function 



/* function () {
    console.log("Anonymous function called!");
} */
// uses cases of anonymous functions mentioned in notes.md 
// output  SyntaxError: Function statements require a function name  

//Named Function Expression 

var e = function xyz() {
    console.log("e is called!");
}
e(); // works
// console.log(xyz() === e()); // false
// xyz(); //  ReferenceError: xyz is not defined


// difference between parameters and arguments 


function sum(param1, param2) { // a and b are parameters
    console.log("Sum is: ", param1+ param2);
}

var arg1 = 3;
var arg2 = 5;
sum(arg1, arg2); // 3, 5 are arguments


// First Class Functions 

function f(f1){

    return f1;
}


console.log(f(function xyz(){return 10;}));