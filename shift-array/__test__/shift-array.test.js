'use strict';

const insertShiftArray = require('../shift-array');
const remove = require('../remove-shift-array');

describe('shift-array.js', () => {
  test('Even length array should return array with n at the middle index', () => {
    expect(insertShiftArray([1, 2, 4, 5], 3)).toEqual([1, 2, 3, 4, 5]);
    expect(insertShiftArray([4, 5, 6, 7, 8, 2, 3, 4], 10)).toEqual([4, 5, 6, 7, 10, 8, 2, 3, 4]);
  });
  test('Odd length array should return n at middle index, rounding up', () => {
    expect(insertShiftArray([1, 2, 3, 4, 5], 6)).toEqual([1, 2, 3, 6, 4, 5]);
    expect(insertShiftArray([1, 3, 5], 4)).toEqual([1, 3, 4, 5]);
  });
  test('If the array is empty it should return an array with just the value n inside', () => {
    expect(insertShiftArray([], 20)).toEqual([20]);
  });
});

describe('remove-shift-array.js', () => {
  test('Odd length array should return array with the middle index removed', () => {
    expect(remove([1, 2, 3, 4, 5])).toEqual([1, 2, 4, 5]);
    expect(remove([7, 9, 11, 13, 15, 17, 19])).toEqual([7, 9, 11, 15, 17, 19]);
  });
  test('Even length array should return array with the middle index rounded up removed', () => {
    expect(remove([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 5, 6]);
    expect(remove([7, 9, 11, 13])).toEqual([7, 9, 13]);
  });
  test('Empty array input should result in an empty array', () => {
    expect(remove([])).toEqual([]);
  });
});
