//! this operator uses two inputs at a time (BINARY OPERATORS)

const [a, b, c, d] = [3, 5, 1, 15] //! reduced form for creating 4 variables

const soma = a + b + c + d //* binary operator: a + b // (a + b) + c // ...


//! post-fixed operator example: d++
//! pre-fixed operator example: ++d
//! in-fixed operator example, between 2 operands: op1 + op2 

//! unary operator example, make variable negative: -D

const subtracao = d - b

const multiplicacao = a * b

const divisao = d / a

const modulo = a % 2 //! mod operation = rest of euclidian division algorithm

console.log(soma, subtracao, multiplicacao, -divisao, modulo)



