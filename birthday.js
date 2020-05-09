// Complete the birthday function below.
function birthday(s, d, m) {
    let result = 0;
    for (let i = 0; i <= s.length - m; i++) {
        let sum = s.slice(i, i + m).reduce((a, b) => a + b);
        if (sum === d) {
            result++;
        }
    }
    return result;
}

console.log(birthday([4], 4, 1));
