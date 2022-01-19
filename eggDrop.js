/**
 * You are given k identical eggs and you have access to a building with n floors labeled from 1 to n.

You know that there exists a floor f where 0 <= f <= n such that any egg dropped at a floor higher than f will break, and any egg dropped at or below floor f will not break.

Each move, you may take an unbroken egg and drop it from any floor x (where 1 <= x <= n). If the egg breaks, you can no longer use it. However, if the egg does not break, you may reuse it in future moves.

Return the minimum number of moves that you need to determine with certainty what the value of f is.
 * 
 */

var superEggDrop = function (k, n) {
  if (k === 1) return n;
  if (n === 1 || n === 0) return n;
  let min = Number.MAX_SAFE_INTEGER;
  let possibleMin;
  for (let i = 1; i <= n; i++) {
    possibleMin = Math.max(superEggDrop(k - 1, i - 1), superEggDrop(k, n - i));
    min = min > possibleMin ? possibleMin : min;
  }
  return min + 1;
};

console.log(superEggDrop(3, 14));
