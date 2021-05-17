console.log('a=', a) // Now, 'a' is undefined, but exists.

var a = 2

console.log('a=', a) // Now, 'a' is defined according to line above.

// Where is the hoisting ?
// It happens because above code is the same as:

// Starting it all again:

a = undefined // This doesn't free up memory !

// Freeing up the memory is mostly implicit in JS.
// More info here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management

// If a variable is created with 'var' it can be reassigned, but it 
// can't be deleted.
// More info on this: https://stackoverflow.com/questions/1596782/how-to-unset-a-javascript-variable

var a
console.log('a=',a)
a = 2
console.log('a=',a)

// See ? it's the same as if 'var a' had been hoisted all the way to the top.

// Another experiment. First:
a = undefined;

//Trying the same with a function:
function teste() {
   console.log('a=',a)
   var a = 2
   console.log('a=',a)
}
// Executing the function:
teste() // Check console, result is the same.

// When you use 'let', HOISTING DOES NOT HAPPEN !
console.log('b=',b)
let b = 2
console.log('b=',b) // An error will appear: 'ReferenceError: Cannot access 'b' before initialization'
