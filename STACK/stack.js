"use strict";

// Global Variables
let top_pointer = document.getElementById('top_pointer');
top_pointer.textContent = -1;
const stackContainer = document.getElementById('stack_cont');
const errorContainer = document.getElementById('errorMsg')
const errorText = document.getElementById('errMessage')
// Push function of stack
function push() {
  const input = document.getElementById('input_no');
  const input_value = input.value.trim();
  
  if (input_value.length < 1) {
    showError("Enter any value to push into the stack.")
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
    showError("Stack is empty! Can't Pop from empty Stack")
    return;
  }
  
  top_pointer.textContent--;
  const elementToRemove = stackContainer.lastElementChild;
  elementToRemove.remove();
}

// error handling function
function showError(message) {
  errorContainer.style.display = 'flex';
  errorText.innerHTML = `<b>Enter value first! </b> ${message}`;
}