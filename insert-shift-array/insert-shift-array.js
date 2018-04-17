'use strict';

module.exports = (arr, n) => {
  const results = [];
  const midpoint = Math.ceil(arr.length / 2);
  for (let i = 0; i < arr.length; i += 1) {
    if (i < midpoint) results[i] = arr[i];
    if (i === midpoint) {
      results[i] = n;
      results[i + 1] = arr[i];
    } else {
      results[i + 1] = arr[i];
    }
  }
  return results;
};
