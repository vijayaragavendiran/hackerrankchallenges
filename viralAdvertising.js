const calculateCumulative = (x, result) => {
    let workingTemp = 0;
    workingTemp = Math.floor(x / 2);
    result += workingTemp;
    let temp = workingTemp * 3;
    return {result, temp};
}

function viralAdvertising(n) {
    let result = 0;
    let i = 1;
    let temp = 5;
    let t = {};
    let r = {result: 0, temp: 5};
    do {
        if (t.temp) {
            r = t;
        }
        r = calculateCumulative(r.temp, r.result);
        t = {...r};
        i++;
    } while (i <= n);
    return r.result;
}

console.log(viralAdvertising(5))
/*
* 1 -- f(5/2) = 2 * 3 = 6
* 2 -- f(6/2) = 3 * 3 = 9
* 3 -- f(9/2) = 4 * 3 = 12
* 4 -- f(12/2) = 6 * 3 = 18
* 5 -- f(18/2) = 9 * 3 = 27
 * */