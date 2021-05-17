
/! First defining an array on which experiments will be performed. /
const fabricantes = ["Mercedes", "Audi", "BMW"]

//* Experiment #1 -  Using 'imprimir' as a callback function, called whenever the event
//* 'forEach' processes a new element from the array.
function imprimir //! Just declaring an ordinary function using LITERAL NOTATION.
(nome, indice) //! These arguments are completely dumb and unrelated to anything from array 'fabricantes'.
{ 
    console.log(`${indice + 1}. ${nome}`) //* The only thing this function does is to concatenate a string using the input.
}
//* Now the event that uses 'imprimir' as a callback function:
fabricantes.forEach(imprimir) //! 'forEach' does all the magic of relating: 1st input -> array content, 2nd input -> array index !
                              //! This single line is, thus, the essence of this program.

//* Experiment #2 - Declaring the callback function inside triggering event:
fabricantes.forEach( fabricante => console.log(fabricante)) //! When 'forEach' only receives one input,
                                                            //! it associates: 1st input -> array content !
// As it's been explained, this function only returns array content.

//* Experiment #3 - Variation of Experiment #2 explains the 'forEach' Magic !
fabricantes.forEach
( 
    (fabricante, indiceArray) => console.log(String(indiceArray) + '.', fabricante)
) //! When 'forEach' receives two inputs, the association is just like at Experiment #1 !

