// Complete the workbook function below.
function workbook(n, k, arr) {
    let count = 0;
    let page = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        let j = 1;
        let temp = [];
        let rem = 0;
        let iterate = 0;
        while (j <= arr[i]) {
            rem = arr[i] - j;
            iterate += 1;
            temp.push(j);
            if (iterate === k) {
                page += 1;
                count += temp.indexOf(page) !== -1 ? 1 : 0;
                temp = [];
                iterate = 0;
            } else {
                if (rem === 0) {
                    page += 1;
                    count += temp.indexOf(page) !== -1 ? 1 : 0;
                    temp = [];
                    iterate = 0;
                }
            }

            j++;
        }
    }
    return count;
}

const n = 10;
const k = 5;
const arr = [3, 8, 15, 11, 14, 1, 9, 2, 24, 31];
console.log(workbook(n, k, arr));

/*

2,1,2,1,4
2,3,5,6,10


6,3,6,3,12
*4 2 6 1 10
[1,2,3] = 1
* [4] = 2
* [1,2] = 3
* [1,2,3] = 4
* [4,5,6] = 5
* [1] = 6
* [1,2,3] = 7
* [4,5,6] = 8
* [7,8,9] = 9
* [10] = 10
* */