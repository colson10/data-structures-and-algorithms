'use strict';

import KAryTree from '../print-level-order';
import KAryNode from '../k-ary-node';

describe('Testing the print level order method on the k-ary-tree', () => {
  test('should return a string with breaks at each level of the tree', () => {
    const one = new KAryNode('A');
    one.appendChild('B');
    one.appendChild('C');
    one.appendChild('D');
    
    one.children[0].appendChild('E');
    one.children[1].appendChild('F');
    one.children[1].appendChild('G');

    one.children[0].children[0].appendChild('H');
    one.children[1].children[0].appendChild('I');
    one.children[1].children[1].appendChild('J');

    one.children[0].children[0].children[0].appendChild('K');
    one.children[0].children[0].children[0].appendChild('L');
    one.children[1].children[1].children[0].appendChild('M');
    one.children[1].children[1].children[0].appendChild('N');
    
    const tree = new KAryTree(one);

    expect(tree.printLevelOrder()).toEqual('A\nBCD\nEFG\nHIJ\nKLMN\n');
  });

  test('should return a string with just two levels', () => {
    const one = new KAryNode('A');
    one.appendChild('B');
    one.appendChild('C');
    one.appendChild('D');
    one.appendChild('E');
    one.appendChild('F');
    one.appendChild('G');
    const tree = new KAryTree(one);

    expect(tree.printLevelOrder()).toEqual('A\nBCDEFG\n');
  });

  test('should return null', () => {
    const tree = new KAryTree();
    expect(tree.printLevelOrder()).toEqual(null);
  });
});
