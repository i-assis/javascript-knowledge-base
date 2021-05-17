// Key-Value Pair

const saudacao = "opa"; // lexical context - place, in the code, where the key-value pair is located

// Remeber when you don't have the key-value pair stated
// at the current block, and JavaScript goes searching for
// that value further out, at higher up blocks ?

// These "blocks" may be understood as different "lexical
// contexts".

// This next key-value pair is within the lexical context
// of the 'exec' function:

function exec() {
  const saudacao = "Falaaa blz man"; // another lexical context
  return saudacao //, console.log(saudacao) //THIS IS AN ANSWER THAT YOU WERE LOOKING FOR
}

// const saudacao = "Epaa !" // Already declared at same constant.
// If you used 'var' the last value would unwrite the previous one. 

// You can use same names if the associated variables belong
// to different lexical constants.

// If above name weren't defined within 'exec' function, JavaScript
// would go look for a value to 'saudacao' at the lexical context
// that is immediately above within the 'lexical hierarchy'.

// TODO: OBJECTS - nested groups of key/value pairs. 

const cliente = {
    name: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'rua muito legal',
        numero: 123,
        peso: 'da responsabilidade'
    },
    dadoImportante: 42
}

console.log(saudacao)
console.log(exec()) // Be sure that there aren't nested demands on console.log !

console.log(cliente)


