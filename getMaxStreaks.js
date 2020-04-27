function getMaxStreaks(toss) {
    // Return an array of two integers containing the maximum streak of heads and tails respectively
    let result = {'Heads': 0, 'Tails': 0};
    let tempHeads = 0;
    let tempTails = 0;
    for (let i = 0; i <= toss.length - 1; i++) {
        if (toss[i] === 'Heads') {
            tempHeads += 1;
            tempTails = 0;
            if (result[toss[i]] < tempHeads) {
                result[toss[i]] = tempHeads;
            }
        } else if (toss[i] === 'Tails') {
            tempTails += 1;
            tempHeads = 0;
            if (result[toss[i]] < tempTails) {
                result[toss[i]] = tempTails;
            }
        }
    }
    return [result.Heads, result.Tails];
}

console.log(getMaxStreaks(['Heads', 'Tails', 'Tails', 'Tails', 'Heads', 'Heads', 'Tails']));