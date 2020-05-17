function nonDivisibleSubset(k, s) {
    let remainderFreq = [];
    for (let i = 0; i <= s.length - 1; i++) {
        remainderFreq.push(s[i] % k);
    }

    if ((k % 2) === 0) {
        remainderFreq[k / 2] = Math.min(remainderFreq[k / 2], 1);
    }
    let result = Math.min(remainderFreq[0], 1);
    for (let j = 0; j <= k / 2; j++) {
        result += Math.max(remainderFreq[j], remainderFreq[k - j]);
    }

    return result;
}

console.log(nonDivisibleSubset(4, [19, 10, 12, 10, 24, 25, 22]))

/*temp = [19]
10 + 19 = !/4 ==> [19,10]
12
1 + 3
2 + 2
[0,1, 2, 3, 0, 1, 2]
[0, 1, 2] => [19, 10, 12]
[0, 1, 2] => [24, 25, 22]
*/
