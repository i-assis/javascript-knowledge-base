
/** 
* * PROBLEM -   
* ? Given: initial capital
* ?        interest rate
* ?        time
* ? Write functions that provide the
* ? "simple" and compound tax returns.
*/

function jurosSimples (capitalInicial, taxa, tempo) 
{
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) 
{
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10/100, 2));

console.log(jurosCompostos(100, 10/100, 2));
