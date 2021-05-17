

/** 
* * PROBLEM -   
* ? Write a function that classifies a student as
* ? either "passed" or "failed"
* ? 
* ? 
* ? 
*/

function classificaAluno(nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40) 
    {
        console.log(`Aprovado com nota ${notaCorrigida}`);
    } 
    else 
    {
        console.log(`Reprovado com nota ${notaCorrigida}`);
    }
}

//* Rounding function can be delcared after 'classificaAluno', whom 
//* actually uses it.
function 
arredondar 
(nota) //* Gets same argument.
{
    if 
    (nota % 5 > 2) //! Remainder of grade/5 is > 2
    {
        return nota + (5 - (nota % 5)) //?
    } 
    else 
    {
        return nota
    }
}

classificaAluno(100)
classificaAluno(30)
classificaAluno(38)
classificaAluno(88)
classificaAluno(61)





