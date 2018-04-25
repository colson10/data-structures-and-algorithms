'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  // Big O
  // space O(n)
  // time O (n + (n - k)) === O(n)
  kthFromEnd(k) {
    if (!this.head) throw new Error('Invalid Linked List - no head node');
    let finder = this.head;
    let current = this.head;
    let lenCount = 0;
    
    while (current) {
      if (current.next === null) break;
    
      current = current.next;
      lenCount += 1;
    }
    if (k > lenCount) return null;

    for (let i = 0; i < lenCount - k; i++) {
      finder = finder.next;
    }
    return finder;
  }

  // Included this method for testing
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
};

