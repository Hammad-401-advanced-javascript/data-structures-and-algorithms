'use strict';

class Stack {
  constructor(){
    this.storage={};
    this.size=0;
  }
  push(val){
    this.storage[this.size]=val;
    this.size++;
  }
  
  pop(){
    let top=this.storage[this.size-1];
    delete this.storage[this.size];
    this.size--;
    return top;
  }
  
  peek(){
    return this.storage[this.size-1];
  }
  
  isEmpty(){
    let checkSize=this.size;
    if(checkSize===0){
      return 'your storagee is empty';
    }
      
    return ' no its not empty';
  }
  
  
}


// let stack= new Stack();
  
// stack.push('a');
// stack.push('b');
  
// console.log('my peek is : ',stack.peek());
// console.log('is the storage empty : ',stack.isEmpty());




class Queues{
  constructor(){
    this.top=0;
    this.bottom=0;
    this.storage={};
  }

  enqueue(val){
    this.storage[this.top]=val;
    this.top++;
  }

  dequeue(){
    if(!this.isEmpty()){
      let removeOne=this.storage[this.bottom];
      delete this.storage[this.bottom];
      this.bottom++;
      return removeOne;
    }
       
  }

  isEmpty(){
    let checkSize=this.top-this.bottom;
    if(checkSize===0){
      return 'your storagee is empty';
    }
            
    return ' no its not empty';
  }
}

// let Queue= new Queue();
  
// Queue.enqueue('a');
// Queue.enqueue('b');
  
// console.log('my peek is : ',Queue.peek());
// console.log('is the storage empty : ',Queue.isEmpty());






