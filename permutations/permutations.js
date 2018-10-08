'use strict';

const permute = (nums) => {
  const results = [];
  const toBuild = [];

  const findPermutations = (remaining, build) => {
    if (remaining.length < 1) {
      results.push(build);
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      const curr = remaining[i];
      findPermutations(remaining.slice(0, i).concat(remaining.slice(i + 1)), build.concat(curr));
    }
  };
    
  findPermutations(nums, toBuild);
  return results;
};

export default permute;
