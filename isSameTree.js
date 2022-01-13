function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
  var isSameTree = function (p, q) {
    if ((!p && q) || (p && !q) || (p && q && p.val !== q.val)) return false;
    if (p && q) return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    return true;
  };
  
  const p = new TreeNode(1, 2, 1);
  const q = new TreeNode(1, 2, 1);
  console.log(isSameTree(p, q));
  