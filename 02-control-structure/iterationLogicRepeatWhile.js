//! While -> used for an undeterminate number of repetitions.

function getIntegerBetween(lowerBound, upperBound) {

    //* You can declare whatever you want inside a function:
    
    const valor = Math.random() * (upperBound - lowerBound) + lowerBound
    //* Math.random() generates something between 0 and 1.
    //! You could get an infinite loop by reversing (- upperBound + lowerBound) !

    return Math.floor(valor)
}

//* The value will change over time, use 'let':
let opcao = 0

//* Change value of option ny using 'getIntegerBetween' function, defined above.
//! Another case of FUNCTION COMPOSITION !
while (opcao != -1) { //! The conditional of 'while' may get in infinite loop if it never gets to be false.
                      //* When 'opcao' gets to be -1, the conditional returns 'false' and the loop ends.
    opcao = getIntegerBetween(-1, 10)
    console.log(`The chosen option was -> ${opcao}. <- !`)
}

console.log('See you next time!') //! When in infinite loop, this'll never be printed.

//! See how 'Math.random()' forces you to use while: the number of iterations is uncertain !