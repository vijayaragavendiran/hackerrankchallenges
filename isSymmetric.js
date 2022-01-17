var isSymmetric = function (root) {
    if(!root) return true;
    const left = root.left;
    const right = root.right;
    function checkIsSymetric(p, q) {
      if ((!p && q) || (p && !q) || (p && q && p.val !== q.val)) return false;
      if (p && q) return checkIsSymetric(p.left, q.right) && checkIsSymetric(p.right, q.left);
      return true;
    }
    return checkIsSymetric(left, right);
  };
  // [1,2,2,3,4,4,3]
  const data = {
    data: 1,
    left: {
      data: 2,
      left: { data: 3, left: null, right: null },
      right: { data: 4, left: null, right: null },
    },
    right: {
      data: 2,
      left: { data: 4, left: null, right: null },
      right: { data: 3, left: null, right: null },
    },
  };
  console.log(isSymmetric(data));