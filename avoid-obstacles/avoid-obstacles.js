'use strict';

const avoidObstacles = (inputArray) => {
  let flag = true;
  for (let i = 2; i < Math.max(...inputArray); i++) {
    let counter = i;
    while (counter <= Math.max(...inputArray)) {
      if (inputArray.includes(counter)) {
        flag = false;
        counter = Infinity;
      } else {
        flag = true;
      }
      counter += i;
    }
    if (flag === true) {
      return i;
    }
  }
  return Math.max(...inputArray) + 1;
};

export default avoidObstacles;
