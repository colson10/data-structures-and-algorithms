'use strict';

const maxSubsetSum = (arr) => {
  arr[0] = Math.max(0, arr[0]);
  arr[1] = Math.max(arr[0], arr[1]);
  for (let i = 2; i < arr.length; i++) {
    arr[i] = Math.max(arr[i - 1], arr[i - 2] + arr[i]);
    console.log(arr);
  }
  
  return arr[arr.length - 1];
};

export default maxSubsetSum;
