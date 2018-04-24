'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  // Big O
  // space O(1)
  // time O(n)
  append(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node; 
      return this;
    }
    let curr = this.head;

    while (curr) {
      if (curr.next === null) {
        curr.next = node;
        return this;
      }
      curr = curr.next;
    }
    return null;
  }

  // Big O
  // space O(1)
  // time O(n)
  insertBefore(val, newVal) {
    if (!this.head) throw new Error('Invalid input');

    const node = new Node(newVal);
    let prev = this.head;
    let curr = prev.next;

    while (curr) {
      if (curr.value === val) {
        prev.next = node;
        node.next = curr;
        return this;
      }
    
      prev = curr;
      curr = curr.next;
    }
    return null;
  }

  // Big O
  // space O(1)
  // time O(n)
  insertAfter(val, newVal) {
    if (!this.head) throw new Error('Invalid input');

    const node = new Node(newVal);
    let curr = this.head;

    while (curr) {
      if (curr.value === val) {
        const temp = curr.next;
        curr.next = node;
        node.next = temp;
        return this;
      }

      curr = curr.next;
    }
    return null;
  }
};

