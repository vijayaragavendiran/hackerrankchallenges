// The function should console log a pyramid shape with N levels using the # character.  Make sure the pyramid has spaces on both the left *and* right hand sides.

function pyramid(n) {
    if (n === 1) {
      console.log('#');
      return;
    }
    let col = (n * 2) - 1;
    let final = new Array(col).fill(' ');
    let middle = Math.floor(col / 2);
    final[middle] = '#';
    console.log(final.join(''));
    for (let i = 1; i <= middle; i++) {
      final[middle - i] = '#';
      final[middle + i] = '#';
      console.log(final.join(''));
    }
  }
  
  pyramid(6);
  