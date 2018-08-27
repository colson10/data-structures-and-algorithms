'use strict';

const climbingStairs = (n) => {
  const memo = [0, 1, 2]
  for (let i = 3; i <= n; i++) {
    const first = memo[i - 1] || climbingStairs(i - 1);
    const second = memo[i - 2] || climbingStairs(i - 2);
    memo[i] = first + second;
  }
  return memo[n];
};

export default climbingStairs;
