
/** 
* * PROBLEM -   
* ? Write a function that calculates, according to
* ? Euclid's division algorithm, the result and the
* ? remainder of the division between to scalar integer
* ? numbers.
* ? 
*/

function divisao (dividendo, divisor) 
{
    console.log(
        "Resultado: " + Math.floor(dividendo/divisor)
        );

    console.log(
        `Resto: ${dividendo % divisor}`
    );
}

divisao(11, 4)