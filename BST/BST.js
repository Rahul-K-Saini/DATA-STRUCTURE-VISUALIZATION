"use strict";

// Global Variables
const input = document.querySelector('input');
const treeContainer = document.getElementById('tree_cont');
const preButton = document.getElementById('preorder');
const postButton = document.getElementById('postorder');
const inButton = document.getElementById('inorder');
const traversalContainer = document.getElementById('traversals');
const whichTraversalSpan = document.getElementById('whichTraversal');
const traversalValues = document.getElementById('traversalValues');
const errorContainer = document.getElementById('errorMsg');
const errorText = document.getElementById('errMessage');

// Utility function to create an HTML element
function createNode(type, text, top, right, bottom, left) {
    const node = document.createElement(type);
    node.setAttribute("class", "node");
    node.textContent = text;
    node.style.margin = `${top}px ${right}px ${bottom}px ${left}px`;
    node.style.backgroundColor = '#56a4e4';
    node.style.color = 'black';
    return node;
}

// Definition of TreeNode class
class TreeNode {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

// Definition of BinarySearchTree class
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        this.root = this._insert(this.root, value);
    }

    _insert(node, value) {
        if (node === null) {
            return new TreeNode(value);
        }
        if (value < node.value) {
            node.left = this._insert(node.left, value);
        }
        if (value > node.value) {
            node.right = this._insert(node.right, value);
        }
        return node;
    }

    display() {
        treeContainer.innerHTML = "";
        this._display(this.root, 20, 0, 0, 400);
    }

    _display(node, top, right, bottom, left) {
        if (node === null) {
            return;
        }
        const ele = createNode('div', node.value, top, right, bottom, left);
        treeContainer.appendChild(ele);
        this._display(node.left, top + 60, right + 30, bottom, left - 50);
        this._display(node.right, top + 60, right - 30, bottom, left + 50);
    }

    preorder(node) {
        if (node === null) {
            return;
        }
        traversalValues.textContent += `${node.value}, `;
        this.preorder(node.left);
        this.preorder(node.right);
    }

    postorder(node) {
        if (node === null) {
            return;
        }
        this.postorder(node.left);
        this.postorder(node.right);
        traversalValues.textContent += `${node.value}, `;
    }

    inorder(node) {
        if (node === null) {
            return;
        }
        this.inorder(node.left);
        traversalValues.textContent += `${node.value}, `;
        this.inorder(node.right);
    }
}

const tree = new BinarySearchTree();

// Function to handle Preorder Traversal
function preOrder() {
    if (input.value.trim().length === 0) {
        showError("No node to traverse");
        return;
    }
    whichTraversalSpan.textContent = "Preorder Traversal: ";
    traversalValues.textContent = "";
    tree.preorder(tree.root);
}

// Function to handle Postorder Traversal
function postOrder() {
    if (input.value.trim().length === 0) {
        showError("No node to traverse");
        return;
    }
    whichTraversalSpan.textContent = "Postorder Traversal: ";
    traversalValues.textContent = "";
    tree.postorder(tree.root);
}

// Function to handle Inorder Traversal
function inOrder() {
    if (input.value.trim().length === 0) {
        showError("No node to traverse");
        return;
    }
    whichTraversalSpan.textContent = "Inorder Traversal: ";
    traversalValues.textContent = "";
    tree.inorder(tree.root);
}

// Function to display error message
function showError(message) {
    errorContainer.style.display = 'flex';
    errorText.innerHTML = `<b>Enter value first! </b> ${message}`;
}

// Function to create BST
function makeTree() {
    tree.root = null;
    const values = input.value.trim();
    if (values.length === 0) {
        showError("Looks like you did not enter any number for BST Visualizer to display");
        treeContainer.innerHTML = '';
    } else {
        const valuesArr = values.split(" ");
        valuesArr.forEach((x) => {
            tree.insert(Number(x));
        });
        tree.display();
    }
}
