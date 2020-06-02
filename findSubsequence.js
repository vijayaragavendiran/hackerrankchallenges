function findSubsequence(numbers, k) {
    // Write your code here
    let allow = true;
    let result = 0;
    let d = 2;
    let f = [];
    while (allow) {
        for (let i = 0; i <= numbers.length - 1; i++) {
            if (numbers[i] % d === 0) {
                f.push(numbers[i]);
                result += 1;
            }
        }
        if (result >= k) {
            allow = false;
        } else {
            d++;
        }
    }
    return f;
}

console.log(findSubsequence([1, 2, 8, 5, 6], 2));