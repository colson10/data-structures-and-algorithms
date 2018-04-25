'use strict';

const LinkedList = require('../kth-from-end');

describe('linked-list.test.js', () => {
  test('#constructor', () => {
    const testList = new LinkedList();
    expect(testList.head).toBeNull();
    testList.append(3);
    testList.append(4);
    testList.append(5);
    testList.append(10);
    expect(testList.kthFromEnd(2).value).toEqual(4);
    expect(testList.kthFromEnd(1).value).toEqual(5);
    expect(testList.kthFromEnd(7)).toEqual(null);
  });
});
