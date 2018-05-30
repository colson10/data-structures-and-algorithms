'use strict';

const repeatedWord = (str) => {
  const words = str.split(' ');
  const map = new Map();

  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase();
    if (
      word.charAt(word.length - 1) === ',' || 
      word.charAt(word.length - 1) === '.' ||
      word.charAt(word.length - 1) === '!' || 
      word.charAt(word.length - 1) === '?'
    ) {
      word = word.slice(0, word.length - 1);
    }
    if (!map[word]) {
      map[word] = true;
    } else {
      return word;
    }
  }
  return 'No duplicates';
};

export default repeatedWord;
