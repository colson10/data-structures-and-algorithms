'use strict';

const fizzBuzzTree = (node) => {
  if (!node) return undefined;

  if (node.value % 15 === 0) {
    node.value = 'FizzBuzz';
  } else if (node.value % 5 === 0) {
    node.value = 'Buzz';
  } else if (node.value % 3 === 0) {
    node.value = 'Fizz';
  }

  fizzBuzzTree(node.left);
  fizzBuzzTree(node.right);
  return node;
};

export default fizzBuzzTree;
