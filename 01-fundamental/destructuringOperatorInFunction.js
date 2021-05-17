function rand({ min = 0, max = 1000 }) {//* Goes into the object and plucks these two attributes from inside it !
    // ! ABOVE USES STANDARD PARAMETERS + destructure operator
    // ! STANDARD PARAMETERS = used when no other value is declared
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// ! MORE INPUT THAN NECESSARY
const object = { max: 50, min: 40, nadaver: 'jogo'} // ! See how it still works ?
console.log(rand(object))

// ! LESS INPUT THAN NECESSARY
const object2 = { max: 50} // ! See how it still works ?
console.log(rand(object2))

// ! EMPTY OBJECT AS INPUT
console.log(rand( {} ) )

// ! TOTALLY EMPTY INPUT
console.log( rand( ) ) // * This can't happen ! An object is needed at the input.

