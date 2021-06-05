//! Solution 1:

function singleValuedVectorConstructor1(item, numberOfRepetitions) 
{
    let singleValuedVector = []
    
    for (let i = 0; i < numberOfRepetitions; i++)
    singleValuedVector.push(item)
    
    return singleValuedVector
}

//! Solution 2:

function singleValuedVectorConstructor2(item, numberOfRepetitions) 
{ return Array(numberOfRepetitions).fill(item) }

//! Exhibiting solutions at the console:

function arrayAtConsole(item, numberOfRepetitions)
{
    console.log(singleValuedVectorConstructor1
    (item, numberOfRepetitions) )

    console.log(singleValuedVectorConstructor2
    (item, numberOfRepetitions) )
}

arrayAtConsole('code', 3) // returns ["code", "code"]
arrayAtConsole(7, 3) // returns [7, 7, 7]