// Storing a function in a variable.

const imprimirSoma = function (a, b) {

console.log(a+b)

}

imprimirSoma(2,3)

// Storing an arrow function inside a variable:
const soma = (a,b) => {
    return a + b
}

// => is a reduction of the word function, also
// a reserved word

console.log(soma(2,3))

// MOST REDUCED SYNTAX - IMPLICIT RETURN

const subtracao = (a,b) => a-b

console.log(subtracao(2,3))

// SMALLEST

const printSmallest = a => console.log(a)

printSmallest('Testing!!!')