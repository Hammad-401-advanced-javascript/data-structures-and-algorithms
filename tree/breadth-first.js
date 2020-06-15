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

  breadthFirst() {
    let result = [];
    let Queue = [];

    if (this.root != null) {
      Queue.push(this.root);
      while (Queue.length > 0) {
        let node = Queue.shift();
        result.push(node.data);
        if (node.left != null) {
          Queue.push(node.left);
        }
        if (node.right != null) {
          Queue.push(node.right);
        }
      }
      return result;
    } else {
      return null;
    }
  }

}