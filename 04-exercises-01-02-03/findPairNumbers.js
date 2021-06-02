function findPairNumbers (lowerBound, upperBound) {
    for (let i = lowerBound; i <= upperBound; i++)
    {
        if (i%2==0) 
        {
            console.log(i)
        }
    }
}

findPairNumbers(0,80)