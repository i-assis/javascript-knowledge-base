
function calculator (value_1, operacao, value2) {
    switch (operacao) {
        case '+':
            return value_1 + value2
        case '-':
            return value_1 - value2
        case '*':
            return value_1 * value2
        case '/':
            return value_1 / value2
        default:
            return 'Invalid operation.'
    }
}

//! A few test cases:
console.log(calculator(2, '+', 3));
console.log(calculator(2, '-', 3));
console.log(calculator(2, '*', 3));
console.log(calculator(2, '/', 3));
console.log(calculator(2, 'a', 3));
