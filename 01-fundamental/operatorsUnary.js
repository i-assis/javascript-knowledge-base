//! basically INCREMENT and DECREMENT


let num1 = 1
let num2 = 2

num1++ //! post-fixed
console.log(num1)

--num1 //! pre-fixed :::> HIGHEST PRECEDENCE WHEN COMPUTER-EVALUATED
console.log(num1)
//* num1 is now back where it started

console.log(++num1 === num2--) //* equality in value + type, simultaneous pre-fixed, post-fixed
//! above is true; comparison operator returns boolean by default

//! PRE++ done BEFORE comparison <-> num2 was UNCHANGED
//! POST-- done AFTER comparison <-> num2 was CHANGED only AFTER comparison

console.log(num1 === num2) //? ::::> 

//! INCREMENTS and COMPARISON operators don't mix !!!  :::> generalized this to everything  !

//! if programmer has to squint to understand, it's bad !

