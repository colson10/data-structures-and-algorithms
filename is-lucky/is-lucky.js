'use strict';

const isLucky = (n) => {
  const str = n.toString();
  const { length } = str;
  const midpoint = length / 2;
  
  let firstHalf = 0;
  let secondHalf = 0;
  for (let i = 0; i < length; i++) {
    if (i < midpoint) {         
      firstHalf += Number(str[i]);
    } else {
      secondHalf += Number(str[i]);
    }
  }
  
  return firstHalf === secondHalf;
};

export default isLucky;
