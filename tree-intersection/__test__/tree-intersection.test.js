'use strict';

import BinaryTree from '../binary-tree';
import Node from '../node';
import treeIntersection from '../tree-intersection';

describe('Testing the tree intersection function to return shared values in two trees', () => {
  test('should return an array with the shared values in an order of inOrderTraversal based on the second tree', () => {
    const one = new Node(1);
    const seven = new Node(7);
    const nine = new Node(9);
    const fifteen = new Node(15);
    const fortyFive = new Node(45);
    const thirteen = new Node(13);
    const ten = new Node(10);
    const tree = new BinaryTree(one);

    one.left = seven;
    one.right = fortyFive;
    
    seven.left = nine;
    seven.right = fifteen;

    fortyFive.left = thirteen;
    fortyFive.right = ten;

    const two = new Node(2);
    const seven2 = new Node(7);
    const fifteen2 = new Node(15);
    const fortyFive2 = new Node(45);
    const three = new Node(3);
    const four = new Node(4);
    const tree2 = new BinaryTree(seven2);

    seven2.left = two;
    seven2.right = fifteen2;
    fifteen2.left = three;
    fifteen2.right = four;
    two.right = fortyFive2;

    expect(treeIntersection(tree, tree2)).toEqual([7, 45, 15]);    
  });

  test('should return shared values when some are negative', () => {
    const one = new Node(1);
    const seven = new Node(-7);
    const nine = new Node(9);
    const fifteen = new Node(-15);
    const fortyFive = new Node(45);
    const thirteen = new Node(13);
    const ten = new Node(10);
    const tree = new BinaryTree(one);

    one.left = seven;
    one.right = fortyFive;
    
    seven.left = nine;
    seven.right = fifteen;

    fortyFive.left = thirteen;
    fortyFive.right = ten;

    const two = new Node(2);
    const seven2 = new Node(-7);
    const fifteen2 = new Node(-15);
    const fortyFive2 = new Node(45);
    const three = new Node(3);
    const four = new Node(4);
    const tree2 = new BinaryTree(seven2);

    seven2.left = two;
    seven2.right = fifteen2;
    fifteen2.left = three;
    fifteen2.right = four;
    two.right = fortyFive2;

    expect(treeIntersection(tree, tree2)).toEqual([-7, 45, -15]);
  });

  test('Should return empty array if no shared values', () => {
    const hundred = new Node(100);
    const seventy = new Node(70);
    const ninety = new Node(90);
    const fifty = new Node(50);
    const forty = new Node(40);
    const thirteen = new Node(13);
    const ten = new Node(10);
    const tree = new BinaryTree(hundred);

    hundred.left = seventy;
    hundred.right = forty;
    
    seventy.left = ninety;
    seventy.right = fifty;

    forty.left = thirteen;
    forty.right = ten;

    const two = new Node(2);
    const seven2 = new Node(7);
    const fifteen2 = new Node(15);
    const fortyFive2 = new Node(45);
    const three = new Node(3);
    const four = new Node(4);
    const tree2 = new BinaryTree(seven2);

    seven2.left = two;
    seven2.right = fifteen2;
    fifteen2.left = three;
    fifteen2.right = four;
    two.right = fortyFive2;
    
    expect(treeIntersection(tree, tree2)).toEqual([]);
  });

  test('should return null if only one input', () => {
    const one = new Node(1);
    const tree = new BinaryTree(one);
    expect(treeIntersection(tree)).toEqual(null);
  });
});
