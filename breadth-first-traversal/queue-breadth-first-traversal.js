'use strict';

class Queue {
  constructor() {
    this.storage = [];
  }
  
  enqueue(node) {
    this.storage.unshift(node);
  }

  dequeue() {
    return this.storage.pop();
  }

  isEmpty() {
    return this.storage.length < 1;
  }

  breadthFirstTraversal(node) {
    const values = [];
    this.enqueue(node);
    while (!this.isEmpty()) {
      const curr = this.dequeue();
      values.push(curr.value);
      console.log(curr.value);
      if (curr.left) {
        this.enqueue(curr.left);
      }
      if (curr.right) {
        this.enqueue(curr.right);
      }
    }
    return values;
  }
}

export default Queue;
