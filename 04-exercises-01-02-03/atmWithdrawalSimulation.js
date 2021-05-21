//! This function tells which bill must go out as a according to
//! a current given withdrawal value.
function calculateBillValue(withdrawalValue) {
    if (withdrawalValue >= 100) {
        return 100
    }
    //* Do note these 'else if' need come at a certain sequence. 
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
function elaborateBillCount(counter100Bill, counter50Bill, counter10Bill, counter5Bill, counter1Bill) 
{
    let numberOfBills = '' //! At first, an empty string.

    if (counter100Bill > 0) {
        numberOfBills += `${counter100Bill} bill(s) of US$ 100. ` 
        //! Addition assingnment. Adds string when condition is true.
    }

    if (counter50Bill > 0) {
        numberOfBills += `${counter50Bill} bill(s) of US$ 50. `
    }

    if (counter10Bill > 0) {
        numberOfBills += `${counter10Bill} bill(s) of US$ 10. `
    }

    if (counter5Bill > 0) {
        numberOfBills += `${counter5Bill} bill(s) of US$ 5. `
    }

    if (counter1Bill > 0) {
        numberOfBills += `${counter1Bill} bill(s) of US$ 1. `
    }

    return numberOfBills //This is the string, fully built.
}

//! This function uses both 'calculateBillValue' and 'withdrawMoney'
//! to elaborate how many of each bill we need to fulfill a prescribed
//! amount.
function withdrawMoney(withdrawalValue) {
    //! At the start, all counters are set to zero.
    let counter100Bill = 0
    let counter50Bill = 0
    let counter10Bill = 0
    let counter5Bill = 0
    let counter1Bill = 0

    let billValue = calculateBillValue(withdrawalValue)
    console.log("One value assumed by 'billValue' is: " + billValue 
                + '.')
    //* This while gets its loop from another function !
    while (withdrawalValue >= billValue) {

            switch (billValue) {
            case 100:
                withdrawalValue -= 100 //! Subtraction assignment.
                counter100Bill++
                console.log(counter100Bill)
                break
            case 50:
                withdrawalValue -= 50 //! Subtracts the money.
                counter50Bill++ //! Adds the bill.
                console.log(counter50Bill)
                break
            case 10:
                withdrawalValue -= 10 //! Subtracts the money.
                counter10Bill++ //! Adds the bill.
                console.log(counter10Bill)
                break
            case 5:
                withdrawalValue -= 5
                counter5Bill++
                console.log(counter5Bill)
                break
            case 1:
                withdrawalValue -= 1
                counter1Bill++
                console.log(counter1Bill)
                break
        }

        billValue = calculateBillValue(withdrawalValue) 
        //* This line is responsible for updating 'billValue'
        //* at 'above' while.

    }
    return elaborateBillCount(counter100Bill, counter50Bill, counter10Bill, counter5Bill, counter1Bill) 
    //! Do note the return consists of another function.
}

console.log(withdrawMoney(479));

