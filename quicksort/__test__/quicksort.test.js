'use strict';

import quickSort from '../quicksort';

describe('Testing quickSort function', () => {
  test('should return a sorted array when given an array with all positive integers', () => {
    const testArray = [5, 4, 6, 1, 2, 9, 8, 3, 7];
    expect(quickSort(testArray)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('should return a sorted array when given an array with all negative integers', () => {
    const testArray = [-5, -4, -6, -1, -2, -9, -8, -3, -7];
    expect(quickSort(testArray)).toEqual([-9, -8, -7, -6, -5, -4, -3, -2, -1]);
  });

  test('should return a sorted array with a mix of positive and negative integers', () => {
    const testArray = [-10, 100, 10, 50, -50, -100];
    expect(quickSort(testArray)).toEqual([-100, -50, -10, 10, 50, 100]);
  });

  test('should return a sorted array when given several duplicates', () => {
    const testArray = [5, 2, 3, 2, 2, 4, 1, 2, 2, 2, 2];
    expect(quickSort(testArray)).toEqual([1, 2, 2, 2, 2, 2, 2, 2, 3, 4, 5]);
  });

  test('should return input array if array has 1 value', () => {
    const testArray = [5];
    expect(quickSort(testArray)).toEqual([5]);
  });

  test('should return input array if array is empty', () => {
    const testArray = [];
    expect(quickSort(testArray)).toEqual([]);
  });
});
