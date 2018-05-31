'use strict';

const _preOrderTraversal = (node, map, array, callback) => { // eslint-disable-line
  if (!node) return undefined;
  callback(map, node.value, array);

  _preOrderTraversal(node.left, map, array, callback);
  _preOrderTraversal(node.right, map, array, callback);
  return undefined;
};

const _mapValues = (hashmap, value) => { // eslint-disable-line
  hashmap[value] = 1;
};
const _pushValues = (hashmap, value, array) => { // eslint-disable-line
  if (hashmap[value]) {
    array.push(value);
  }
};


export default (tree1, tree2) => {
  if (!tree1 || !tree2) {
    return null;
  }
  const map = new Map();
  const results = [];

  _preOrderTraversal(tree1.root, map, null, _mapValues);
  _preOrderTraversal(tree2.root, map, results, _pushValues);
  return results;
};
