//! Solution 1:

function singleValuedStringConstructor1(symbol,repetitions) 
{
    let singleValuedString = ''

    for(let i = 0; i < repetitions; i++)
    singleValuedString += symbol

    return singleValuedString
}

//! Solution 2:

function singleValuedStringConstructor2(symbol,repetitions) 
{
    return Array(repetitions).fill(symbol).join('')
}

//! Solution 3:

function singleValuedStringConstructor3(symbol,repetitions) 
{
    return symbol.repeat(repetitions)
}

//! Testing solutions:

function repeatSymbolAtConsole(symbol,repetitions)
{
console.log(singleValuedStringConstructor1(symbol,repetitions))
console.log(singleValuedStringConstructor2(symbol,repetitions))
console.log(singleValuedStringConstructor3(symbol,repetitions))
}

repeatSymbolAtConsole('+',2) // returns "++"