'use strict';

const checkMagazine = (magazine, note) => {
  const hashmap = new Map();
  magazine.map((word) => {
    if (!hashmap[word]) hashmap[word] = 1;
    else hashmap[word] += 1;
    return undefined;
  });
  for (let i = 0; i < note.length; i++) {
    if (!hashmap[note[i]]) {
      console.log('No');
      return;
    } else if (hashmap[note[i]] === 0) {
      console.log('No');
      return;
    } else if (hashmap[note[i]]) hashmap[note[i]] -= 1;
  }
  console.log('Yes');
};

export default checkMagazine;
