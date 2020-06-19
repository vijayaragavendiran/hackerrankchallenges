function sorting(items) {
    items.sort(function (a, b) {
        return a - b;
    });
    return items;
}

function arrangeStudents(a, b) {
    // Write your code here
    const minA = Math.min(...a);
    const minB = Math.min(...b);
    a = sorting(a);
    b = sorting(b);
    //console.log(a, b);
    const start = minA < minB ? 'a' : 'b';
    let first = [];
    let second = [];
    let result = 'NO';
    if (minA < minB) {
        first = [...a];
        second = [...b];
    } else {
        first = [...b];
        second = [...a];
    }
    for (let i = 0; i <= a.length - 1; i++) {
        // console.log(i);
        let j = first[i];
        let l = first[i + 1];
        let k = second[i];
        if ((j <= k) && ((l == undefined) || (l >= k))) {
            result = 'YES';
        } else {
            result = 'NO';
            break;
        }
    }
    return result;
}

const a = [1, 3, 8];
const b = [1, 1, 6];
console.log(arrangeStudents(a, b));


/*
* start from = b
* 0 : 1
* 0 : 2
* 1 : 3
* 1 : 3
* 2 : 4
* 2 : 5
*
*  */