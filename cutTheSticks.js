// Complete the cutTheSticks function below.
let result = [];

function cutTheSticks(arr) {
    let temp = [...arr];
    if (temp.length > 0) {
        result.push(temp.length);
    }
    let workingTemp = [];
    for (let i = 0; i <= temp.length - 1; i++) {
        let min = Math.min(...temp);
        let diff = temp[i] - min;
        if (diff !== 0) {
            workingTemp.push(diff);
        }
    }
    if (workingTemp.length > 0) {
        cutTheSticks(workingTemp);
    }
    return result;
}

console.log(cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]));

/*
* 1 2 3 4 3 3 2 1 ----
* - 1 2 3 2 2 1 -  8
* - - 1 2 1 1 - -  6
* - - - 1 - - - -  4
* - - - - - - - -  1
* [8,6,4,1]
*
*
* 1 2 3 ----
* - 1 2 --- 3
* - - 1 --- 2
* - - - --- 1
* 3 2 1
* */