'use strict';

import Stack from './stacks';

class Queue {
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
  }
  
  enqueue(value) {
    this.stackA.storage.push(value);
  }

  dequeue() {
    if (this.stackB.storage.length > 0) {
      return this.stackB.storage.pop();
    }
    while (this.stackA.storage.length > 0) {
      const popped = this.stackA.storage.pop();
      this.stackB.storage.push(popped);
    }
    return this.stackB.storage.pop();
  }
}

export default Queue;
