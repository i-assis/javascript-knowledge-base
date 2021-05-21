
//! Create a function that returns the string 'Hello!' 
//! concatenated with a text argument at the function's
//! input with an exclamation '!' at the end of said
//! function's output.

//* greet("Nathan") /* returns */ "Hello, Nathan !"
//* greet("Mary") /* returns */ "Hello, Mary !"

//! Solution 1 - 

function greet(name)
{
    const greeting = "Hello"

    return [greeting, name].join(', ').concat('!')
}

console.log(greet('Nathan')) //! Only works if the input is already in a string format.

//! Solution 2 - 

function  salute(name)
{
    return "Hi there, " + name + "!"
}

console.log(salute('Mary')) //! Only works if the input is already in a string format.

//! Solution 3 - Using a string template.

function hail(name)
{
    return `Hello there, ${name}!`
}

console.log(hail('David')) //! Only works if the input is already in a string format.