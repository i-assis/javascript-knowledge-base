let valor // not initialized, returns 'undefined'
console.log(valor)

// console.log(valor2) // unidefined IS DIFFERENT FROM "is not defined !"

valor = null // not pointing to any memory address ! absence of value
console.log(valor)


// DON'T LET ANYTHING BE DEFINED BY 'undefined'
// 'undefined' should only come from JS internals


// set variable to null ceases all pointing: be it towards functions,
// addresses, etc.

// console.log(valor.toString) // Error ! Be certain that 


// {} não é null ! it's only an object without attribute
const produto = {} 
console.log(produto)
console.log(produto.preco)

// console.log(produto.preco.a) // ERROR: you don't have the attribute 
// of something that hasn't been defined. JavaScript will go "undefined"
// only one layer below. Not 2.

// Object: key/value pair. YOU CAN DINAMICALLY ADD ATTRIBUTES TO OBJECT:

produto.preco = 3.5
console.log(produto.preco)

produto.preco = undefined // NOT COOL, AVOID THIS ATTRIBUTION
console.log(!!produto.preco) // RETURNS FALSE because was set as undefined
// delete produto.preco // THIS makes produto back into an empty object
console.log(produto)

produto.preco = null // NO PRICE ATTRIBUTE, not the same as 'free'

// Free product would mean price = 0.
console.log(!!produto.preco) // both null and undefined read false when read
// as type boolean

console.log(produto)








