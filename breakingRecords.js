// Complete the breakingRecords function below.
function breakingRecords(scores) {
    let minimum = scores[0];
    let maximum = scores[0];
    let min = 0;
    let max = 0;
    for (let i = 1; i <= scores.length - 1; i++) {
        if (scores[i] < minimum) {
            minimum = scores[i];
            min += 1;
        } else if (scores[i] > maximum) {
            maximum = scores[i];
            max += 1;
        }
    }
    return [max, min];
}

console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]))

/*
*  0 --10 -- min 10 max 10 -- countMin countMax
*  1 -- 5 -- min 5  max 10 --   1      0
*   2 -- 20 -- min 5 max 20 --  1  1
* 3 -- 20 --- min 5 max 20  -- 1 1
* 4 -- 4 --- min 4 max 20  --- 2 1
* 5 --- 5 -- min 4 max 20 --- 2 1
* 6 --- 2 -- min 2 max 20 --- 3, 1
* 7 -- 25  --- min 2 max 25 -- 3, 2
* 8 -- 1 --- min 1 max 25 --- 4 2
* */