//! TWO FUNDAMENTAL KINDS OF CONTEXT:
//! javascript + frontend = browser
//! javascript + backend = node

//! BROWSER EXECUTION SERIES:

//! 1. careful with whom 'this' refers to
//! 
//! 2. type a function like 'f()' = boolean affirming whether or not said function exists
//!
//!
//! REWATCH THE LECTURE AND REDO THE EXAMPLES TO KNOW MORE.

//! Now a series of experiments using ordinary NodeJS:
  
let a = 3

//* Up to this point, we won't be able to find:
console.log(this.a) //* 
console.log(global.a) //* 'global' equivalent to 'window' when coding from browser
//! both of these will be undefined

//* Now, if you declare it ...
global.b = 123
//* it is found, right away:
console.log(global.b)

//* Same thing for 'this', just declare:
this.c = 456
//* and it will be found:
console.log(this.c)
//* as an equivalent alternative to above line:
console.log(module.exports.c)
//* ... and this is how you check equivalence:
console.log(module.exports === this) //! this returns 'true'

//! In node, each .js/.ts file is a module !
//* So, in this module, up to this point, try:
console.log(module.exports) //! vars declared only at global won't show up !

//! In web, a buch or files is mashed up together, thisputing the 'global' scope.

//* Now, another experiment:
this.d = false
this.e = 'teste'
console.log(this) //! Watch, has 'this' been incremented ? Yes ! It includes 'd' and 'e' now.
//* This time, 'module.exports' is defined in a single block:
module.exports = {e: 456, f: false, g: 'teste'} 
console.log(module.exports) //! Do note previous definition of object has been overwritten !

//! CREATING A VARIABLE WITHOUT 'var' OR 'let' = INSERTION IN 'global'/'window' object:
abc = 333 //! avoid this at all cost ! AVOID INSERTING NEW SUFF AT GLOBAL SCOPE !
console.log(global.abc) // ? console.log(global) = BIG OBJECT

//! Never forget: variables are case-sensitive.


//! KNOW IN WHICH RUNTIME YOU ARE EXECUTING JAVASCRIPT, know specificities: browser (front), node (back), crazy-cloud, etc.
