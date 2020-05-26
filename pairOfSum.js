const pairOfSum = (a, s) => {
    let st = 0;
    let e = a.length - 1;
    while (st < e) {
        if ((a[st] + a[e]) === s) {
            return 'Yes';
        } else if ((a[st] + a[e]) < s) {
            st++
        } else if ((a[st] + a[e]) > s) {
            e--
        }
    }
    return 'No';
}
console.log(pairOfSum([1, 2, 3, 9], 8));

