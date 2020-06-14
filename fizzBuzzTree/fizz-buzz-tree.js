'use strict';

function FizzBuzzTree(tree){

  let traverse =(node)=>{
    if (node.value % 3 === 0 && node.value % 5 ===0){
      node.value='fizzBuzz';
    }
    else if(node.value %3 ===0){
      node.value='fizz';
    }
    else if(node.value % 5 ===0){
      node.value='buzz';
    }
    else{
      node.value=`${node.value}`;
    }
  };

  let check=(node)=>{
    if(node.left) check(node.left);
    if(node.right) check(node.right);
    traverse(node);
  };
  traverse(tree.root);
}

module.exports=FizzBuzzTree;