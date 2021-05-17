const peso1 = 1.0 // This doesn't go as float.

const peso2 = Number('2.0') //This is readable. Also not as float.

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //! Boolean available by default!
console.log(Number.isInteger(peso2)) //! Boolean available by default!

const avaliacao1 = 9.871 // float
const avaliacao2 = 6.871 // float

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2)) //! conversion to binary -> string
console.log(typeof media)
console.log(typeof Number)