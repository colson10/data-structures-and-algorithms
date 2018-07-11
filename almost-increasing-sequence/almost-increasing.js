'use strict';

const almostIncreasingSequence = (sequence) => {
  const flag = false;
  for (let i = 0; i < sequence.length; i++) {
    const front = sequence.slice(0, i);
    const back = sequence.slice(i + 1, sequence.length);
    const tempSequence = front.concat(back);
    if (tempSequence.length === 1) return true;
    for (let j = 1; j < tempSequence.length; j++) {
      if (tempSequence[j] <= tempSequence[j - 1]) break;
      if (j === tempSequence.length - 1) return true;
    }
  }
  
  return flag;
};

export default almostIncreasingSequence;
