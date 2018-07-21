'use strict';

const isIPv4Address = (inputString) => {
  const address = inputString.split('.');
  if (address.length !== 4) return false;
  for (let i = 0; i < address.length; i++) {
    if (isNaN(address[i])) return false; // eslint-disable-line
    if (address[i] < 0 || address[i] > 255 || address[i].length < 1) return false;
    if (address[i][0] === '0' && address[i].length > 1) return false;
  }
  return true;
};

export default isIPv4Address;
