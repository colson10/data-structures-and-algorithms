'use strict';

const LinkedList = require('../linked-list-insertions');

describe('linked-list.test.js', () => {
  test('#constructor', () => {
    const testList = new LinkedList();
    expect(testList.head).toBeNull();
    testList.append(3);
    testList.append(4);
    testList.append(5);
    testList.append(10);
    expect(testList.head.value).toEqual(3);
    expect(testList.head.next.value).toEqual(4);
    expect(testList.head.next.next.value).toEqual(5);
    expect(testList.head.next.next.next.value).toEqual(10);
  });

  test('insertAtEnd should add a node at the end, pop method should remove the last node', () => {
    const testList = new LinkedList();
    expect(testList.head).toBeNull();
    testList.append(3);
    testList.append(4);
    testList.append(5);
    testList.append(10);
    expect(testList.head.value).toEqual(3);
    expect(testList.head.next.value).toEqual(4);
    expect(testList.head.next.next.value).toEqual(5);
    expect(testList.head.next.next.next.value).toEqual(10);
  });

  test('insertBefore method should insert a new node before a designated value', () => {
    const testList = new LinkedList();
    expect(testList.head).toBeNull();
    testList.append(3);
    testList.append(4);
    testList.append(5);
    testList.append(10);
    expect(testList.head.value).toEqual(3);
    expect(testList.head.next.value).toEqual(4);
    expect(testList.head.next.next.value).toEqual(5);
    expect(testList.head.next.next.next.value).toEqual(10);
    
    testList.insertBefore(5, 100);
    expect(testList.head.next.value).toEqual(4);
    expect(testList.head.next.next.value).toEqual(100);
    expect(testList.head.next.next.next.value).toEqual(5);

    testList.insertBefore(100, 7);
    expect(testList.head.next.value).toEqual(4);
    expect(testList.head.next.next.value).toEqual(7);
    expect(testList.head.next.next.next.value).toEqual(100);
  });

  test('insertAfter method should insert a new node after a designated value', () => {
    const testList = new LinkedList();
    expect(testList.head).toBeNull();
    testList.append(3);
    testList.append(4);
    testList.append(5);
    testList.append(10);
    expect(testList.head.value).toEqual(3);
    expect(testList.head.next.value).toEqual(4);
    expect(testList.head.next.next.value).toEqual(5);
    expect(testList.head.next.next.next.value).toEqual(10);
    
    testList.insertAfter(5, 100);
    expect(testList.head.next.value).toEqual(4);
    expect(testList.head.next.next.value).toEqual(5);
    expect(testList.head.next.next.next.value).toEqual(100);

    testList.insertAfter(4, 7);
    expect(testList.head.next.value).toEqual(4);
    expect(testList.head.next.next.value).toEqual(7);
    expect(testList.head.next.next.next.value).toEqual(5);
  });
});
