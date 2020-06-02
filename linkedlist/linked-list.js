'use strict';


class Node{
  constructor(value){
    this.value=value;
    this.next=null;
  }

}


class linkedList{

  constructor(){}

  insert(value){
    let firstNode = new Node(value);

    if(!this.head){
      this.head=firstNode;
      return this;
    }

    firstNode.next=this.head;
    this.head=firstNode;
    
    return this;
  }

  includes(value){
    if(!this.head){
      return false ;
    }

    let newValue =this.head;

    if(newValue.value ===value){
      return true ;
    }

    while(newValue.next){
      if(newValue.next ===value){
        return true;
      }
        
      newValue=newValue.next;
    }

    return false;    
  }

  toString(){
    let newValue=this.head;
    let str= '';

    if(!this.head){
      return 'empty';
    }

    while(newValue.next){
      str+=`{${newValue.value}->}`;
      newValue=newValue.next;
    }
    str +=`{${newValue.value} -> Null }`;

    return str;
  }

  append(value){

    const node = new Node(value);
    if(!this.head){
      this.head=node;
    }

    let appendValue=this.head;
    while(appendValue.next){
      appendValue=appendValue.next;
    }

    appendValue.next=node;

    return this;

  }

  insertBefore(value, newVal){
    
    if(!this.head){
      return 'empty';
    }

    let node = new Node(newVal);
    let appendBefore = this.head;

    if(appendBefore===value){
      return this.insert(newVal);
    }

    while(appendBefore.next){
      if(appendBefore.next.value===value){
        node.next=appendBefore.next;
        appendBefore.next=node;
        return this;
      }
      appendBefore=appendBefore.next;
    }
    return'empty';
  }

  insertAfter(value,newVal){
    if(!this.head){
      return 'empty';
    }

    let node = new Node(newVal);
    let appendAfter= this.head;

    while(appendAfter){
      if(appendAfter.value===value){
        node.next=appendAfter.next;
        appendAfter.next=node;
        return this;
      }

      appendAfter=appendAfter.next;
    }
    return 'empty';
  }

  kthFromTheEnd(k) {

    if (k <= 0) {
      return 'less than 0 will rejected';
    }
    let currentNode = this.head;
    let score = 0;
    while (currentNode.next) {
      currentNode = currentNode.next;
      score++;
    }
    let target = score - k;
    let counter = 0;
    let currentVal = this.head;
    while (currentVal.next) {
      currentVal = currentVal.next;
      counter++;
      if (counter === target) {
        return currentVal.name;
      }
    }
    return 'Exception';
  }

}


module.exports=linkedList;

