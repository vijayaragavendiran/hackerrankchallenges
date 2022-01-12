// Start of function Node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
    this.insert = function (root, data) {
        if (root === null) {
            this.root = new Node(data);

            return this.root;
        }

        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }

        return this.root;
    };
    // Start of function getHeight
    this.getHeight = function (root) {
        if (root === null) {
            return -1;
        }
        return Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;

    }; // End of function getHeight

    this.getLevelOrder = function (root, level) {
        if (root == null)
            return;
        if (level == 1)
            console.log(root.data + " ");
        else if (level > 1) {
            this.getLevelOrder(root.left, level - 1);
            this.getLevelOrder(root.right, level - 1);
        }
    }
    this.levelOrder = function (root) {
        let h = this.getHeight(root);
        for (let i = 1; i <= h; i++)
            getLevelOrder(root, i);

    }
    this.bfs = function (root) {
        debugger;
        let node = root;
        let data = [];
        let queue = [];
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    this.dfsPreOrder = function(root){
        let output = [];
        function traverse (node) {
            output.push(node.data);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(root);
        return output;
    }
    this.dfsPostOrder = function(root){
        let output = [];
        function traverse (node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            output.push(node.data);
        }
        traverse(root);
        return output;
    }
    this.dfsInOrder = function(root){
        let output = [];
        function traverse (node) {
            if(node.left) traverse(node.left);
            output.push(node.data);
            if(node.right) traverse(node.right);
           
        }
        traverse(root);
        return output;
    }

}; // End of function BinarySearchTree

let root = null;
const generatorTree = (_input) => {
    let tree = new BinarySearchTree();

    let values = _input.split('\n').map(Number);

    for (let i = 1; i < values.length; i++) {
        root = tree.insert(root, values[i]);
    }
    console.log('@@ ', root);
    console.log(tree.getHeight(root));
    console.log(tree.bfs(root));
    console.log(tree.dfsPreOrder(root));
    console.log(tree.dfsPostOrder(root));
    console.log(tree.dfsInOrder(root));
    // console.log(tree.levelOrder(root));
}


const ip = `
3
5
2
1
4
6
7`;
    //        3
    //       / \
    //      2   5
    //     /   / \
    //    1   4   6
    //             \
   //               7
    /*
    BFS
     3,2,5,1,4,6
     1. o/p = []
     op = [root]
     op.push[left] and op.push[right]

     DFS
     3 2 1 5 4 6 7
     op = []

     trav(node)
     op.push(node)  3 2 1
     if node.left trav(node.left)
     if node.right trav(node.right)

     trav(root)
     
// In order
1 2 3 4 5 6 7
    */
generatorTree(ip);