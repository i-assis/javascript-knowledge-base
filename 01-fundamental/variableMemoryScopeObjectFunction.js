{
    {
        {
            { 
                var sera = 'Será ?!?!?' 
            }
       }
    }
}

console.log(sera)

// The block structure where var 'sera' is doesn't
// matter.

// Scope: place in the code where the variable stays
// visible.

// { } = block

// Normally variables are valid only within the block
// where they are declared.

function teste() {
    var local = 123
    console.log(local)
}

teste()

// console.log(local) // Reference Error: 'local is not defined'! !!!!!

// VAR is either valid within same function or GLOBAL.

// GLOBAL: not a good idea: it can be overwritten without
// warning !