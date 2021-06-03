function greaterOrEqualBackend(firstNumber,secondNumber)
{
    if (typeof firstNumber !== typeof secondNumber)
    {
        return false
    }
    else
    {
        return firstNumber >= secondNumber
    }
}

function greaterOrEqualFrontend(firstNumber,secondNumber)
{
    console.log(greaterOrEqualBackend(firstNumber,secondNumber))
}

greaterOrEqualFrontend(0,0)
greaterOrEqualFrontend(0,'0')
greaterOrEqualFrontend(3,1)