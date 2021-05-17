const funcsTest =[]

for (var i = 0; i < 10; i++) {
    funcsTest.push(i) // funcs is array object, thus '.push' is applyable 
}

console.log(funcsTest)

// If you want to manually grab something from the array AND send it to
// console:
console.log(funcsTest[2])
console.log(funcsTest[8])

// ABOVE CODE IS OK

const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push( function() { //NOTE THIS FUNCTION NEEDS NO INPUT
                             //var 'i' already exists with function scope, 
                             //thus JS will just use it.

        console.log('i=',i) // Don't understand the why of this !
        
    }        
        ) // funcs is array object, thus '.push' is applyable 
}

console.log(funcs) // I pushed functions into the array, not the things that console.log exhibits !

// // ARRAY INDEXES START AT ZERO !!!

funcs[2]() // is this just an array retrieval ? NO ! It retrieves from array AND 
funcs[8]() // should print the input

// SOOOO, funcs is an array of functions. And we are looking to execute a
// function that has been singled out from an array.

// Since var is restricted too the function, it will return just the last value at
// address 'i' !

// This is a classical problem in JS, solved by the new word "let".

// Be very attentive to the difference between 'funcsTest' and 'funcs'.

