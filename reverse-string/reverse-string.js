'use strict';

const revStringSplits = (str) => {
  let result = str;
  const mid = Math.floor(str.length / 2);

  for (let i = 0; i < mid; i++) {
    const end = result.slice(i, i + 1);
    const beginning = result.slice(result.length - 1 - i, result.length - i);
    result = result.slice(0, i) + beginning 
    + result.slice(i + 1, result.length - 1 - i) 
    + end 
    + result.slice(result.length - i);
  }
  return result;
};

const oneLinerReverse = (str) => {
  return str.split('').reverse().join('');
};

const decrementReverse = (str) => {
  let result = '';

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};

export { revStringSplits, oneLinerReverse, decrementReverse };