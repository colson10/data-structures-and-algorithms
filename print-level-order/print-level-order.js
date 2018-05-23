'use strict';

import Queue from './queue';

class KAryTree {
  constructor(root = null) {
    this.root = root;
  }

  printLevelOrder() {
    if (!this.root) return null;

    const queue = new Queue();
    queue.enqueue(this.root);

    this.root.level = 1;
    let results = '';

    while (!queue.isEmpty()) {
      const output = queue.dequeue();
      output.children.forEach((child) => {
        child.level = output.level + 1;
        return queue.enqueue(child);
      });
      if (!queue.isEmpty() && output.level === queue.peek().level) {
        results += output.value;
      } else {
        results = `${results}${output.value}\n`;
      }
    }
    return results;
  }
}

export default KAryTree;
