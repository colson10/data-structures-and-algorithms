'use strict';

const alphabeticShift = (inputString) => {
  const letters = 'abcdefghijklmnopqrstuvwxyza';
  let shiftedString = '';
  
  for (let i = 0; i < inputString.length; i++) {
    const replacementIndex = letters.indexOf(inputString[i]) + 1;
    shiftedString += letters[replacementIndex];
  }
  
  return shiftedString;
};

export default alphabeticShift;
