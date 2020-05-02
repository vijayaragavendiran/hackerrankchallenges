// Complete the angryProfessor function below.
function angryProfessor(k, a) {
    let c = a.filter(i => i <= 0);
    console.log(c, c.length);
    return c.length < k ? 'YES' : 'NO';
}

console.log(angryProfessor(2, [0, -1, 0, 0]));