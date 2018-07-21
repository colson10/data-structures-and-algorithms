'use strict';

const arrayMaximalAdjacentDifference = (inputArray) => {
  let max = 0;
  
  for (let i = 1; i < inputArray.length; i++) {
    const diff = Math.abs(inputArray[i] - inputArray[i - 1]);
    if (diff > max) {
      max = diff;
    }
  }
  return max;
};

export default arrayMaximalAdjacentDifference;
