'use strict';

const mirrorCheck = (node1, node2) => {
  if (!node1 && !node2) {
    return true;
  }
  if (!node1 || !node2) {
    return false;   
  }

  return (
    (node1.val === node2.val) 
      && mirrorCheck(node1.left, node2.right) 
      && mirrorCheck(node1.right, node2.left)
  );     
};

const isSymmetricSimple = (root) => {
  return mirrorCheck(root, root);
};




const isSymmetric = (root) => {
  if (!root) return true;
  if (!root.left && !root.right) return true;
  
  const leftArr = [];
  const rightArr = [];
  
  const traverseLeft = (node, arr) => {
    if (!node) {
      arr.push(null);
      return false;
    }
    arr.push(node.val);
    traverseLeft(node.left, arr);
    traverseRight(node.right, arr);
    return undefined;
  };
  const traverseRight = (node, arr) => {
    if (!node) {
      arr.push(null);
      return false;
    }
    arr.push(node.val);
    traverseRight(node.right, arr);
    traverseLeft(node.left, arr);
    return undefined;
  };
  traverseLeft(root.left, leftArr);
  traverseRight(root.right, rightArr);
      
  if (leftArr.length !== rightArr.length) {
    return false;
  }
  for (let i = 0; i < leftArr.length; i++) {
    if (leftArr[i] !== rightArr[i]) {
      return false;
    }
  }
  return true;
};

export { isSymmetric, isSymmetricSimple };
