// Complete the decentNumber function below.
function decentNumber(n) {
    let z = n;
    while (z % 3 !== 0) {
        z -= 5;
    }
    if (z < 0) {
        console.log(-1);
    } else {
        console.log('5'.repeat(z) + '3'.repeat(n - z));
    }

}

decentNumber(13)
/*
5553333333333
5553333333333
* 1
3
5
11
* */