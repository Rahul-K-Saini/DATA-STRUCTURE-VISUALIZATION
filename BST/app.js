const treeContainer = document.getElementById('tree_cont');
function getValue(){
    const input_values = document.getElementById('input_nos').value;
    let array = input_values.split(" ");
    let num_array = array.map(Number);
    return num_array;
}

function mainFunc(){
    // treeContainer.innerHTML = '';
    bst.populate(getValue())
    bst.display();
}

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

        let paragraph = document.createElement("p");
        paragraph.innerHTML = details + node.data;
        treeContainer.appendChild(paragraph);
    
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




