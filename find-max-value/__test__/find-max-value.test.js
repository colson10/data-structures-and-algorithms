'use strict';

import Node from '../node';
import BinaryTree from '../binary-tree';
import findMaxValue from '../find-max-value';

describe('Testing findMaxValue function on a binary tree', () => {
  const one = new Node(1);
  const two = new Node(2);
  const three = new Node(3);
  const four = new Node(4);
  const five = new Node(5);
  const six = new Node(6);
  const seven = new Node(7);
  const eight = new Node(8);
  const nine = new Node(9);
  const ten = new Node(10);

  let tree = new BinaryTree(one);

  one.left = two;
  one.right = three;
  two.left = four;
  two.right = five;
  three.left = six;
  three.right = seven;
  four.left = eight;
  five.right = nine;
  four.left = ten;

  afterAll(() => {
    tree = null;
  });

  test('return max value of binary tree', () => {
    expect(findMaxValue(tree.root)).toEqual(10);
  });
});
