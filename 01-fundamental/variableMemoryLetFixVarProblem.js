// This fixes the problem from 'usingVarInLoopProblem'

funcs = [];

for (let i=0; i < 10; i++) {
    funcs.push( function() {
        console.log(i) 
    }
    )
    
}

funcs[2]()
funcs[6]()
funcs[8]()


// 'let' now features a memory of which where the values
// of 'i' at each iteration of the 'for' loop

// Concept of 'closure': every javascript function is
// a closure ! A closure is a place where the function
// "is conscious ??!!" if the fact it has been defined.

