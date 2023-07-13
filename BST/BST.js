class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        this.root = this._insert(value, this.root);
    }

    _insert(value, node) {
        if (node === null) {
            return new TreeNode(value);
        }
        if (value < node.data) {
            node.left = this._insert(value, node.left);
        }
        if (value > node.data) {
            node.right = this._insert(value, node.right);
        }
        return node;
    }

    display() {
        this._display(this.root, null, false);
    }

    _display(node, parent, isRightChild) {
        if (node === null) {
            return;
        }
        let details = "";
        if (parent !== null) {
            details += (isRightChild ? "Right" : "Left") + " Child of " + parent.data + ": ";
        } else {
            details += "Root Node: ";
        }
        console.log(details + node.data);
        this._display(node.left, node, false);
        this._display(node.right, node, true);
    }

    populate(nums) {
        for (let n of nums) {
            this.insert(n);
        }
    }
}

class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const bst = new BinarySearchTree();
bst.populate([5,4,3,6,8,7])
bst.display();