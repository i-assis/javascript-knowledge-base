//* Function, in JavaScript, is a First-Class Object (or First-Class Citizen)
//* Higher-order function <- in the functional programming paradigm.

//* JavaScript is multi-paradigm ! You can use it for structured, object-oriented and functional programming !

//! YOU CAN:
//! 1. Use a function as a parameter of another function.
//! 2. Return a function after another function has been executed.
//! 3. Store a function in a variable.
//! 4. Create functions inside functions.

//! Form #1: Literal = 'function' + name: fun1 + imputs: () + block: {}
function fun1 //* 'function' may or may not be followed by a name such as 'fun1'
() //* Here come the input arguments.
{} //* In control structures, you can remove this. Not the case here.
   //* In case of arrow functions, this is optional.

//! Form #2: Stored in a Variable
const fun2 //* This function, from now on, may be referenced by name 'fun2'.
= function () { }

//! Form #3: Stored in an Array
//* Function, like verything else, is data, the difference being that it is 'executable data'.

const array = 
[
    function (a, b) { return a + b }, fun1, fun2 //* Putting function directly inside 'array'
                                                 //* alongside the already created 'fun1' and 'fun2'.
]
console.log(array[0](2, 3)) //* Invoking above function and printing its returns at the console.
                            //! Only the function at the first element was run !

// Executing down to here, no error, everything is correct.

//! Form #4: Stored in an Attribute of an Object 
const obj = {}
obj.falar = function () { return 'Opa' } //!! ONLY ONE OBJECT MAY BE RETURNED, NOTHING MORE.
console.log(obj.falar()) //* Won't work without the '()' !

//! Form #5: Stored in Literal Form inside another Function in Literal Form
function run(fun) {
    fun() //* "The best function is  the one that uses no arguments"
          //* This is going to execute wichever function gets into the input.  
}
//* Invoking above function 'run':
run //!Invoking 'run'.
(function //* From generic function syntax.
    ()    //* No arguments needed at the input. 
    { 
        console.log('Executando...') 
    }
    
    //! All this was just the input to the 'run' function !
    ) 

//! THINK OF THE COMBINATIONS WE CAN DO WITH FUNCTION COMPOSITION !!


//! Form #6: Stored in the return block of another function:
function soma(a, b) {
    return function //* These need to be at the same line.
    (c) 
    {
        console.log(a + b + c)
    }
}
//! This is A FIRST syntax of in-function argument injection !
//* Note that you can split lines, no problem:
soma //* Executing function 'soma'.
(2, 3) //* 1st order arguments - needed to start running the function
(4) //* 2nd order arguments - needed to execute instructions.

//! This is A SECOND syntax of in-function argument injection !
const addThirdNumber = soma(2, 7) //? Needs study.
addThirdNumber(1) //! 'addThirdNumber'(1) = 'soma(2,7)'(1) See how you can change one for the other ?