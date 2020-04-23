function gradingStudents(grades) {
    let result = [];
    for (let i = 0; i <= grades.length-1; i++) {
        if (grades[i] >= 38) {
            let diff = grades[i] % 5;
            if ((5 - diff) < 3) {
                result.push(Number(grades[i]) + (5 - diff));
            } else {
                result.push(grades[i]);
            }
        } else {
            result.push(grades[i]);
        }
    }
    return result;
}

const input = [ 73, 67, 38, 33 ]
console.log(gradingStudents(input));