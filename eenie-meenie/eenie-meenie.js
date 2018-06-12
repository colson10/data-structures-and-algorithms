'use strict';

import Queue from 'queue-fifo';

const eenieMeenie = (array, n) => {
  const queue = new Queue();

  array.map(item => queue.enqueue(item));

  let counter = 0;

  while (!queue.isEmpty()) {
    counter += 1;
    const element = queue.dequeue();

    if (queue.isEmpty()) {
      return element;
    }

    if (counter < n) {
      console.log(element);
      queue.enqueue(element);
    }
    if (counter === n) {
      counter = 0;
    }
  }
  return undefined;
};

export default eenieMeenie;
