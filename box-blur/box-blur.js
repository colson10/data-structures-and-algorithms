'use strict';

const boxBlur = (image) => {
  const columns = image[0].length - 2;
  const rows = image.length - 2;
  const results = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      let result = (
        image[i][j] 
        + image[i][j + 1] 
        + image[i][j + 2] 
        + image[i + 1][j] 
        + image[i + 1][j + 1] 
        + image[i + 1][j + 2] 
        + image[i + 2][j] 
        + image[i + 2][j + 1] 
        + image[i + 2][j + 2]
      );
      result = Math.floor(result / 9);
      row.push(result);
    }
    results.push(row);
  }
  return results;
};

export default boxBlur;
