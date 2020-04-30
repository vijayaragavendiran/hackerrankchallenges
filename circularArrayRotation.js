function circularArrayRotation(a, k, queries) {
    if (a.length > k) {
        a.unshift(...a.splice(-k))
    } else {
        let i = 0;
        while (i < k) {
            a.unshift(a.splice(-1));
            i++
        }
    }
    return a;
}

console.log(circularArrayRotation([1, 2, 3], 2, [0, 1, 2]));

/*
n = 3
 0 -  3 -1 = 2
 1 -  3 - 1 -1 = 1
 2 -  3 -1 -2 =  0
 3 1 2
 2 3 1
 */

