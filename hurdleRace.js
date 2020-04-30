// Complete the hurdleRace function below.
function hurdleRace(k, height) {
    let max = Math.max(...height.filter(i => i > k));
    let result = max !== -Infinity ? (max - k) : 0;
    return result;
}

console.log(hurdleRace(7, [2, 5, 8, 9, 2]));