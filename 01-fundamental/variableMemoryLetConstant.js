// Attribution:

var a = 3

// NAMES ARE MOST IMPORTANT

// SOME NAMES COME FROM THE BUSINESS
// SOME NAMES COME FROM DEV  INTERNALS


// GENERAL RULE, USE:

let b = 4


// 'var' ALLOWS CHANGE within same scope, 'let' DOESN'T:

b = 40; // this line with 'let' causes program to fail
// without let, program works fine

var a = 30 // a changes without problems

console.log(a,b)


// not using anything also allows change:

a = 300;
b = 400;
console.log(a,b)

// const allows no change !

// const c = 5 // This line causes program to fail if 'c=5' isn't removed.

c = 50

// Use const when programming uder the functional paradigm !




// let, var, const = "reserved", like "I" in Mathematica
