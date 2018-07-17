'use strict';

const reverseParentheses = (s) => {
  let resultsString = s;
  for (let i = 0; i < resultsString.length; i++) {
    if (resultsString[i] === ')') {
      const back = resultsString.slice(i + 1);
      let reversed = '';
      i -= 1;
      while (resultsString[i] !== '(') {
        reversed += resultsString[i];
        i -= 1;
      }
      const front = resultsString.slice(0, i);
      resultsString = front + reversed + back;
    }
  }
  return resultsString;
};

export default reverseParentheses;
