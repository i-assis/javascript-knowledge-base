
function calculateNewSalary(salaryPlan, currentSalary) {
    switch (salaryPlan) {
        case 'A':
            return currentSalary * 1.1
        case 'B':
            return currentSalary * 1.15
        case 'C':
            return currentSalary * 1.2
        default:
            return 'This salary plan is not defined !'
    }
}

console.log(calculateNewSalary('A', 1000));
console.log(calculateNewSalary('B', 1000));
console.log(calculateNewSalary('C', 1000));
console.log(calculateNewSalary('D', 1000));
