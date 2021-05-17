
//! Defining a vector to use at every experiment:
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//* First, not using a callback: (Easiest way to understand.)
const notasBaixas1 = [] //! Do notice an empty array has to be defined first, and outside the loop.
for //* structure
(let i in notas)  //* condition
{ //* procedure
    if //* structure
    (notas[i] < 7) //* condition
    { //* procedure
        notasBaixas1.push(notas[i]) //! How to insert new elements into any array.
    }
}

console.log(notasBaixas1)

//* Second, using a callback:
const notasBaixas2 = notas.filter( //! With respect to boolean variables, 'filter' returns 'true' cases.
    function //* structure
    (nota) //* argument(s) 
    //! JAVASCRIPT AUTOMATICALLY UNDERSTANDS 'nota' AS CURRENT ARRAY ELEMENT !!
    { //* procedure
    return nota < 7
    }
)

console.log(notasBaixas2)

//* Third, using an arrow function:
const notasMenorQue7 = nota => nota < 7 //* Condition written as arrow function.
const notasBaixas3 = notas.filter(notasMenorQue7) //* Filter according to arrow function.
                                                  //! JAVASCRIPT AUTOMATICALLY UNDERSTANDS 'nota' AS CURRENT ARRAY ELEMENT !!
console.log(notasBaixas3)