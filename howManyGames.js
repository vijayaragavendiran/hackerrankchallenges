function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
    let count = 0;
    let workingTemp = p;
    if (s > p) {
        do {
            if (count === 0) {
                s = s - p;
                count++;
            } else {
                let temp = workingTemp - d;
                if (s >= temp) {
                    workingTemp = temp;
                    if (workingTemp >= m) {
                        s = s - workingTemp;
                    } else {
                        s = s - m;
                    }
                    count++;
                } else {
                    break;
                }
            }
        } while (s >= m);
    } else {
        return 0;
    }
    return count;
}

console.log(howManyGames(100, 19, 1, 180))

/*
* 85 - 20 = 65 is less than 6
* 20 - 3 = 65 - 17 = 48 is less than 6
* 17 - 3 = 48 - 14 = 34 is less than 6
* 14 - 3 = 34 - 11 = 23 is less than 6
* 11 - 3 = 23 - 8 = 15 is less than 6
* 8 - 3 = 5
* since 5 is then 6 we cannot subtract i.e. we take 6 from balance
*  15 - 6 = 9
*  9 - 6 = 3
*
* 180 - 100 = 80 is less than co
* 100 - 19 = 81 is less
* */
