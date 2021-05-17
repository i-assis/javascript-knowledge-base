
/** 
* * PROBLEM -   
* ? Write a function that returns the two
* ? roots of a real, 2nd degree, polynomial.
* ? 
* ? 
* ? 
*/

function bhaskara (ax2, bx, c) {
    let resultados = []
    let delta = (bx ** 2) - (4 * ax2 * c)
    if(delta < 0){
        return "Delta é negativo"
    } 
    let x1 = (-bx + Math.sqrt(delta))/2*ax2
    let x2 = (-bx - Math.sqrt(delta))/2*ax2

    //! Whenver the function has more than one element to return:
    resultados.push(x1)
    resultados.push(x2)

    //! Returning 'resultados' array:
    return resultados   
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))
