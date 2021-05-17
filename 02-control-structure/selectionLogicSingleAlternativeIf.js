
//* Trying with a number type input:
function soBoaNoticia(nota) {
    if ( nota >= 7 ) { /! careful: 'if' condition is boolean, in JS many things can be true or false /
        console.log('Passed with grade: ' + nota)
    }
}

//? Testing a few implementations of above function:
soBoaNoticia(8.1) //* This returns something.
soBoaNoticia(6.1) //* This returns nothing.
soBoaNoticia(5.5) //* This returns nothing.
soBoaNoticia(9.1) //* This returns something.


//* Trying with a boolean type input:
function seForVerdadeEuFalo(valor) {
    if(valor) { /! 'valor' is boolean; if valor === true, this block is executed /
                //! curiosity: this test condition IS NOT a relational statement
        console.log('Is it true? Check here: ' + valor)
    }
}

//? Testing a few implementations of above function:
seForVerdadeEuFalo() //* This returns nothing.
seForVerdadeEuFalo(null) //* This returns nothing.
seForVerdadeEuFalo(undefined) //* This returns nothing.
seForVerdadeEuFalo(NaN) //* This returns nothing.
seForVerdadeEuFalo('') //* This returns nothing.
seForVerdadeEuFalo(0) //* This returns nothing. ONLY NUMBER TO RETURN 'false'.
seForVerdadeEuFalo(-1) //* This returns something.
seForVerdadeEuFalo(' ') //* This returns something.
seForVerdadeEuFalo('?') //* This returns something.
seForVerdadeEuFalo([]) //* This returns something. 
seForVerdadeEuFalo([1, 2]) //* This returns something.
seForVerdadeEuFalo({}) //* This returns something.

//! Now would be good to try with a bunch of other conditions and strange returns !