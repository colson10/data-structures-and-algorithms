'use strict';

import Queue from '../queue-breadth-first-traversal';
import TreeNode from '../tree-node';
import BinaryTree from '../binary-tree';

describe('Testing breadth first traversal', () => {
  test('created tree should return an array of values in breadth first order', () => {
    const one = new TreeNode(1);
    const two = new TreeNode(2);
    const three = new TreeNode(3);
    const four = new TreeNode(4);
    const five = new TreeNode(5);
    const six = new TreeNode(6);
    const seven = new TreeNode(7);
    const eight = new TreeNode(8);
    const nine = new TreeNode(9);
    const ten = new TreeNode(10);

    const tree = new BinaryTree(one);

    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    three.left = six;
    three.right = seven;
    four.left = eight;
    five.right = nine;
    seven.left = ten;

    const queue = new Queue();
    expect(queue.breadthFirstTraversal(tree.root)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test('shorter tree should return an array of values in expected order', () => {
    const five = new TreeNode(5);
    const six = new TreeNode(6);
    const seven = new TreeNode(7);
    const eight = new TreeNode(8);
    const nine = new TreeNode(9);
    const ten = new TreeNode(10);

    const tree = new BinaryTree(ten);

    ten.left = nine;
    ten.right = eight;
    nine.left = seven;
    nine.right = six;
    eight.left = five;

    const queue = new Queue();
    expect(queue.breadthFirstTraversal(tree.root)).toEqual([10, 9, 8, 7, 6, 5]);
  });

  test('third test for expected order of values', () => {
    const one = new TreeNode(1);
    const two = new TreeNode(2);
    const three = new TreeNode(3);
    const four = new TreeNode(4);
    const five = new TreeNode(5);
    const six = new TreeNode(6);
    const seven = new TreeNode(7);
    const eight = new TreeNode(8);
    const nine = new TreeNode(9);
    const ten = new TreeNode(10);

    const tree = new BinaryTree(five);

    five.left = four;
    four.left = three;
    three.left = two;
    two.left = one;
    five.right = six;
    six.right = seven;
    seven.right = eight;
    eight.right = nine;
    nine.right = ten;

    const queue = new Queue();
    expect(queue.breadthFirstTraversal(tree.root)).toEqual([5, 4, 6, 3, 7, 2, 8, 1, 9, 10]);
  });
});
