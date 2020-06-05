function maxPairs(skillLevel, minDiff) {
    // Write your code here
    let st = 0;
    let count = 0;
    while (st < skillLevel.length - 1) {
        if (Math.abs(skillLevel[st] - skillLevel[skillLevel.length - 1]) >= minDiff) {
            let t = skillLevel.length - 1;
            skillLevel.splice(st, 1);
            skillLevel.splice(t - 1, 1);
            count += 1;
            st--;
        } else {
            st++
        }
    }
    return count;
}

const skillLevel = [3, 4, 5, 2, 1, 1];
const minDiff = 3;
console.log(maxPairs(skillLevel, minDiff));

/*
* 1,2
* 1,3
* 1,4
* 1,5
* 1,6
* */