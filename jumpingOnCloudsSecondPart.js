// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let result = 0;
    for (let i = 0; i <= c.length - 2;) {
        if (c[i + 2] !== 1) {
            result += 1;
            i += 2;
        } else if (c[i + 1] !== 1) {
            result += 1;
            i += 1;
        }
    }
    return result;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));

/*
* 0 1 2 3 4 5 6
* i, i+1, i+2
* i, i+1
* */