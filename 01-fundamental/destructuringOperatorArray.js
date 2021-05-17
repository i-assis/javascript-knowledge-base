// ! Different from deconstructor operator over objects !
const [a] = [10]
console.log(a)

const [n1, , n3, ,n5, n6 = 0] = [10, 7, 9, 8] //* n5 = undefined because undefined outside array
console.log(n1, n3, n5, n6)

// ! An array of arrays:
const [, [, nota]] = [ [, 8, 8], [9, 6, 8] ] //* grabs second number @ second array = 6
console.log(nota)

// ! You can see we are using deconstructOperator because symbols {}, [] @ left side of equations !