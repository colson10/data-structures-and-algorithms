'use strict';

module.exports = (arr) => {
  const results = [];
  const midpoint = Math.floor(arr.length / 2);
  for (let i = 0; i < arr.length - 1; i += 1) {
    if (i >= midpoint) {
      results[i] = arr[i + 1];
    } else {
      results[i] = arr[i];
    }
  }
  return results;
};
