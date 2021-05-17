
/** 
* * PROBLEM -   
* ? Write a function that converts foreign decimal
* ? numbers to the Brazilian Real currency format.
* ? 
* ? 
* ? 
*/

function formatarValorDecimal(valorDecimal) {

    valorEmReais =
    //* Declaration used neither 'var', 'let' or 'const'.

    `
    R$ // Universal prefix.
    ${valorDecimal
        .toFixed(2) // Rounding to 2 decimal places.
        .toString() // Converting to string format.
        .replace(".", ",")} // Switching dots and commas.
    ` 
    //! Above is a string template.

    console.log(valorEmReais) //! Implicit return ?
}

formatarValorDecimal(0.1 + 0.2)