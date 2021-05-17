//! 'break' and 'continue' are reminiscences of GOTO statements.
//! THEIR USE IS NOT RECOMMENDED, UNLESS ABSOLUTELY NECESSARY !

//* A vector to make a few experiments:
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) 
    {
        break //* Will happen at the 5th iteration of this loop.
              //* 'break' will steer the flow away from this 'for' block, 
              //*               the closest block of category either {for, while, switch} !
              //* 'break' DOES NOT ACT DIRECTLY ON THE 'if' block.
    }
    console.log(`Index ${x} points to the value '${nums[x]}'!`)
}

for (y in nums) {
    if (y == 5) {
        continue // The program will continue normally, after it jumps outta this loop !
                 //* 'continue' will steer the flow away from this 'for' block, 
                 //*               the closest block of category either {for, while, switch} !
                 //* 'continue' DOES NOT ACT DIRECTLY ON THE 'if' block.
    }
    console.log(`Index ${y} points to the value '${nums[y]}'!`)
}

ExternalLabelTest: //? Is 'externo' some variable ? No ! It is a LABEL.
for (a in nums) {  //* The 'externo' label is now associated to this for-loop.
                   //* JavaScript knows everything, just from the 'in'.

    for (b in nums)//* JavaScript knows everything, just from the 'in'.
    {
        if(a == 2 && b == 3) break ExternalLabelTest //! Now 'break' acts on the most external for-loop!

        console.log(`An ordinate pair on the way: (x,y) = (${a},${b}) !`)
    }
}
//! Avoid using this kind of structure !

console.log('End of the program !')