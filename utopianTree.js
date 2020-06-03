// Complete the utopianTree function below.
function utopianTree(n) {
    let result = 1;
    if (n > 0) {
        for (let j = 1; j <= n; j++) {
            if ((j % 2) == 0) {
                result += 1;
            } else {
                result *= 2;
            }
        }
    }
    console.log(result);
}

const ip = 4;
utopianTree(ip)