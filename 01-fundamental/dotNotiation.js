// A WAY TO ACCESS MEMBERS OF A FUNCTION/OBJECT
console.log(typeof console)

// we are retrieving the MEMBER 'log' inside console
// now, what is type of 'log'

// now, try:
console.log(typeof log) //returns undefined
console.log(typeof console.log) //returns 'function' !!!


console.log(Math.floor(6.1))
console.log(Math.ceil(6.1))

// *you can know everything about this stuff:
console.log(typeof Math)
console.log(typeof Math.floor)
console.log(typeof Math.ceil)

//dynamic creation of new members:
const obj1 = {}

obj1.nome = 'Bola' // ! dynamic creation of members does not count as changing a variable !
                   // ! a 'const' can never be changed, still...

// obj1['nome'] = 'Bola2'

console.log(obj1.nome)

// * Obj = name of function
// * receives an attribute 'nome' as a parameter
function Obj(nome) {
    this.nome = nome
    // ! That is, the name that was received as an input
    // ! will be made available for whomever instatiates this function which is also
    // ! an object.
    // ! 'this' is here to make this.nome a public member !
    // ! If you used var, this would be restricted to function scope.

    // ! You can do the same with a function! Make it public !
    this.testFunction = function() {
        console.log('The function has been executed !')
    }
}

const obj2 = new Obj('cadeira') // ! the function just added one key/value pair !; the new object was changed by the function !

const obj3 = new Obj('mesa') // !

console.log(obj2.nome) // ! Pay attention to what happened here !
console.log(obj3.nome)
console.log(obj3.testFunction()) //Undefined cuz of nested usage of console.log !
obj3.testFunction() // This works !
