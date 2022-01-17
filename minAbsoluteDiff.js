function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var getMinimumDifference = function (root) {
  let prevRootVal = null;
  let minDiff = Number.MAX_SAFE_INTEGER;
  function checkMinDiff(root) {
    if (!root) return null;
    if (root.left) checkMinDiff(root.left);
    const possibleMin = Math.abs(root.val - prevRootVal);
    if(prevRootVal != null && possibleMin < minDiff) minDiff = possibleMin;
    prevRootVal = root.val;
    if (root.right) checkMinDiff(root.right);
  }
  checkMinDiff(root);
  return minDiff;
};
const r2 = new TreeNode(236, 104, 701);
r2.left = new TreeNode(104, null, 227);
r2.left.right = new TreeNode(227, null, null);
r2.right = new TreeNode(701, null, 911);
r2.right.right = new TreeNode(911, null, null);
//console.log(r2);
console.log(getMinimumDifference(r2));
// TreeNode {
//     val: 4,
//     left: TreeNode {
//       val: 2,
//       left: TreeNode { val: 1, left: null, right: null },
//       right: TreeNode { val: 3, left: null, right: null }
//     },
//     right: TreeNode { val: 6, left: null, right: null }
//   }
//         236
//     104     701
//   null 227 null 911
