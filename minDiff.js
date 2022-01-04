// -59 -36 -13 1 -53 -92 -2 -96 -54 75
function minimumAbsoluteDifference(arr) {
  let minDiff;
  let sorted = arr.sort((a, b) => a - b);
  let i = 0;
  let j = 1;
  while (j <= arr.length - 1) {
    let temp = Math.abs(sorted[i] - sorted[j]);
    if (minDiff === undefined || minDiff > temp) {
      minDiff = temp;
    }
    i++;
    j++;
  }
  return minDiff;
}

console.log(
  minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75])
);
