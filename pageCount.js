/*
 * Complete the pageCount function below.
 */
function pageCount(n, p) {
    let f = Math.floor(p / 2);
    let b = Math.floor(n / 2) - f;
    return Math.min(f, b);

}

console.log(pageCount(5, 4));
