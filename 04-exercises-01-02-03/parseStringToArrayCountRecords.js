
/** 
* * PROBLEM -   
* ? Write a function that: 1. parses a string to an array,
* ? 2. counts how many times a new highest-number has been 
* ? read from an array
* ? 
* ? 
*/

//* Writing a string to perform the exepriments.
let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

 
function avaliaPontuacoes 
(stringPontuacoes) 
{
    let pontuacoes = stringPontuacoes.split(", ")
    //* First we set the separator that converted the string to an
    //* array.

    let qtdQuebraDeRecords = 0
    //* Amount of record breakings initially set to zero.

    let piorJogo = 1
    //* ??

    let maiorPontuacao = pontuacoes[0]
    //* Initial "most points" is set to be the first element of
    //* 'pontuacoes'.

    let menorPontuacao = pontuacoes[0]
    //* Least points is also set to be the first element of 
    //* 'pontuacoes'.

    //
    
    for (let i = 1
        ; //* Standard separation. 
        i < pontuacoes.length
        ; //* Standard separation. 
        i++ //*If at line above we didn't finish going through the array, this WILL ACT AS A CALLBACK (... right ?) 
        ) 
        {
        if
        (pontuacoes[i] > maiorPontuacao) //* If current array element
        //* is not a new high-record, this 'if' will be skipped. 
        {
            maiorPontuacao = pontuacoes[i]

            qtdQuebraDeRecords++
            //* Amount of record breakings takes one more unity !
            // Obvious, right !
        }
        else if 
        (pontuacoes[i] < menorPontuacao) //* If current array element
        //* is not a new low-record, this 'if' will be skipped.
        {
            menorPontuacao = pontuacoes[i]

            piorJogo = i+1; //* The '+1' compensates for the fact that
            //* array element count starts at 0, and there's no 
            //* "zeroth" game.
        }
    }
    return [piorJogo, qtdQuebraDeRecords, Number(maiorPontuacao)]
}
 
console.log(avaliaPontuacoes(stringPontuacoes))