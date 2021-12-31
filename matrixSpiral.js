// Example:
// 1 2 3
// 8 9 4
// 7 6 5
function matrix(n) {
  // create empty array.
  let result = [];

  // create inner array as per the n. It should be n * n.
  for (let i = 0; i <= n - 1; i++) {
    result.push([]);
  }

  // Initalization
  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;
  let counter = 1;

  while (startRow <= endRow && startCol <= endCol) {
    // top row
    for (let i = startCol; i <= endCol; i++) {
      result[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // end col fill
    for (let i = startRow; i <= endRow; i++) {
      result[i][endCol] = counter;
      counter++;
    }
    endCol--;

    //bottom
    for (let i = endCol; i >= startCol; i--) {
      result[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // inner
    for (let i = endRow; i >= startRow; i--) {
      result[i][startCol] = counter;
      counter++;
    }
    startCol++;
  }
  console.log(
    result,
    `sr : ${startRow} er: ${endRow} sc: ${startCol} ec: ${endCol}`
  );
}
matrix(3);
