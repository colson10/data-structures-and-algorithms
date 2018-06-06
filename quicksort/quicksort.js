'use strict';

const quickSort = (array) => {
  if (array.length < 2) return array;
  const pivot = [array[0]];
  const left = [];
  const right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  const leftSort = quickSort(left);
  const rightSort = quickSort(right);
  const results = leftSort.concat(pivot).concat(rightSort);

  return results;
};

export default quickSort;
