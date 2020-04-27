function findSubstring(s, k) {
    // Write your code here
    let result = {key: 0, value: 'Not found!'};
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < s.length - k; i++) {
        let eachString = s.substr(i, k);
        let count = 0;
        count = [...eachString].filter(i => vowels.indexOf(i) > -1).length;
        if (result.key < count) {
            result.key = count;
            result.value = eachString;
        }

    }
    return result.value;
}

console.log(findSubstring('eiuaooo', 4));