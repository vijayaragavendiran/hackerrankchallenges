function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
var rightSideView = function(root) {
    let data = [];
    function traverse(node) {
        if(!node) return null;
        data.push(node.val);
        if(node.right) traverse(node.right);
    }
    traverse(root);
    return data;
};


const r2 = new TreeNode(1, 2, null);
r2.left = new TreeNode(1, null, );
r2.right = new TreeNode(2, null, null);
console.log(rightSideView(r2));