// Complete the beautifulDays function below.
function beautifulDays(i, j, k) {
    let result = 0;
    for (let start = i; start <= j; start++) {
        let reverse = start.toString().split('').reverse().join('');
        let diff = Math.abs(parseInt(reverse, 10) - start);
        if ((diff % k) === 0) {
            result += 1;
        }
    }
    return result;
}

console.log(beautifulDays(20, 23, 6))

/*
* [19, 10, 12, 10, 24, 25, 22] ---- 4
* 19, 10 = 29 !/ by 4 s1 = [19, 10]
* 12--- 12 + 19 = 31 !/ by 4 and 10 + 12 = 22 !/ by 4 s1 = [19, 10, 12]
* 10 --- 10 + 19 = 29 !/ by 4 and 10 + 10 = 20 is /by 4 1.e. cannot be added in s1. get next list if not create new list s2 = [10]
* 24 --- 24 + 19 = 43 !/ by 4 and 24 + 10 = 34 !/ by 4 and 24 + 12 = 36 /by 4 i.e. cannot be added in s1. do same process in s2 = [10, 24]
* 25 --- 25 + 19 = 44 / by 4 i.e. cannot be added in s1. do same process in s2 = [10, 24, 25]
* 22 --- 22 + 19 = 41 !/ by 4 and 22 + 10 = 32 /by 4 i.e. cannot be added in s1. do same process in s2 = [10, 24, 25], s3 = [22]
* finally we have [19, 10 , 12] and [10, 24, 25] i.e max length is 3
* */