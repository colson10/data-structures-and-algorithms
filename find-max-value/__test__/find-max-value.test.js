'use strict';

import Node from '../node';
import BinaryTree from '../binary-tree';
import findMaxValue from '../find-max-value';

describe('Testing findMaxValue function on a binary tree', () => {
  test('return max value of binary tree', () => {
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
    // const fifty = new Node(50);

    const tree = new BinaryTree(one);

    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    three.left = six;
    three.right = seven;
    four.left = eight;
    five.right = nine;
    five.left = ten;
    expect(findMaxValue(tree.root)).toEqual(10);
  });

  test('should return new max value', () => {
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
    const fifty = new Node(50);

    // // let tree = new BinaryTree(one);
    fifty.left = two;
    fifty.right = three;
    two.left = four;
    two.right = five;
    three.left = six;
    three.right = seven;
    four.left = eight;
    five.right = nine;
    five.left = ten;
    four.right = one;

    const tree = new BinaryTree(fifty);

    expect(findMaxValue(tree.root)).toEqual(50);
  });

  test('all values going to the right', () => {
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
    const fifty = new Node(50);
    one.right = three;
    three.right = seven;
    seven.right = two;
    two.right = five;
    five.right = nine;
    nine.right = ten;
    ten.right = four;
    four.right = fifty;
    fifty.right = six;
    six.right = eight;
    const tree = new BinaryTree(one);

    expect(findMaxValue(tree.root)).toEqual(50);
  });

  test('highest value at root node', () => {
    const four = new Node(4);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    const ten = new Node(10);
    const fifty = new Node(50);
    fifty.left = ten;
    ten.right = four;
    ten.left = six;
    four.right = seven;
    six.right = eight;
    const tree = new BinaryTree(fifty);

    expect(findMaxValue(tree.root)).toEqual(50);
  });
});
