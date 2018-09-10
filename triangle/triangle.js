'use strict';

const minimumTotal = (triangle) => {
  if (triangle.length < 1) return 0;
  
  const counterInit = triangle[0][0];
  const indexInit = 0;
  const levelInit = 0;
  const results = [];
  
  const traverse = (level, index, counter) => {
    const newLevel = level + 1;
      
    if (newLevel < triangle.length) {
      traverse(newLevel, index, counter + triangle[newLevel][index]);
      traverse(newLevel, index + 1, counter + triangle[newLevel][index + 1]);
    }
    if (newLevel === triangle.length) {
      results.push(counter);
    }
  };
  
  traverse(levelInit, indexInit, counterInit);
  
  return Math.min(...results);
};

export default minimumTotal;
