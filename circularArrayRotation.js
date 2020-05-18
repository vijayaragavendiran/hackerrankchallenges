function circularArrayRotation(a, k, queries) {
    let result = [];
    while (k > 0) {
        let temp = a.pop();
        a.unshift(temp);
        k--;
    }
    for (let i = 0; i <= queries.length - 1; i++) {
        result.push(a[queries[i]]);
    }
    return result;
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

