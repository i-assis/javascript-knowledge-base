/! 'Do-While' - This structure is rarely used ! / 

//! A 'Do-While' flow control structure ensures at least one repetition of the loop.

//! A 'Do-While' flow control structure inverts the declaration logic: the conditional comes last !

function getRandomIntegerBetween(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do //* Write 'do'.

//* Write the '{}'-delimited block containg all instructions that need be done.
{
    opcao = getRandomIntegerBetween(-1, 10)
    console.log(`The chosen option was -> ${opcao} <- !`)
}
//* Now declare the condition that  
while (opcao != -1)

console.log('Até a próxima!')