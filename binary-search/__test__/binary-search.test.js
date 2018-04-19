'use strict';

const search = require('../binary-search');

describe('binary-search.js', () => {
  test('Should return the index of the key if it exists in the array', () => {
    expect(search.regular([1, 2, 3, 4, 5], 2)).toEqual(1);
    expect(search.regular([2, 3, 4, 6, 8, 10, 12, 15], 12)).toEqual(6);
    expect(search.regular([1, 10, 100], 1)).toEqual(0);
    expect(search.regular([1, 10, 100], 100)).toEqual(2);
  });
  test('Should return -1 if the array does not include the key', () => {
    expect(search.regular([1, 2, 3, 4, 5], 10)).toEqual(-1);
    expect(search.regular([2, 3, 4, 6, 8, 10, 12, 15], 14)).toEqual(-1);
    expect(search.regular([1, 10, 100], 5)).toEqual(-1);
  });
  test('Actual Binary search...should return the index of the key if it exists in the array', () => {
    expect(search.binary([1, 2, 3, 4, 5], 2)).toEqual(1);
    expect(search.binary([2, 3, 4, 6, 8, 10, 12, 15], 12)).toEqual(6);
    expect(search.binary([1, 10, 100], 1)).toEqual(0);
    expect(search.binary([1, 10, 100], 100)).toEqual(2);
  });
  test('Binary search...should return -1 if the array does not include the key', () => {
    expect(search.binary([1, 2, 3, 4, 5], 10)).toEqual(-1);
    expect(search.binary([2, 3, 4, 6, 8, 10, 12, 15], 14)).toEqual(-1);
    expect(search.binary([1, 10, 100], 5)).toEqual(-1);
  });
});
