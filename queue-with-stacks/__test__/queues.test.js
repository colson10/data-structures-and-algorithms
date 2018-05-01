'use strict';

import Queue from '../queues';

describe('Testing class Queue', () => {
  test('enqueue should push a value to the end of the Stack A storage array', () => {
    const testQueue = new Queue();
    testQueue.enqueue(10);
    testQueue.enqueue(20);
    testQueue.enqueue(30);
    expect(testQueue.stackA.storage[testQueue.stackA.storage.length - 1]).toEqual(30);
    expect(testQueue.stackA.storage[testQueue.stackA.storage.length - 2]).toEqual(20);
    expect(testQueue.stackA.storage[testQueue.stackA.storage.length - 3]).toEqual(10);
  });

  test('dequeue should pop the values in the order they were added (FIFO)', () => {
    const testQueue = new Queue();
    
    testQueue.enqueue(10);
    testQueue.enqueue(20);
    testQueue.enqueue(30);
    expect(testQueue.dequeue()).toEqual(10);
    expect(testQueue.dequeue()).toEqual(20);
  });

  test('dequeue tested with values already in both stacks', () => {
    const testQueue = new Queue();
    testQueue.enqueue(10);
    testQueue.enqueue(20);
    testQueue.enqueue(30);
    testQueue.dequeue();
    testQueue.dequeue();
    testQueue.enqueue(100);
    testQueue.enqueue(500);
    expect(testQueue.dequeue()).toEqual(30);
    expect(testQueue.dequeue()).toEqual(100);
  });
});
