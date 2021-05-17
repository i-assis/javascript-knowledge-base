
//! May look like Just an ordinary function declaration:
const soma = function //* Nothing after 'function' -> it's anonymous !
(x, y) 
{
    return x + y
}

//! An example of anonymous function:
const imprimirResultado = 
function // It's anonymous.
(a, b, operacao = soma) //! Actually calling above function as an input argument. 
{
    console.log(operacao(a, b))
}

imprimirResultado(3, 4) //? Is third argument optional ?
                        //? This prints nothing at the console ?

imprimirResultado(3, 4, soma) //! Normal usage of 'imprimirResultado'.

imprimirResultado(3, 4,
    //* Declaring an anonymous function in ordinary syntax as an argument. 
    function (x, y) 
    {
    return x - y
    }
)

imprimirResultado(3, 4,
    //* Declaring an anonymous function in ARROW FUNCTION syntax as an argument. 
    (x, y) => x * y    
    )

    
const pessoa = {
    falar: function //! An anonymous function inside an object, at attribute/key 'falar'.
            () 
            {
            console.log('Opa')
            }
}
// This executes the function:
pessoa.falar()