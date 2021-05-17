//! Relational operator - always true or false

//! commonly found in testing blocks

//! sometimes not only the value must be equal, the TYPE also needs be so

//! WHY ' OUTSIDE PARENTHESIS ?!? -> it's just for console exhibition
console.log('01)', '1' == 1) //* binary, in-fixed, operator
//* compares values, not types

console.log('02)', '1' === 1)
//* different cuz one is string, the other, number

console.log('03)', '3' != 3)
//* false, cuz, different types aside, tboth have same value

console.log('04)', '3' !== 3)
//* true, cuz different types aside

console.log('05)', 3 < 2)
//* false, obviously, no catch

console.log('06)', 3 > 2)
//* true, obviously, no catch

console.log('07)', 3 <= 2)
//* false, obviously, no catch

console.log('08)', 3 >= 2)
//* true, obviously, no catch

const d1 = new Date(0) // standard JS date = 01 jan 1970 //* same date for many languages out there
const d2 = new Date(0) // 
console.log('09)', d1 === d2) //* both variables are being take from the same reference, so its ok
//! the program, in this case, is just comparing these 2 memory addresses 

console.log('10)', d1 == d2) //! this is also ok, same thing as above

console.log('11)', d1.getTime() === d2.getTime()) //! also, ok -> just getting 2 numbers, given in miliseconds
console.log('11.1)', d1.getTime() == d2.getTime()) //! if above is ok, this is ok as well

//* TESTING JS INTERNALS
console.log('12)', undefined == null)  //TRUE, //! SAME VALUE
console.log('13)', undefined === null) //false, //! SAME VALUE, BUT ---D I F F E R E N T--- TYPES

//! GENERAL RULE -> USE '===' -> is safer, DON't MIX UP diff types