// Void Return Function

function imprimirSoma(a,b) {
// this is the body

console.log(a+b)

}

imprimirSoma(2,3)

imprimirSoma(2) // JS will try to do this.

imprimirSoma(2, 10, 4, 5, 6, 7, 8, 9) // Will only read 1st and 2nd inputs.

// 'function' => another JS-private word

// Function that returns something

function soma(a, b = 12) {
return a + b
}

console.log(soma(2,3))

console.log(soma(3))

console.log(soma())

// You CANT chanhe a function mid-runtime, javascript
// WILL FIND IT AND USE IT:

function somaNEW(a = 12, b = 12) {
    return a + a + b
    }
    
    console.log(somaNEW(2,3))
    
    console.log(somaNEW())

    