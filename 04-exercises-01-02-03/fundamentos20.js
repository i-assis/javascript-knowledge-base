//! This function tells which bill must go out as a according to
//! a current given withdrawal value.
function calculateBillValue(withdrawalValue) {
    if (withdrawalValue >= 100) {
        return 100
    } 
    else if (withdrawalValue >= 50) {
        return 50
    } 
    else if (withdrawalValue >= 10) {
        return 10
    } 
    else if (withdrawalValue >= 5) {
        return 5
    } 
    else if (withdrawalValue >= 1) {
        return 1
    }
}

//! This function counts the bills according to the way
//! set by 'calculateBillValue'.
function withdrawMoney(withdrawalValue) {
    //! At the start, all counters are set to zero.
    let counter100Bill = 0
    let counter50Bill = 0
    let counter10Bill = 0
    let counter5Bill = 0
    let counter1Bill = 0

    let billValue = calculateBillValue(withdrawalValue)

    while (withdrawalValue >= billValue) {
        switch (billValue) {
            case 100:
                withdrawalValue -= 100 //! Subtraction assignment.
                counter100Bill++
                break
            case 50:
                withdrawalValue -= 50 //! Subtracts the money.
                counter50Bill++ //! Adds the bill.
                break
            case 10:
                withdrawalValue -= 10 //! Subtracts the money.
                counter10Bill++ //! Adds the bill.
                break
            case 5:
                withdrawalValue -= 5
                counter5Bill++
                break
            case 1:
                withdrawalValue -= 1
                counter1Bill++
                break
        }

        valorNota = calculateBillValue(withdrawalValue)

    }
    return elaborateBillCount(counter100Bill, counter50Bill, counter10Bill, counter5Bill, counter1Bill) 
    //! Do note the return consists of another function.
}



//! This function uses both 'calculateBillValue' and 'withdrawMoney'
//! to elaborate how many of each bill we need to fulfill a prescribed
//! amount.

function elaborateBillCount(counter100Bill, counter50Bill, counter10Bill, counter5Bill, counter1Bill) 
{
    let numberOfBills = '' //! At first, an empty string.

    if (counter100Bill > 0) {
        numberOfBills += `${counter100Bill} bills of US$ 100. ` 
        //! Addition assingnment. Adds string when condition is true.
    }

    if (counter50Bill > 0) {
        numberOfBills += `${counter50Bill} bills of US$ 50. `
    }

    if (counter10Bill > 0) {
        numberOfBills += `${counter10Bill} bills of US$ 10. `
    }

    if (counter5Bill > 0) {
        numberOfBills += `${counter5Bill} bills of US$ 5. `
    }

    if (counter1Bill > 0) {
        numberOfBills += `${counter1Bill} bills of US$ 1. `
    }

    return numberOfBills
}

console.log(withdrawMoney(270));
