// Complete the designerPdfViewer function below.
function designerPdfViewer(h, word) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    let max = 0;
    for (let i = 0; i <= word.length - 1; i++) {
        let wordIndex = alphabets.indexOf(word[i]);
        max = Math.max(max, h[wordIndex]);
    }
    return max * word.length;
}

const weights = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7];
const word = 'zaba';
console.log(designerPdfViewer(weights, word));