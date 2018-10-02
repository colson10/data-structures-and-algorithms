'use strict';

const moveZeroes = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      for (let j = 0; j < i; j++) {
        if (nums[j] === 0) {
          const temp = nums[i];
          nums[i] = nums[j];
          nums[j] = temp;
        }
      }
    }
  }
};

export default moveZeroes;
