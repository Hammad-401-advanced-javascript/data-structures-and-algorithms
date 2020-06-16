
'use strict';

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }



  preOrder() {
    if (this.root === null) return null;
    const nodeList = [];
    const traverse = function (current) {
      nodeList.push(current.data);
      if (current.left) traverse(current.left);
      if (current.right) traverse(current.right);
    };

    traverse(this.root);
    return nodeList;
  }


  inOrder() {
    if (this.root === null) return null;
    const nodeList = [];

    const traverse = function (current) {
      if (current.left) traverse(current.left);
      nodeList.push(current.data);
      if (current.right) traverse(current.right);
    };

    traverse(this.root);
    return (nodeList);
  }


  postOrder() {
    if (this.root === null) return null;
    const nodeList = [];
    const traverse = function (current) {
      if (current.left) traverse(current.left);
      if (current.right) traverse(current.right);
      nodeList.push(current.data);
    };

    traverse(this.root);
    return (nodeList);
  }


  findMax() {
    if (this.root === null) return null;
    let current = this.root;
    if (!current) return null;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }

}