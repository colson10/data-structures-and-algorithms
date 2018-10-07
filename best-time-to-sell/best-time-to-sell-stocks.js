'use strict';

const maxProfit = (prices) => {
  let profit = 0;
  let min = prices[0];
  
  for (let i = 1; i < prices.length; i++) {
    const diff = prices[i] - min;
    if (diff > 0 && diff > profit) {
      profit = diff;
    }
    min = Math.min(min, prices[i]);
  }
  return profit;
};

export default maxProfit;
