// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    let f = {};
    let maxValue = 0;
    for (let i = 1; i <= 5; i++) {
        f[i] = 0
    }
    for (let i = 1; i <= arr.length - 1; i++) {
        f[arr[i]] += 1;
        maxValue = maxValue < f[arr[i]] ? f[arr[i]] : maxValue;
    }
    let filter = Object.keys(f).filter(i => f[i] === maxValue);
    return Math.min(...filter);
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));