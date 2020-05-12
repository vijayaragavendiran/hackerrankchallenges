// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
    let result = 0;
    for (let i = 0; i <= ar.length - 2; i++) {
        for (let j = i + 1; j <= ar.length - 1; j++) {
            let sum = ar[i] + ar[j];
            if ((sum % k) === 0) {
                result++;
            }
        }
    }
    return result;

}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]))

/*
*
* */