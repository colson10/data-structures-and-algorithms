'use strict';

const isPalindrome = (s) => {
  const filtered = s.toLowerCase().replace(/[^a-z0-9]/gm, '');
  const mid = Math.floor(filtered.length / 2);
  
  for (let i = 0; i < mid; i++) {
    if (filtered[i] !== filtered[filtered.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

export default isPalindrome;
