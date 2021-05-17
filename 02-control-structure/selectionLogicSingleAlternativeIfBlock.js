function teste1(num) {
    if(num > 7)
        console.log(num)
    
    console.log('This console message is gonna show up anyway..') //! JavaScript has no special consideration for indentation !
                                                                  //! Tab this 'console.log' line however you want.
}

teste1(6) //* Console message displayed once.

teste1(8) //* Console message displayed twice.

//! Proving indentation doesn't matter: a ';' destroys everything.

function teste2(num) {
    if(num > 7); { //! This is just an experiment, don't use ';' in ANY control structure ! 
                   //! This block has nothing to do with the 'if'.
                   //! Above 'if' test -> just an inert line of code. 
        console.log('Regardless IF was true, the number is: ' + num)
    }
}

/! STILL, the 'console.log' message appears every time, regardless of if-condition returning 'true' /
teste2(6)
teste2(8)

//! A 3rd test that actually happens as expected:

function teste3(num) {
    if(num > 7)  { //* Now the if-block is well delimited.
        console.log('Surely IF was true, the number is: ' + num)
    }

    //! Also isolate the block for the stuff that is going to happen anyway:
    {
        console.log('I want to publish this message anyway.')
    }
}

/! The 'console.log' message appears only when if-condition returns 'true' /
teste3(5)
teste3(9)
