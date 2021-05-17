

/** 
* * PROBLEM -   
* ? Write a function that calculates the factorial
* ? of a number.
* ? 
* ? 
* ? 
*/

function fatorial (numero) {
    if(numero == 0)
    {
        return 1
    } 
    else 
    {
        return numero * fatorial(numero - 1) // Callback!!!
    }
}

console.log(fatorial(10))

//! Could be written in so many different ways.