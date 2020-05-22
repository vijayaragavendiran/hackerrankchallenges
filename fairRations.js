// Complete the fairRations function below.

function fairRations(B) {
    let c = 0;
    for (let i = 0; i <= B.length - 1; i++) {
        if ((B[i] % 2 !== 0) && (B[i + 1] !== undefined)) {
            B[i] += 1;
            B[i + 1] += 1;
            c += 2;
        }
    }
    const even = B.every(c => c % 2 === 0);
    return even ? c : 'NO';
}

console.log(fairRations([1, 2]));

/*
* 2 = even
* 3 == 1 = 4
*  4 = 5 = 5 = odd
* 5
* 6
*
* 2, 4, 5, 5, 6
*
*2 , 4, 5
*
* */