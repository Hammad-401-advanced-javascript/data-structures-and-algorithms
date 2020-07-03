'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return this;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = node;
    return this;
  }

  values() {
    let current = this.head;
    let values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}


class HashTable {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }

  hash(key) {
    return key.split('').reduce((acc, val) => {
      return acc + val.charCodeAt(0);
    }, 0) * 19 % this.size;
  }

  add(key, value) {
    let hashed = this.hash(key);
    if (!this.storage[hashed]) {
      this.storage[hashed] = new Linkedlist();
    }
    let entry = { [key]: value };
    this.storage[hashed].add(entry);
  }

  get(key) {
    let hashed = this.hash(key);
    if (this.contains(key)) {
      return this.storage[hashed].head.value[key];
    }
    else {
      return 'this key incorrect';
    }
  }

  contains(key) {
    let hashed = this.hash(key);
    return this.storage[hashed] ? true : false;
  }

}

module.exports = HashTable;