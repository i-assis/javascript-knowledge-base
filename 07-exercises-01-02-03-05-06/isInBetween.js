/*
Create a function that gets four values at the input
(number, minimum, maximum, inclusive) and returns whether
the parameter "number" is in-between the minimum and the maximum.
If inclusive = "true" it means that you ether have "number" = "maximum"
or "number" = "minimum". If "inclusive" is not given at the input,
then "inclusive" = "false". Thus the logic is exclusive, not distinguishing whether "number" = "minimum" or "number" = "maximum".
*/


//! Solution 1:
function isItInBetweenVersion1Backend
(minimum, maximum, number, inclusive = false) 
    {
    if(inclusive) 
    return number >= minimum && number <= maximum
    else //!This 'else' may be omitted.
    return number > minimum && number < maximum
    }

//! Solution 2:
function isItInBetweenVersion2Backend
(minimum, maximum, number, inclusive = false) 
    {
    return inclusive ? 
    number >= minimum && number <= maximum 
    : 
    number > minimum && number < maximum
    }

//! Printing each solution at the console.

function isItInBetweenFrontEnd
(minimum, maximum, number, inclusive = false) 
{
    console.log(
    isItInBetweenVersion1Backend
    (minimum, maximum, number, inclusive)
    //! Do not re-declare standard values !
    )
    console.log(
    isItInBetweenVersion2Backend
    (minimum, maximum, number, inclusive)
    )
}

//! Testing Solutions #1 and #2:
isItInBetweenFrontEnd(10, 100, 50) // will return true
isItInBetweenFrontEnd(16, 100, 160) // will return false
isItInBetweenFrontEnd(3, 150, 3) // will return false
isItInBetweenFrontEnd(3, 6, 6, true) // will return true
