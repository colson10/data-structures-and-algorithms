'use strict';

const checkMaxValue = (rootNode) => {
  let maxValue = -Infinity;

  const findMaxValue = (node) => {
    if (!node) {
      return undefined;
    }
    if (node.value > maxValue) {
      maxValue = node.value;
    }

    findMaxValue(node.left);
    findMaxValue(node.right);
    return undefined;
  };

  findMaxValue(rootNode);
  return maxValue;
};

export default checkMaxValue;
