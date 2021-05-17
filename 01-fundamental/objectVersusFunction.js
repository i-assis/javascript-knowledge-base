// This should return function: a function that returns what is an object in JS:
console.log(typeof Object)

// This is instatiating a new JS Object. The new instance of Object has type 'Object':
console.log(typeof new Object) // CREATING AN INSTANCE OF A FUNCTION FROM JAVASCRIPT'S OWN API !

// Even if you do this:
// Object = undefined; // since 'Object' is a protected word, you should not do this.

console.log(typeof Object)

// Doubt cleared ! Object, if not preceded be 'new' is function, Object() is always an object.
// Tests here were conclusive.
console.log(typeof Object())
console.log(typeof new Object())
// JavaScript creates objects using functions !


// Now, something different. TRY THE SAME WITH FUNCTION:
const Cliente = function () {}
console.log(typeof Cliente) // This will return function.
console.log(typeof new Cliente) // This will return object. // CREATING AN INSTANCE OF A FUNCTION YOU DEFINED !
console.log(typeof Cliente()) // TODO: This will return UNDEFINED.
console.log(typeof new Cliente()) // This will return object. 

// INTERNALLY, CLASSES ARE FUNCTIONS
// Try the same with class:
// CREATING AN INSTANCE OF A FUNCTION FROM A CLASS YOU DEFINED !
class Produto {} // Class notation EchmaScript2015 or ES6 -> this can also be used
                 // to group variables as one may freely wish.
console.log(typeof Produto) // This will return function.
console.log(typeof new Produto) // This will return object.
// console.log(typeof Produto()) // This will return function. class
console.log(typeof new Produto()) // This will return object. 

// Writing {} already means you are instantiating and object.

// Every instance of a FUNCTION/OBJECT/CLASS has its own particular variables !

// TODO: class is a syntax detail ! You are really using functions.

// The JavaScript "constructor function" makes the connection class--function. 





