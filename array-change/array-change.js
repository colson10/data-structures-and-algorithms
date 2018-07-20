'use strict';

const arrayChange = (inputArray) => {
  let i = 1;
  let moves = 0;
  
  while (i < inputArray.length) {
    if (inputArray[i] <= inputArray[i - 1]) {
      inputArray[i] += 1;
      moves += 1;
    } else {
      i += 1;
    }
  }
  
  return moves;
};

export default arrayChange;
