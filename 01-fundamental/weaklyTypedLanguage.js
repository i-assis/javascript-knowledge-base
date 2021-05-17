let anything = 'cool' //This is not type 'any'!

console.log(typeof anything)

const Any = 'Legal'
console.log(Any)
console.log(typeof Any)

const any = 3.1516 //! 'const' is case-sensitive ! This reads like a NEW variable.

//! CONVENTION PROPOSITION: type in the sense of memory discipline (let, var, const); type in the sense of 'class'

console.log(any)

console.log(typeof any)

//! Avoid everything GENERIC
let valor = ''
let numero = 1
let pqp = false // Produto Químico Perigoso... kkk
//! LIST BAD: test, attempt, working, final, etc.