for (var i=0; i<10; i++) {
    console.log(i)
}

// 'var' doesn't have block scope, therefore
// it is known here, outside the 'for' loop.




// The loop was ended when i=10 and caused
// the loop to stop:
console.log('i=',i)