//! RECAP:
/*
if = do something when TRUE, do nothing when FALSE

if/else = do something when TRUE, do something else when FALSE

if/else/if/... = do something for each case
*/

Number.prototype.inBetween = function (lowerBound, upperBound) //! This line needs further study.
//! Does this guarantee that 'inBetween' will only apply to number typed variables ?
{
    return this >= lowerBound && this <= upperBound //This line ??
                                                    //* Is this changing dinamically between 1st and 2nd inputs ?
}
//* Above is just the function block.

const imprimirResultado = function (nota) { //! This is a function composition g( grade, f( lowerGrade, upperGrade ) ) !!!
    //* The 'bound' arguments you were expecting are all here.
    if (nota.inBetween(9, 10)) {
        console.log('A')
    } else if(nota.inBetween(7, 8.99)) {
        console.log('B')
    } else if(nota.inBetween(4, 6.99)) {
        console.log('C')
    } else if(nota.inBetween(0, 3.99)) {
        console.log('D')

    //! ONLY ONE 'else if' CASE MAY BE ACTIVATED AT A GIVEN RUNTIME.


    //* The generic 'else' applies when all valid cases were already handled !
    //* Also, this final 'else' is optional.
    } else {
        console.log('Grade designation is either invalid or non-existant !')
    }
} //! Now, this code has a really good handle on exceptions. Unilike when using vague 'else' statements.


//! A few test cases:
imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)
// imprimirResultado('String type.') //! This outputs an error !
// imprimirResultado(true) //! This outputs an error !
// imprimirResultado(false) //! This outputs an error !
imprimirResultado(9/2)


