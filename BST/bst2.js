"use strict";

const htmls = {
    input: document.querySelector('input'),
    treeContainer: document.getElementById('tree_cont')
}
function createEle(type, text, top, right, bottom, left) {
    const node = document.createElement(type);
    node.setAttribute( "class", "node");
    node.textContent = text;
    node.style.margin = `${top}px ${right}px ${bottom}px ${left}px`; 
    node.style.backgroundColor = 'orange';
    node.style.color = 'black';
    htmls.treeContainer.appendChild(node);
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root == null
    }

    insert(value){
        this.root = this._insert(this.root,value);
    }
    _insert(node, value){
        if(node == null){
            return new TreeNode(value);
        }
        if(value < node.value){
            node.left = this._insert(node.left,value)
        }
        if(value > node.value){
            node.right = this._insert(node.right,value);
        }
        return node;
        
    }
    populateTree(nums){
        for(let n of nums){
            this.insert(n);
        }

    }
    display(){
        htmls.treeContainer.innerHTML = "";
        this._display(this.root,)
    }
    _display(node,x,y,level){
        if(node==null){
            return;
        }
        createEle('div',node.value)
        this._display(node.left) 
        this._display(node.right)
    }
}
class TreeNode{
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }
}


function makeTree(){
    const tree = new BinarySearchTree()
    tree.root = null
    let values = htmls.input.value.trim();
    if(values.length==0){
        alert('Enter any numbers {space-seperated}')
    }
    else{
        let valuesArr = values.split(" ")
    valuesArr.forEach((x)=>{
        tree.insert(Number(x))
    })
    tree.display();
    }
}
