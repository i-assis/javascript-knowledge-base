//TODO: unary, binary, ternary :: with relation to number of arguments/operands/inputs


//! making an arrow function: functionMemoryDiscipline: const; functionName: resultado;
//! parameter: nota (no parenthesis cuz only 1);  implicitReturnIndicator: =>


//* STANDARD SYNTAX: (relational expression) ? (true value) : (false value)  
//* ? -> ternary operator 1 
//* ? -> ternary operator 2 

//? needs further research -> 

//! DOES THE (relational expression) make above boolean ?

const resultado = nota => (nota >= 7) ? ('Aprovado') : ('Reprovado')


//! same function above could be done with a body:
const resultado2 = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovadaço' //* relation is REVERSAL of arrow !!!
}

//!  TESTING SYNTAX 1:

console.log(resultado(7.1))
console.log(resultado(6.7))

//!  TESTING SYNTAX 2:
console.log(resultado2(7.1))
console.log(resultado2(6.7))