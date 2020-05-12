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
}; // End of function BinarySearchTree

let root = null;
const generatorTree = (_input) => {
    let tree = new BinarySearchTree();

    let values = _input.split('\n').map(Number);

    for (let i = 1; i < values.length; i++) {
        root = tree.insert(root, values[i]);
    }
    //console.log('@@ ', root);
    console.log(tree.getHeight(root));
    console.log(tree.levelOrder(root));
}


const ip = `
3
5
2
1
4
6
7`;

generatorTree(ip);