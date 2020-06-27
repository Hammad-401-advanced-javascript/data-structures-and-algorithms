'use strict';

function FizzBuzzTree(tree) {

  if (tree.root == null) {
    return 'Empty tree';
  }


  function travers(node) {
    if (typeof node.value === 'number') {
      if (node.value % 3 == 0 && node.value % 5 == 0) node.value = 'FizzBuzz';
      else if (node.value % 3 == 0) node.value = 'Fizz';
      else if (node.value % 5 == 0) node.value = 'Buzz';
      else node.value = node.value.toString();
    }
    if (node.left) travers(node.left);
    if (node.right) travers(node.right);
  }
  travers(tree.root);
  return tree;
}

module.exports = FizzBuzzTree;