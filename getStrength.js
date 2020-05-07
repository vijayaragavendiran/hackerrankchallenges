function getStrength(password, weight_a) {
    // Complete the function
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let eachItems = [...password];
    let result = 0;
    let max = 25;
    for (let i = 0; i <= eachItems.length - 1; i++) {
        let temp = Number(alphabet.indexOf(eachItems[i])) + weight_a;
        let workingTemp = temp;
        if (temp > 25) {
            workingTemp = temp - 25 - 1;
        }
        result += workingTemp;
    }
    return result;
}

console.log(getStrength('hellomrz', 2));

