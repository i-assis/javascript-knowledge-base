function calculatePrice (age) {
    if(age < 10){
        return 180
    } else if(age < 30) {
        return 150
    } else if (age < 60) {
        return 195
    } else {
        return 230
    }
}

console.log(calculatePrice(8));
console.log(calculatePrice(15));
console.log(calculatePrice(35));
console.log(calculatePrice(52));
console.log(calculatePrice(80));