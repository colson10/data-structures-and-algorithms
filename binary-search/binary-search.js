'use strict';

const search = module.exports = {};

search.regular = (arr, key) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
};

search.binary = (arr, key) => {
  let first = 0;
  let last = arr.length - 1;
  let midpoint = Math.floor(arr.length / 2);
  
  while (key !== arr[midpoint] && first < last) {
    if (key > arr[midpoint]) {
      first = midpoint + 1;
    } else if (key < arr[midpoint]) {
      last = midpoint - 1;
    }
    midpoint = Math.floor((last + first) / 2);
  }
  return key === arr[midpoint] ? midpoint : -1;
};
