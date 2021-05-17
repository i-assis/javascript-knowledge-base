
/** 
* * PROBLEM -   
* ? Write a function that calculates the power
* ? of a scalar number using two different
* ? methods.
* ?
* ? 
*/


function expoente (base, expoente) {
    
    //! Method 1
    let resultado = Math.pow(base, expoente) //* This borrows from JavaSC
    
    //! Method 2
    resultado = base ** expoente

    return resultado
}

console.log(expoente(2, 3))