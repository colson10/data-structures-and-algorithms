'use strict';

const _inOrderTraversal = (node, map, array, callback) => { // eslint-disable-line
  if (!node) return undefined;
  callback(map, node.value, array);

  _inOrderTraversal(node.left, map, array, callback);
  _inOrderTraversal(node.right, map, array, callback);
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

  _inOrderTraversal(tree1.root, map, null, _mapValues);
  _inOrderTraversal(tree2.root, map, results, _pushValues);
  return results;
};

// const inOrderTraversalMap = (node, map) => {
//   if (!node) return undefined;
//   map[node.value] = 1;

//   inOrderTraversalMap(node.left, map);
//   inOrderTraversalMap(node.right, map);
//   return undefined;
// };

// const resultsInOrderTraversal = (node, map, results) => {
//   if (!node) return undefined;
//   if (map[node.value]) {
//     results.push(node.value);
//   }
//   resultsInOrderTraversal(node.left, map, results);
//   resultsInOrderTraversal(node.right, map, results);
//   return undefined;
// };

// const treeIntersection = (tree1, tree2) => {
//   if (!tree1 || !tree2) {
//     return null;
//   }
//   const map = new Map();
//   const results = [];

//   inOrderTraversalMap(tree1.root, map);
//   resultsInOrderTraversal(tree2.root, map, results);
//   return results;
// };

// export default treeIntersection;
