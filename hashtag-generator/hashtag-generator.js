'use strict';

const generateHashtag = (str) => {
  if (str.length < 1) return false;
  
  const arr = str.split(' ');
  
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === ' ') {
      arr.splice(i, 1);
    } else {
      arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
    }
  }
  
  let result = arr.join('');
  if (result.length < 1) return false;
  if (result[0] !== '#') result = `#${result}`;
  if (result.length > 140) return false;
  
  return result;
};

export default generateHashtag;
