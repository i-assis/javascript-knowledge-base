//! SWITCH -> semmantically equivalent to 'else if' !

//! const -> 'function' address is unchangeable !
const imprimirResultado = function (nota) { // 

    switch (Math.floor(nota)) {

        //! NOTE THE NUMBER AFTER 'case' IS NUMERIC VALUE OF 'Math.floor(nota))' !!!
        //* Note this approach avoids function composition.

        case 10: // 'case 10' does absolutely nothing ? NO ! //! But it's empty !
        case 9:  // 'case 10' and 'case 9' will print the same thing to the console !
            {
                console.log('A')
                break //! Without this line, all cases below will be executed as well.
                      //! COMPARE THIS TO 'fallthrough' pattern in 'golang'.

            } //* Better use block organization !

        case 8: case 7: //* Grouping at same line, at different line, doesn't matter.
                        //! 'case 8, 7' fails completely; unsupported syntax.
                        //! 'case 8, 7:' fails completely; unsupported syntax.
                        //! 'case 8-7:' reads '8', but not '7'.
            console.log('B')
            break

        case 6: case 5: case 4: 
            console.log('C')
            break

        case 3: case 2: case 1: case 0: // THIS IS AN 'either/or' type structure.
            console.log('D')
            break

        default: //! This case activates when none of the above caused the program to break.
                 //* This case is also optional, but recommended for optimal exception handling.
                 //* This case can be put anywhere within this 'switch' structure.
                 //* This case is preferrably stated at the END of 'switch' structure.
                 
            console.log('Grade designation is either invalid or non-existant !')
            //* Since this is the last block, no 'break' is needed here.
    }

}

//! A few test cases:

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)
imprimirResultado('String type.') //! Is successfully handled !
imprimirResultado(true) //! Is successfully handled !
imprimirResultado(false) //! Is successfully handled !
imprimirResultado(9/2)

//! DO TEST CASES WHERE SWITCH RECEIVES OBJECTS, TYPES, VALUES, ETC.

