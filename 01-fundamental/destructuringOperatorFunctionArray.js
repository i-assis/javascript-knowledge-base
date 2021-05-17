function rand([min = 0, max = 1000]) { //! Array as an input.
//! Once again, using standard values.
    if (min > max) [min, max] = [max, min]

    const valor = Math.random() * (max - min) + min

    return Math.floor(valor)

}

//! Order of parameters inverted.
console.log( rand( [50, 40] ) ) //! Nothing about who is 'min' or 'max' !
//! The sequence is unrodered, 1st came the max, then the min !

//! Only 'max' parameter !
console.log(rand( [992] ) ) //* program will just use zero as 'min' parameter

//! Only second value !
console.log(rand([, 10]))

//! Empty array as an input !
console.log( rand( [ ] ) )

//! Array is expected at the input ! This will return undefined !
console.log(rand())


//* Use all this to extract data from arrays without the need
//* of actually going into an object.

