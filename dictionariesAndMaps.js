function processData(input) {
    let eachItem = input.split('\n');
    let n = parseInt(eachItem[0]);
    let phoneBook = [];
    let searchResult = [];
    for(let i = 1; i <= n; i++) {
        phoneBook.push(eachItem[i]);
    }
    for (let j = n + 1; j<= eachItem.length-1; j++) {
        const finder = phoneBook.filter(item => {
            return item.indexOf(eachItem[j]) !== -1;
        })
        if(finder[0]) {
            let foundDetails = finder[0].split(' ');
             console.log(`${foundDetails[0]}=${foundDetails[1]}`);
        } else {
            console.log('Not found');
        }
    }
}
const input = `3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry`

processData(input);