// Complete the equalizeArray function below.
function equalizeArray(arr) {
    let e = Math.max(...arr);
    let f = [];
    for (let i = 0; i <= e; i++) {
        f[i] = 0;
    }
    for (let i = 0; i <= arr.length - 1; i++) {
        f[arr[i]]++;
    }

    let rM = f.indexOf(Math.max(...f));
    let rS = 0;
    for (let j = 0; j <= arr.length - 1; j++) {
        if (arr[j] !== rM) {
            rS += 1;
        }
    }
    return rS;
}

console.log(equalizeArray([4, 4, 3]));

/*
* f = []
* 3 : 3
* 2: 1
* 1: 1
* 1: 3
*
*
*
* 1: 1
* 2: 1
* 3: 3
* */