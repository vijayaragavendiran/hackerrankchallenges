const calculateCumulative = (liked, shared) => {
    let workingTemp = 0;
    workingTemp = Math.floor(liked / 2);
    shared += workingTemp;
    let temp = workingTemp * 3;
    return {shared, temp};
}

function viralAdvertising(n) {
    let i = 1;
    let t = {};
    let result = {shared: 0, temp: 5};
    do {
        if (t.temp) {
            result = t;
        }
        result = calculateCumulative(result.temp, result.shared);
        t = {...result};
        i++;
    } while (i <= n);
    return result.shared;
}

console.log(viralAdvertising(5))
/*
* 1 -- f(5/2) = 2 * 3 = 6
* 2 -- f(6/2) = 3 * 3 = 9
* 3 -- f(9/2) = 4 * 3 = 12
* 4 -- f(12/2) = 6 * 3 = 18
* 5 -- f(18/2) = 9 * 3 = 27
 * */