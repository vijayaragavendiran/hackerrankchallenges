function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var countNodes = function (root) {
  let count = 0;
  if(!root) return count;
  let node = root;
  let queue = [];
  queue.push(node);
  while (queue.length) {
    node = queue.shift();
    count ++;
    if(node.left) queue.push(node.left);
    if(node.right) queue.push(node.right);
  }
  return count;
};

const r2 = new TreeNode(1, 2, 3);
r2.left = new TreeNode(2, 4, 5);
r2.right = new TreeNode(3, 6, null);
r2.left.left = new TreeNode(4, null, null);
r2.left.right = new TreeNode(5, null, null);
r2.right.left = new TreeNode(6, null, null);
console.log(countNodes());
// console.log(r2);
