function displayNow(i) 
{        
    setTimeout(
    () =>
    {
        console.log(i)
    }
    , 1000*i )
}

//! A few test cases:
const lowerBound = 1
const upperBound = 3

//! Solution 1:

for (let i = lowerBound; i <= upperBound; i++) 
{
    setTimeout( () => { console.log(i) }, 1000*i)    
}

//! Solution 2:

for (let i = lowerBound; i <= upperBound; i++) 
{
    displayNow(i) 
}

//! Notice asynchronous code in action !

//! Solution 3:
function progressiveCounter(lowerBound, upperBound)
{
    //i=0
for (let i = lowerBound; i <= upperBound; i++)
{
    displayNow(i)
}
}

progressiveCounter(lowerBound,upperBound)