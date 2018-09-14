'use strict';

const reverseWords = (a) => {
  a.reverse();

  let start = 0;
  let end = a.indexOf(' ');
  let flag = true;

  while (flag) {
    if (end === -1) {
      end = a.length;
      flag = false;
    }
    const mid = Math.floor((end - start) / 2);
    for (let i = 0; i < mid; i++) {
      const temp = a[start + i];
      a[start + i] = a[end - 1 - i];
      a[end - 1 - i] = temp;
    }
    start = end + 1;
    end = a.indexOf(' ', end + 1);
  }
  
  return a;
};

export default reverseWords;
