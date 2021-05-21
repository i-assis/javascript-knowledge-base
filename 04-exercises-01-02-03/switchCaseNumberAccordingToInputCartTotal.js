function calculateSaleTotal(productCode, quantityBought) {
    switch (productCode) {
        case 100:
            return quantityBought * 3
        case 200:
            return quantityBought * 4
        case 300:
            return quantityBought * 5.5
        case 400:
            return quantityBought * 7.5
        case 500:
            return quantityBought * 3.5
        case 600:
            return quantityBought * 2.8
        default:
            return 'Product does not exist in the database.'
    }
}

console.log(calculateSaleTotal(100, 2))
console.log(calculateSaleTotal(200, 2))
console.log(calculateSaleTotal(300, 2))
console.log(calculateSaleTotal(400, 2))
console.log(calculateSaleTotal(500, 2))
console.log(calculateSaleTotal(600, 2))
console.log(calculateSaleTotal(700, 2))
