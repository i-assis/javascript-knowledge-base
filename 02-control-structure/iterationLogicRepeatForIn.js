/! 'for-in' structure goes through the elements of an array or the attributes of an object / 

//* Just declaring a vector to make experiments on:
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

//! It's basically the same as for, but guided/delimited within an array.
//* Making an experiment on an ARRAY:
for (let i in notas) { //? How does JavaScript know this 'i' is the index ?
                       //? Is it because of 'in' ? YES ! See how it happens with objects down below.
                       //? i= index = array attribute
    console.log(i, notas[i])
    // At 1st iteration, 'i=0'.
    console.log(`The grade at position ${i + 1} is given by ${notas[i]} !`) //! POSITION NUMBERS WILL CONCATENATE TO STRINGS !
    console.log(`The grade at position ${(Number(i)+1)} is given by ${notas[i]} !`) //! See ?! Now it works !
    //! BIG DIFFERENCE: 'for-in' returns indexed no the same way as in usual 'for' !
}

//! THERE ARE MORE INTERESTING FORMS TO GO THROUGH AN ARRAY:
//! for int, map, reduce, filter, ... // <- consider them as well

//* Just declaring an object to make experiments on:
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

//* Making the experiment on an OBJECT:
for(let attributeTestName in pessoa) { //!The let is important: ensures the scope of 'attributeTestName' is limited to this 'for'.
    //! Once you used 'in', JavaScript you are going through all attributes.

    console.log(`Now we plucked the attribute: ${attributeTestName}, whose value is '${pessoa[attributeTestName]}'.`)
}

//* Another test:
//* Making the experiment on an OBJECT:
for( attributeTestName in pessoa) { //!The let is important: ensures the scope of 'attributeTestName' is limited to this 'for'.
    //! Once you used 'in', JavaScript you are going through all attributes.

    console.log(`Now we plucked the attribute: ${attributeTestName}, whose value is '${pessoa[attributeTestName]}'.`)
}

console.log(attributeTestName) //* This variable ended up leaking containing the lasr key/value pair processed
                               //* by the above 'for' loop !