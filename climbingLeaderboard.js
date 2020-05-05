const iterativeFunction = (arr, x) => {
    let start = 0, end = arr.length - 1;
    // Iterate while start not meets end
    while (start <= end) {

        // Find the mid index
        let mid = Math.floor((start + end) / 2);
        // If element is present at mid, return True
        if (arr[mid] === x) {
            return mid;
        } else if ((arr[mid] > x) && (x >= arr[mid + 1])) {
            return mid + 1;
        } else if ((arr[mid] < x) && (x < arr[mid - 1])) {
            return mid;
        } else if (arr[mid] > x) {
            start = mid + 1;
        } else if (arr[mid] < x) {
            end = mid - 1;
        }
    }
    return -1;
}

// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {
    let rankingList = [];
    let result = [];
    let rank = 0;
    for (let i = 0; i <= scores.length - 1; i++) {
        if (i === 0) {
            rank += 1;
        } else {
            if (scores[i] < scores[i - 1]) {
                rank += 1;
            }
        }
        rankingList.push(rank);
    }

    for (let j = 0; j <= alice.length - 1; j++) {
        let aliceScore = alice[j];
        let n = scores.length;
        if (aliceScore > scores[0]) {
            result.push(1);
        } else if (aliceScore < scores[n - 1]) {
            result.push(rankingList[n - 1] + 1);
        } else {
            let index = iterativeFunction(scores, aliceScore);
            result.push(rankingList[index]);
        }
    }
    return result;
}

const s = [100, 100, 50, 40, 40, 20, 10];
const a = [5, 25, 50, 120];
console.log(climbingLeaderboard(s, a));
