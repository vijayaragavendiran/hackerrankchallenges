// Complete the beautifulDays function below.
function beautifulDays(i, j, k) {
    let result = 0;
    for (let start = i; start <= j; start++) {
        let reverse = start.toString().split('').reverse().join('');
        let diff = Math.abs(parseInt(reverse, 10) - start);
        if ((diff % k) === 0) {
            result += 1;
        }
    }
    return result;
}

console.log(beautifulDays(20, 23, 6))