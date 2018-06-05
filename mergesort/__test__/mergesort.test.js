'use strict';

import mergeSort from '../mergesort';

describe('Testing the mergeSort function', () => {
  test('should return sorted array when given all positive integers', () => {
    const testArray = [9, 5, 8, 4, 7, 3, 6, 2, 1];
    expect(mergeSort(testArray)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('should return sorted array when mix of positive and negative integers', () => {
    const testArray = [100, -100, -55, 77, -77, 55];
    expect(mergeSort(testArray)).toEqual([-100, -77, -55, 55, 77, 100]);
  });

  test('should return sorted array when all negative integers', () => {
    const testArray = [-9, -5, -8, -4, -7, -3, -6, -2, -1];
    expect(mergeSort(testArray)).toEqual([-9, -8, -7, -6, -5, -4, -3, -2, -1]);
  });

  test('should return given array if contains a single integer', () => {
    const testArray = [5];
    expect(mergeSort(testArray)).toEqual([5]);
  });

  test('should return null if given empty array', () => {
    const testArray = [];
    expect(mergeSort(testArray)).toEqual(null);
  });
});
