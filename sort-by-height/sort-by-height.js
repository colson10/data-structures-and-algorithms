'use strict';

const sortByHeight = (a) => {
  const people = a.filter(item => item !== -1).sort((b, c) => b - c);
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) a[i] = people.shift();
  }
  return a;
};

export default sortByHeight;
