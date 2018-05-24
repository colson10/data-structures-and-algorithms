'use strict';

import Queue from 'queue-fifo';
import LinkedList from './linked-list';

const findMatches = (node, n) => {
  if (!node) return null;
  const queue = new Queue();
  const list = new LinkedList();
  queue.enqueue(node);

  while (!queue.isEmpty()) {
    const output = queue.dequeue();
    output.children.forEach((child) => {
      return queue.enqueue(child);
    });
    if (output.value === n) {
      list.insertAtHead(output);
    }
  }
  return list;
};

export default findMatches;
