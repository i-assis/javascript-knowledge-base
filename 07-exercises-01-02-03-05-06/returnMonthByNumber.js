function monthNumberChecker(numberFrom1To12) {

    if ( numberFrom1To12 < 1 ) 
    {
        console.log("Number smaller than 1. Please, insert an integer number from 1 to 12 ! ")
    } 
    else if (numberFrom1To12 > 12) //! Not the same as "elseif".
    {
        console.log("Number greater than 12. Please, insert an integer number from 1 to 12 ! ")
    }
    else if (Number.isInteger(numberFrom1To12) === false)
    {
        console.log("Number is not an integer. Please, insert an integer number from 1 to 12 ! ")
    }
    else
    {
        return numberFrom1To12
    }

}

function monthNumberToName(numberFrom1To12) 
{
   if (typeof monthNumberChecker(numberFrom1To12)  !== "undefined" )
    {
   const numberFrom1To12Verified = monthNumberChecker(numberFrom1To12)

   const arrayOfMonths = [
       'January',
       'February',
       'March',
       'April',
       'May',
       'June',
       'July',
       'August',
       'September',
       'October',
       'November',
       'December',
    ]

   return console.log(`The input number corresponds to the month of ${arrayOfMonths[numberFrom1To12Verified-1]} !`)
    
    }

    else{}
}

monthNumberToName(0)
monthNumberToName(10)
monthNumberToName(10.5)
monthNumberToName(13)

