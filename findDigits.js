// Complete the findDigits function below.
function findDigits(n) {
    let l = n.toString().split('');
    let result = 0;
    for (let i = 0; i <= l.length - 1; i++) {
        if ((n % l[i] === 0) && l[i] !== 0) {
            result += 1;
        }
    }
    return result;
}

console.log(findDigits(12));