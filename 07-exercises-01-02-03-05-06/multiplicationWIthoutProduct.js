
//! Solution 1:

function multiply2NumbersVersion1(factor1, factor2) 
{
let factor1PlusITimesFactor2 = 0

for(let i = 0; i < factor2; i++)
factor1PlusITimesFactor2 += factor1

return factor1PlusITimesFactor2
}

//! Solution 2:

function multiply2NumbersVersion2(factor1, factor2) 
{
if (factor1 === 0 || factor2 === 0) return 0

//else //! This 'else' may be omitted.
return factor2 === 1 
? 
factor1 
:
//! Beware asynchronous programming ahead: 
factor1 + multiply2NumbersVersion2(factor1, factor2-1)
}

//! Solution 3:

function multiply2NumbersVersion3(factor1, factor2) 
{

if (factor1 === 0 || factor2 === 0) return 0

const largestFactor = Math.max(factor1, factor2)
const smallestFactor = Math.min(factor1, factor2)

//! Beware asynchronous programming ahead:
function recursivelyMultiply(largestFactor, smallestFactor) 
{
return (
smallestFactor === 1 
?
largestFactor 
:
largestFactor + recursivelyMultiply(largestFactor, smallestFactor-1)
)
}
return recursivelyMultiply(largestFactor, smallestFactor )
}

//! Showing every solution at the console.

function multiply2FactorsShowConsole(factor1, factor2)
{
    console.log(multiply2NumbersVersion1(factor1, factor2))
    console.log(multiply2NumbersVersion2(factor1, factor2)) 
    console.log(multiply2NumbersVersion3(factor1, factor2)) 
}
 
//! A few test cases:
multiply2FactorsShowConsole(5, 5) // returns 25
multiply2FactorsShowConsole(0, 7) // returns 0