'use strict';

const alternatingSums = (a) => {
  const one = [];
  const two = [];
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      one.push(a[i]);
    } else {
      two.push(a[i]);
    }
  }
  const oneReduced = one.length > 0 ? one.reduce((total, num) => total + num) : 0; 
  const twoReduced = two.length > 0 ? two.reduce((total, num) => total + num) : 0;
  return [oneReduced, twoReduced];
};

export default alternatingSums;
