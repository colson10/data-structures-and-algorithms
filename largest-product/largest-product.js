'use strict';

const largestProduct = module.exports = {};

largestProduct.code = (arr) => {
  let results = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const current = arr[i][j];
      let down;
      if (arr[i + 1]) down = arr[i + 1][j];
      const right = arr[i][j + 1];
      
      if (down && down * current > results) results = down * current;
      if (right && right * current > results) results = right * current;
    }
  }
  return results;
};
