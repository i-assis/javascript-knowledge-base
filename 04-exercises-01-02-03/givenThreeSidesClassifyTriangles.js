
/** 
* * PROBLEM -   
* ? Write a function that, given 3
* ? sides of a triangle, tells whether 
* ? the triangle is equilateral, isoceles
* ? or scalene.
* ? 
**/

function classificaTriangulo (lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3)
    {
        return 'Equilátero'
    } 
    else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) 
    {
        return 'Isósceles'        
    }
    else 
    { 
        return 'Escaleno'
    }
}

console.log(classificaTriangulo(2, 2, 2));
console.log(classificaTriangulo(2, 3, 3));
console.log(classificaTriangulo(2, 3, 4));

