function saveThePrisoner(n, m, s) {
    // Complete this function
    let a = s + m - 1; // calculate max circle
    if (a > n) {
        if (a % n == 0) {
            return n;
        }
        return a % n;
    }

    return a;
}

console.log(saveThePrisoner(7, 19, 2))

/*
* n: prisoner
* m: sweets
* s: starting chair
* 1 2 3
*   1 2
*
* */

