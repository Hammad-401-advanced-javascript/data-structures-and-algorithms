'use strict';

class Node{
  constructor(data,left=null,right=null){
    this.data=data;
    this.left=left;
    this.right=right;
  }
}

class  BinaryTree{
  constructor(){
    this.root=null;
  }



  preOrder(){
    if(this.root===null) return null;
    const nodeList=[];
    const traverse=function(current){
      nodeList.push(current.data);
      if(current.left) traverse(current.left);
      if(current.right) traverse(current.right);
    };

    traverse(this.root);
    return nodeList;
  }


  inOrder(){
    if(this.root === null) return null;
    const nodeList=[];

    const traverse=function(current){
      if(current.left) traverse(current.left);
      nodeList.push(current.data);
      if(current.right) traverse(current.right);
    };

    traverse(this.root);
    return(nodeList);
  }


  postOrder(){
    if(this.root===null)return null;
    const nodeList=[];
    const traverse=function(current){
      if(current.left) traverse(current.left);
      if(current.right) traverse(current.right);
      nodeList.push(current.data);
    };

    traverse(this.root);
    return(nodeList);
  }

}

class BinarySearchTree{
  constructor(){
    this.root=null;
  }



  add(data){
    const node = new Node(data);

    if(this.root===null) {
      this.root=node;
    } else {
      const searchNode=function(current){
        if(data<current.data){
          if(current.left===null){
            current.left=node;
            return;
          } else{
            return searchNode(current.left);
          }
        } else if(data>current.data){
          if(current.right === null){
            current.right=node;
            return;
          } else{
            return searchNode(current.right);
          }
        } else {
          return null;
        }
      };

      return searchNode(this.root);
    }

  }


  toString() {
    return JSON.stringify(this.root);
  }

  contains(data){
    const searchNode=function(current){
      if(current===null) return false;
      if(data<current.data) return searchNode(current.left);
      if(data>current.data) return searchNode(current.right);
        
      return true;
    };
    return searchNode(this.root);
  }
}



const tree = new BinarySearchTree();
tree.add(13);
tree.add(3);
tree.add(37);
tree.contains(13);


console.log(tree.toString());
console.log(tree.contains());




