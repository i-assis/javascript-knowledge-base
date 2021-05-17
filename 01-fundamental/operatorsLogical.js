/* !

// TODO: WORKING WITH '&' OPERATORS

binary truth table

v & v -> v
V & f -> f
f & v -> f
f & f -> f

f & ? -> f

op1, op2, op3, ..., opN is true iff op1 = true & op2 = true & ... & opN = true

op1, op2, op3, ..., opN is FALSE iff at least one opN = false

// TODO: WORKING WITH 'OR'OPERATORS

v or (anything)) -> v

op1, op2, op3, ..., opN is true iff at least one opN = true

f or (anything) -> unpredictable (see above)

binary truth table:

v or v -> v
f or v -> v
v or f -> v
f or f -> f


*/

//! BINARY EXCLUSIVE OR = XOR = BOTH TRUE = BOTH FALSE === FALSE
//! V xor V = false
//! V xor F = true
//! F xor V = true
//! F xor F = false

//! IN JAVASCRIPT, unary logic operator: !true = false; !false = true; !!true = true; ...


//* Not necessary to put trabalho1, trabalho2 as boolean: JS will figure it out



function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //? BITWISE OPERATOR ??: or

    const comprarTv50 = trabalho1 && trabalho2 //? BITWISE OPERATOR ??: and

    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor //!ALTERNATIVE: !! -> converts to boolean

    const comprarTv32 = trabalho1 != trabalho2 //! difference simulates XOR relation!

    const manterSaudavel = !comprarSorvete // unary operator, check 'operators ...' files

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } //! cuz of {} function returns an object! check below
}

/*
you could create an object, like:

return:

{
    afinalSorvete: comprarSorvete,
    afinalTV50: comprar TV50,

...

}

//TODO: please be critical of the redyundancy of said object creation

*/

//! ES 2015 automatic creation of key/value pairs !

console.log(compras(true, true)) // 2 jobs ok

console.log(compras(true, false)) // 1 job ok

console.log(compras(false, true)) // 1 job ok

console.log(compras(false, false)) // 2 jobs NOT-ok


//! Above stuff could be replaced by other suff JS returns as true or false.