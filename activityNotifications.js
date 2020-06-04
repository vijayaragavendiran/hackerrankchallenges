// Complete the activityNotifications function below.
function countingSort(items) {
    const count = [];
    for (let k = 0; k <= Math.max(...items); k++) {
        count[k] = 0;
    }
    ;
    let countSum = [];
    for (let i = 0; i <= items.length - 1; i++) {
        count[items[i]]++;
    }
    ;
    countSum[0] = count[0];
    for (let j = 1; j <= count.length - 1; j++) {
        countSum[j] = (countSum[j - 1] + count[j]);
    }
    ;
    const sorted = [];
    for (let i = items.length - 1; i >= 0; i--) {
        sorted[countSum[items[i]] - 1] = items[i];
        countSum[items[i]]--;
    }
    return sorted;
}

function median(items, d) {
    let temp = countingSort(items);
    const mid = Math.floor(d / 2);
    return d % 2 !== 0 ? temp[mid] : (temp[mid - 1] + temp[mid]) / 2;
}

function activityNotifications(expenditure, d) {
    let result = 0;
    let length = expenditure.length;
    let i = d;
    let list = expenditure.slice(0, d);
    while (i <= expenditure.length - 1) {
        let m = median(list, d);
        let max = 2 * m;
        if (expenditure[i] >= max) {
            result += 1;
        }
        list.shift();
        list.push(expenditure[i]);
        i++;
    }
    return result;
}

console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5));

//console.log(countingSort([4,1,3,5,1,2,4]));

/*
i = 1
for(d,d++)
m = 4
* */
