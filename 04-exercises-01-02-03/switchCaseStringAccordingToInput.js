


function sellFruit (fruit) {
    switch (fruit) {
        case 'apple':
            console.log("We don't sell that fruit around here.")
            break
        case 'kiwi':
            console.log('Kiwis are currently scarce.')
            break
        case 'watermelon':
            console.log('Here it is, 3 dollars a pound.')
            break
        default:
            console.log('Error, fruit not defined.') 
            //! This is a standard answer.
    }
}

//! Now, a few test cases:
sellFruit('apple')
sellFruit('kiwi')
sellFruit('watermelon')
sellFruit('groundbeef')