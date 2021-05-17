// ! DESTRUCTURING, 2 shapes: when in object, use {}
// ! DESTRUCTURING, 2 shapes: when in array, use []

// AVAILABLE STARTING --- ES 2015 ES6

// * LON - LITERAL OBJECT NOTATION

const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC', // Forget ':' and JS know the mistake comes from just this line !!!
        numero: 1000
    }
}

// ! WE ARE WORKING WITH OBJECT

// Formulating: take 'nome' and 'idade' away from object 'pessoa:

const { nome, idade } = pessoa // * { } do not represent the object, but rather, the destructuring operator

console.log(nome, idade)

// You can export away from object whilst storing at variables:
const { nome: name, idade: age } = pessoa 

console.log(name, age)

// What if attributes do not exist:
// true stays as standard value, // ! if nothing comes out of 'pessoa' object, 
// ! as before-set standard, the program returns 'true' 
const { sobrenome, bemHumorada = true} = pessoa

// What if nested attributes do not exist:
const { endereco: { logradouro, numero, cep } } = pessoa;
console.log(logradouro,numero,cep)

// !TEST ABOVE WITH NON-EXISTING OBJECT !

const {conta: {ag, num} } = pessoa // * 'pessoa' has no 'conta' attribute
// ! YOU CAN ONLY DESCRUTURE DATA THAT ACTUALLY EXISTS
// ! ONLY LOWEST LAYER ('ag' or 'num') of DATA MAY BE THERE





