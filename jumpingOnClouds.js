// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c, k) {
    let exit = false;
    let result = 100;
    let i = 1;
    let l = c.length;
    result = c[0] === 1 ? 98 : result;
    while (!exit) {
        i += k;
        if (i > c.length) {
            let t = i - c.length;
            i = t === 1 ? 0 : t;
        }
        let temp = c[i - 1];
        result -= temp === 1 ? 2 : 0;
        result -= 1;
        exit = i === 0 || false;
    }
    return result;
}

const ip = [0, 0, 1, 0, 0, 1, 1, 0];
// const ip = [1, 1, 1, 0, 1, 1, 0, 0, 0, 0]
console.log(jumpingOnClouds(ip, 2));

/*
k = 10
i = 4
temp[3]
i = 7
temp[6]
i = 10
temp[9]
i = 13
t = 3
i = 3
temp[2]
i = 6
temp[5]
i = 9
temp[8]
i = 12
t = 2
i = 2
temp[1]
i = 4



1, 1, 1, 0, 1, 1, 0, 0, 0, 0
0  1  2  3  4  5  6  7  8  9
0, 3, 6, 9, 2
* 100 - 1 - 2 = 97
* 97 - 1 = 96
  96 - 1 = 95
  95 - 1 = 94
  94 - 1 - 2 = 91
* */