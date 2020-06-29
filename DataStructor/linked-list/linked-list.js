'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

}


class linkedList {

  constructor() { }

  insert(value) {
    let firstNode = new Node(value);

    if (!this.head) {
      this.head = firstNode;
      return this;
    }

    firstNode.next = this.head;
    this.head = firstNode;

    return this;
  }

  include(value) {
    if (!this.head) {
      return false;
    }

    let newValue = this.head;

    if (newValue.value === value) {
      return true;
    }

    while (newValue.next) {
      if (newValue.next === value) {
        return true;
      }

      newValue = newValue.next;
    }

    return false;
  }

  toString() {
    let newValue = this.head;
    let str = '';

    if (!this.head) {
      return 'empty';
    }

    while (newValue.next) {
      str += `{${newValue.value}->}`;
      newValue = newValue.next;
    }
    str += `{${newValue.value} -> Null }`;

    return str;
  }

}


module.exports = linkedList;