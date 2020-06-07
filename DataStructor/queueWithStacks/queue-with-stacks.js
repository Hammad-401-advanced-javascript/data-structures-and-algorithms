'use strict';

class PseudoClass{

  constructor(){
    this.addIn=new Stack();
    this.remFrom=new Stack();
  }



  enqueue(val){
    this.addIn.push(val);
  }

  dequeue(){
    if(this.remFrom.empty()){
      while(!this.addIn.empty()){
        this.remFrom.push(this.addIn.pop());
      }
    }
    return this.remFrom.pop();
  }
}






class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }
  
  push(val) {
    this.storage[this.size] = val;
    this.size++;
  }
  
  pop() {
    let top = this.storage[this.size - 1];
    this.size--;
    delete this.storage[this.size];
    return top;
  }
  
  peek() {
    return this.storage[this.size - 1];
  }
  
  empty() {
    return this.size === 0;
  }
  
  getSize() {
    return this.size;
  }
}