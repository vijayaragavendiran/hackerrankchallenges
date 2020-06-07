function getMinEffort(C) {
    // Write your code here
    let temp = [];
    for (let i = C.length - 1; i >= 0; i--) {
        for (let j = C.length - 2; j <= 0; j--) {
            console.log(C[i][j], i, j);
            //console.log('checking ',`[${i}][${j+1}] && [${i+1}][${j}]`,C[i][j+1],C[i+1][j])
            if (Math.abs(C[i][j] - C[i][j + 1]) <= Math.abs(C[i][j] - C[i + 1][j])) {
                console.log('c[i][j+1] ', `[${i}][${j + 1}]`, C[i][j + 1]);
                //j = j+1;
                // console.log(C[i][j+1]);
            } else {
                console.log('c[i+1],[j]', `[${i + 1}][${j}]`, C[i + 1][j]);
                i--;
                //console.log(C[i+1],[j]);
            }
            // console.log('@@@', temp);
        }
    }
}

const i = [
    [13, 14, 13, 1],
    [8, 12, 12, 9],
    [15, 15, 14, 14],
    [15, 10, 10, 5]];
console.log(getMinEffort(i));

/*
* T[i][j] = val[i][j] + min(T[i-1][j], T[i][j-1])
*
* i,j,
* (i,j+1) or (i+1, j) --> (i,j+1)
* i,j
* */

