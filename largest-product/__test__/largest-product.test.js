'use strict';

const largestProduct = require('../largest-product');

describe('largest-product.test.js', () => {
  test('Should return the largest product of up/down values', () => {
    expect(largestProduct.code([[1, 8, 7], [2, 9, 6], [5, 4, 3]])).toEqual(72);
  });
  test('Should return largest product of adjacent values', () => {
    expect(largestProduct.code([[4, 6, 7], [10, 10, 9], [9, 9, 3]])).toEqual(100);
  });
});
