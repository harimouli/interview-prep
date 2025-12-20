# important Questions asked in Swiggy 

## 1. What is Anonymous funtion 
## 2. What is First Class Function 
## 3. Function Statement 
        function a() {
          consolelog("a iscalled!");
        }
  ## Function  Declaration 
           it is same as function 
           statement
 ##  Function Expression 
        var b = function () {
           console.log("b is called!");
        }
 ### 1. here a function is  stored *   in a variable*
## Function Statement vs Function Declaration 

### 1. Hoisting  

    
            c(); // output - typeError 
            d(); // output - d is called 

            var c = function () {
                console.log('c is called!')
            }

            function  d() {
                console.log("d is called...");
            }
            
## why is happend ? bro think yourself ? 

 ### 1. beacuse function c is stored in global context as function , we already normal functions are hoisted 



## Anonymous Function 
 ### 1. i  simple terms a function without any name 

             function () {
                console.log("Anonymous function called!");
            }       


  ### Use Cases of Anonymous Functions 
    1.we can use them to pass as an function arguments 
    used to pass functions as an arguments 

## Named Function Expressions 

### in simple terms - storing an function statement in a variable 

        var e = function xyz() {
            console.log("e is called!");
        }
            e(); // works
        xyz();  ReferenceError: xyz is not defined



## parameter vs arguments 
        function sum(param1, param2) { // a     and b are parameters
            console.log("Sum is: ", param1+ param2);
        }

        var arg1 = 3;
        var arg2 = 5;
        sum(arg1, arg2); // 3, 5 are arguments



## First class functions 

### 1. the ability of functions can be used as values and can be passed as arguments to another functions 

            function f(f1){
                 return f1;
            }
            console.log(f(function xyz(){return 10;}));

