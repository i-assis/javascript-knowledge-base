function calculateDebt(month, debtValue){
    if(month > 0 && month < 13) {
        delay = month - 1
        return (debtValue * ((1 + (5/100))**delay)).toFixed(2) 
        //! Decimal rounding. Remember **=exponentiation.
    } 
    else 
    {
        return 'Invalid month.'
    }
}

console.log(calculateDebt(4, 100))