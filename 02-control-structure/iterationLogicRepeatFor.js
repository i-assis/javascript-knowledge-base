

// Variable 'contador' is going to change at every iteration: use 'let'. 
let contador = 1

//! Reca

while //! Write 'while'.
(contador <= 10) //! Write condition that will live as long as the condition evaluates to 'false'.

//! Now write a block stating what needs to be done when condition was evaluated to 'false':
{
    console.log(`contador = ${contador}`)
    contador++ //*unary operator that adds a unity to 'contador' variable
}

//!  'for' loops go according to a very similar structure:
//! Write 'for'. THIS IS A FULLY INDEPENDENT, WORKING EXAMPLE; COMMENT EVERYTHING ELSE AND RUN THIS for-LOOP.
for 
(let i = 1; i <= 10; i++) //! Loop = initial condition + ending coindition + evolution rule.
                          //! Boolean-wise, it's the inverse: if it returns true, the operations within the loop is executed.
{
    //* Write whatever is going to be done within the loop:
    console.log(`i = ${i}`) 
}


// The array you'll pass through:
const notasVector = [6.7, 7.4, 9.8, 8.1, 7.7]

// Using a 'for' structure to go through the vector:
for
(let i = 0; i < notasVector.length; i++) //! Loop = initial condition + ending coindition + evolution rule.
{
    //* Just before this line is executed i = 0. 
    console.log(`Nota ${i+1} = ${notasVector[i]}`)

}
// See how lines can be broken freely ?
