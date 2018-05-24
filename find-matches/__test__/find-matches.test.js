'use strict';

import KAryNode from '../k-ary-node';
import findMatches from '../find-matches';

describe('Testing the find-matches function', () => {
  test('should return a collection of all of the nodes that have the value of the target', () => {
    const one = new KAryNode(5);
    one.appendChild(2);
    one.appendChild(5);
    one.appendChild(4);
      
    one.children[1].appendChild(5);
    one.children[1].appendChild(5);
    one.children[1].appendChild(7);

    expect(findMatches(one, 5).head.value.value).toEqual(5);
    expect(findMatches(one, 5).head.value.children).toBeTruthy();
    expect(findMatches(one, 5).head.next.value.value).toEqual(5);
    expect(findMatches(one, 5).head.next.next.value.value).toEqual(5);
    expect(findMatches(one, 5).head.next.next.next.value.value).toEqual(5);
  });

  test('should return falsy if target value not in the linked-list', () => {
    const one = new KAryNode(47);
    one.appendChild(200);
    one.appendChild(-55);
    one.appendChild(47);
      
    one.children[0].appendChild(25);
    one.children[1].appendChild(95);
    one.children[2].appendChild(47);

    expect(findMatches(one, 1).head).toEqual(null);
  });

  test('should return target value only three times and then null', () => {
    const one = new KAryNode(47);
    one.appendChild(200);
    one.appendChild(-55);
    one.appendChild(47);
      
    one.children[0].appendChild(25);
    one.children[1].appendChild(95);
    one.children[2].appendChild(47);

    expect(findMatches(one, 47).head.value.value).toEqual(47);
    expect(findMatches(one, 47).head.next.value.value).toEqual(47);
    expect(findMatches(one, 47).head.next.next.value.value).toEqual(47);
    expect(findMatches(one, 47).head.next.next.next).toEqual(null);
  });
});
