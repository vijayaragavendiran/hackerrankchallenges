// Complete the formingMagicSquare function below.
function formingMagicSquare(s) {
    let allMagicSquares = [
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
    ];
    let minCost = Infinity;
    for (let k = 0; k < 8; k++) {
        let eachMatrixCost = 0;
        for (let n = 0; n <= 2; n++) {
            for (let m = 0; m <= 2; m++) {
                eachMatrixCost += Math.abs(allMagicSquares[k][n][m] - s[n][m])

            }
        }
        if (minCost > eachMatrixCost) {
            minCost = eachMatrixCost;
        }
    }
    return minCost;
}

const ip = [[4, 9, 2], [3, 5, 7], [8, 1, 5]];
// const ip = [[4, 8, 2], [4, 5, 7], [6, 1, 6]]
formingMagicSquare(ip);

/*
4 9 2 = 15
3 5 7 = 15
8 1 5 = 14
15 15 14

r0, c0, d0
15  15  14
r1  c1
15  15
r2 c2 d1
15 14 14


4 + 9 + 2 = 15 r0
4 + 3 + 8 = 15 c0
3 + 5 + 7 = 15 r1
9 + 5 + 1 = 15 c1
8 + 1 + 5 = 14 r2
2 + 7 + 5 = 14 c2
4 + 5 + 5 = 14 d0
2 + 5 + 8 = 15 d1

0 0 0
1 1 1
2 2 2

0,0 0,1 0,2==> n,n n,1, n,2
0,0 1,0 2,0 ==> n,n 1,n 2,n

1,0 1,1 1,2
1,0 1,1 2,1


* 4 8 2 = n + 1
4 5 7 = n - 1
6 1 6 = n + 2
n + 1 n + 1 n
*
*
* 4 8 2 =
* 4 5 5
* 6 1 7
*
*
* 4 9 2 = 15
* 3 5 7 = 15
* 8 1 6 = 15
* *
*
*
*
*  4 + 8 + 2 = 14
* 4 + 4 + 6 = 14
*  4 + 5 + 7 = 16--> -2
* 8 + 5 + 1 = 14
* 6 + 1 + 6 = 13 --> 1
* 2 + 7 + 6 = 15 --> -1


* 4 + 5 + 6 = 15 --> -1
* 2 + 5 + 6 = 13 --> 1
*
*
*
* */