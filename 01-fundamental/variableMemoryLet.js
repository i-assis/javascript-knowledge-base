var numero = 1;

{
let numero = 2;
console.log('dentro =', numero) // Preference goes to most internal scope.
}

console.log('fora =', numero)
// 2 diff values can co-exist using 'let'

// AGAIN !
let num1 = 12;

{
let num2 = 22;
console.log('dentro =', num2) // 'num1' is undefined here !
}

console.log('fora =', num1)
// 2 diff values can co-exist at !different scopes! 
// using 'let'

