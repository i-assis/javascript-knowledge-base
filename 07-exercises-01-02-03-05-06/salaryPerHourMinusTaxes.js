function liquidSalary(hoursWorked, hourlyRate, taxPercentage) {
    const grossSalary = hoursWorked * hourlyRate
    const liquidSalary = grossSalary
    return(`The liquid salary equals US$ ${liquidSalary}`)
}