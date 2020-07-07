'use strict';

function tree_intersection(treeOne, treeTwo) {
  let results = [];

  const check = (tree) => {
    const result = [];
    const traverse = (node) => {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(tree.root);
    return result;
  };
  let treeArrOne = check(treeOne);
  let treeArrTwo = check(treeTwo);

  treeArrOne.forEach(val => treeArrTwo.includes(val) ? results.push(val) : null);
  return results;


}

module.exports = tree_intersection;