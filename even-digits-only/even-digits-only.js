'use strict';

const evenDigitsOnly = (n) => {
  const nString = n.toString();
  for (let i = 0; i < nString.length; i++) {
    if (Number(nString[i]) % 2 !== 0) {
      return false;
    }
  }   
  return true;
};

export default evenDigitsOnly;
