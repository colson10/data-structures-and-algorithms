'use strict';

const minesweeper = (matrix) => {
  const output = matrix.map((item) => {
    return item.map(item2 => item2);
  });
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let total = 0;
      if (matrix[i - 1] && matrix[i - 1][j - 1] && matrix[i - 1][j - 1] === true) total += 1;
      if (matrix[i - 1] && matrix[i - 1][j] && matrix[i - 1][j] === true) total += 1;
      if (matrix[i - 1] && matrix[i - 1][j + 1] && matrix[i - 1][j + 1] === true) total += 1;
      if (matrix[i][j - 1] && matrix[i][j - 1] === true) total += 1;
      if (matrix[i][j + 1] && matrix[i][j + 1] === true) total += 1;
      if (matrix[i + 1] && matrix[i + 1][j - 1] && matrix[i + 1][j - 1] === true) total += 1;
      if (matrix[i + 1] && matrix[i + 1][j] && matrix[i + 1][j] === true) total += 1;
      if (matrix[i + 1] && matrix[i + 1][j + 1] && matrix[i + 1][j + 1] === true) total += 1;
      output[i][j] = total;
    }
  }
  return output;
};

export default minesweeper;
