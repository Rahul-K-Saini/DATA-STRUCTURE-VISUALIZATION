"use strict";

// Global Variables
let top_pointer = document.getElementById('top_pointer');
top_pointer.textContent = -1;
const stackContainer = document.getElementById('stack_cont');

// Push function of stack
function push() {
  const input = document.getElementById('input_no');
  const input_value = input.value.trim();
  
  if (input_value.length < 1) {
    alert("Enter any value to push into the stack.");
    return;
  }
  
  if (parseInt(top_pointer.textContent) >= 100) {
    alert("Memory full! Delete some elements.");
    return;
  }
  
  top_pointer.textContent++;
  
  const node_container = document.createElement('div');
  const node_pointer_info = document.createElement('p');
  const new_node = document.createElement('span');
  
  node_container.setAttribute('class', 'node_cont');
  new_node.setAttribute('class','node');
  node_pointer_info.textContent = top_pointer.textContent;
  new_node.textContent = input_value;
  
  stackContainer.appendChild(node_container);
  node_container.appendChild(new_node);
  node_container.appendChild(node_pointer_info);
  
  input.value = '';
}

// Pop function of stack
function pop() {
  if (parseInt(top_pointer.textContent) === -1) {
    alert("Stack is empty! Enter a value first.");
    return;
  }
  
  top_pointer.textContent--;
  const elementToRemove = stackContainer.lastElementChild;
  elementToRemove.remove();
}