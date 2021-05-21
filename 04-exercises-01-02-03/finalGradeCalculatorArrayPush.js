function calcularNotaFinal(studentID, grade1, grade2, grade3)
{
    let grades = []
    grades.push(grade1)
    grades.push(grade2)
    grades.push(grade3)
    grades.sort( (a,b) => a < b ? 1 : -1)

    let gradePonintAverage = (grades[0] * 4 + grades[1] * 3 + grades[2] * 3)/10

    console.log(`Student Identification: ${studentID}. Grades: ${grade1}, ${grade2}, ${grade3}. ${gradePonintAverage < 5 ? 'Failed class.' : 'Aprovado.'}`)
}

calcularNotaFinal(123, 2.8, 6, 3.5)