
/*
Write a function that accepts either a boolean or a numeric value at
the InputDeviceInfo. If the provided parameter is boolean, the function
returns the inverse of the given parameter; per example, if the function
gets "false" at the input, it returns "true" at the output; if it gets 
"1" at the input, it returns "-1" at the output. Now, if it gets, at the
input, anything that is neither of type boolean nor of type number,
return a message saying:
"I was expecting either type boolean or number, but you gave me an input of type XXXX !"
Where XXXX = the type of variable given at the input.
*/

function invertEitherStringOrBooleanBackend(input) 
{
const inputType = typeof input
if (inputType == "boolean") return !input
else if (inputType == "number") return -input
else return `I was expecting either type "boolean" or "number", but you gave me an input of type "${inputType}"!`
}

function invertEitherStringOrBooleanFrontend(input)
{
    console.log( invertEitherStringOrBooleanBackend(input) )
}

invertEitherStringOrBooleanFrontend(true)
invertEitherStringOrBooleanFrontend("6")
invertEitherStringOrBooleanFrontend(-500)
invertEitherStringOrBooleanFrontend("programming")