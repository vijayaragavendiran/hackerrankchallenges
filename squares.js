// Complete the squares function below.
function squares(a, b) {
    let result = 0;
    let start = Math.floor(Math.sqrt(a));
    let end = Math.ceil(Math.sqrt(b));
    let temp = start;
    while ((temp >= start) && (temp <= end)) {
        let r = temp * temp;
        result += ((r >= a) && (r <= b)) ? 1 : 0;
        temp++;
    }
    return result;
}

console.log(squares(24, 49));
