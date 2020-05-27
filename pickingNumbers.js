function pickingNumbers(a) {
    // Write your code here
    let frequencyItem = [];
    let result = 0;
    for (let i = 0; i <= 100; i++) {
        let c = a.filter((item) => item === i);
        frequencyItem[i] = c.length || 0;
    }
    for (let i = 1; i <= frequencyItem.length - 1; i++) {
        result = Math.max(result, frequencyItem[i] + frequencyItem[i - 1]);
    }
    return result;
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));




