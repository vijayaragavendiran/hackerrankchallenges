function minimumDistances(a) {
    let result = [];

    for (let i = 0; i <= a.length - 1; i++) {
        for (let j = i + 1; j <= a.length - 1; j++) {
            if (a[i] === a[j]) {
                result.push(j - i);
            }
        }
    }
    return result.length > 0 ? Math.min(...result) : -1;
}

console.log(minimumDistances([7, 1, 3, 4, 1, 7]))