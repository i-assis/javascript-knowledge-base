const imprimirResultado = function(nota) {

    if(nota >= 7) { //* This block is well delimited by '{}'.

        console.log('Aprovado!')

    }

    //! I'm really liking this format, really clarifies independence between different conditional blocks.
    
    else {  //* This block is well delimited by '{}'.

        console.log('Reprovado!')

    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') //! CAREFUL: the 'else' was TOO GENERIC, not well-setup, this is a NICE exception !

//! TRYING A WORKAROUND -> The 'else' is so bad, this code can't be any good if we use it.

const imprimirResultado2 = function(nota) { //! You should be able to do some kind of type annotation, like in TypeScript.
                                            //* Do note that stuff like 'function(number: nota)' only works in TypeScript.
                                            //* This is a drawback of working with a Weakly Typed Language.

    if(nota >= 7 && typeof nota === typeof 7) { //* This block is well delimited by '{}'.

        console.log('Aprovado!')

        //? The improvement made it better, but the 'else' remains too generic.
        //? A more drastic improvement is needed.

    }
    
    else {  //* This block is well delimited by '{}'.

        console.log('Reprovado!')

    }

    //* In both cases above, you could use 'if(...)' and 'else(...)' without delimiting with '{}'
    //* because there was only one code sentence, by coincidence.
    /! Still, by standard, it's better to delimit the blocks as clearly as possible. /

}

imprimirResultado2(10)
imprimirResultado2(4)
imprimirResultado2('Epa!') //! CAREFUL: the 'else' was TOO GENERIC, not well-setup, this is a NICE exception !