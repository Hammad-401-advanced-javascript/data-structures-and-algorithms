'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  findMaximumValue(root = this.root) {

    if (!root) return;

    let rootMax = root.val;
    let lMax;
    let rMax;

    if (root.left) {
      lMax = this.findMaximumValue(root.left);
    }
    if (root.right) {
      rMax = this.findMaximumValue(root.right);
    }

    let max = rootMax;
    if (lMax > max) max = lMax;
    if (rMax > max) max = rMax;

    return max;
  }
}