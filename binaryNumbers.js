const checkBinaryNumbers = (n) => {
    const binaryBase2 = Number(n).toString(2);
    let result = 0;
    let tempCount = 0;
    for(let i = 0; i <= binaryBase2.length -1 ; i++) {
        if(binaryBase2[i] == 1) {
            tempCount +=1;
        } else {
            if(tempCount > result) {
                result = tempCount;
            }
            tempCount = 0;
        }
    }
    if(tempCount > result) {
        result = tempCount;
    }
    console.log(result);
}

checkBinaryNumbers(13)
//101
//1101