'use strict';

import Queue from 'queue-fifo';

const eenie2 = (array, n) => {
  const queue = new Queue();
  let counter = array.length - 1;

  for (let i = 0; i < array.length; i++) {
    queue.enqueue(array[i]);
  }

  while (counter !== 0) {
    for (let k = 0; k < n - 1; k++) {
      const element = queue.dequeue();
      console.log(element);
      queue.enqueue(element);
    }

    queue.dequeue();
    counter -= 1;
  }

  return queue.dequeue();
};

export default eenie2;
