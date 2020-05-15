/*
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let result = [];
    for (let i = 0; i <= keyboards.length - 1; i++) {
        for (let j = 0; j <= drives.length - 1; j++) {
            if ((drives[j] + keyboards[i]) <= b) {
                result.push(drives[j] + keyboards[i]);
            }
        }
    }
    console.log(result.length > 0 ? Math.max(...result) : -1);
}

getMoneySpent([4], [5], 5)
