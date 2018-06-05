'use strict';

const mergeTwoArrays = (array1, array2) => {
  const sorted = [];
  let index = 0;
  let left = 0;
  let right = 0;

  while (left < array1.length && right < array2.length) {
    if (array1[left] < array2[right]) {
      sorted[index] = array1[left];
      left += 1;
    } else {
      sorted[index] = array2[right];
      right += 1;
    }
    index += 1;
  }
  return sorted.concat(array1.slice(left)).concat(array2.slice(right));
};

const mergeSort = (array) => {
  if (array.length === 0 || !array) return null;
  if (array.length === 1) return array;
  const midpoint = Math.floor(array.length / 2);
  const left = array.slice(0, midpoint);
  const right = array.slice(midpoint, array.length);
  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  return mergeTwoArrays(leftSorted, rightSorted);
};

export default mergeSort;
