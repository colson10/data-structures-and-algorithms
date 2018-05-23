'use strict';

export default class Queue {
  constructor() {
    this.storage = [];
  }
  enqueue(value) {
    this.storage.unshift(value);
  }
  dequeue() {
    return this.storage.pop();
  }
  isEmpty() {
    if (this.storage.length < 1) {
      return true;
    }
    return false;
  }

  peek() {
    return this.storage[this.storage.length - 1];
  }
}
