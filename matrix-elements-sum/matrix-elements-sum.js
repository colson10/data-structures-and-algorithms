const matrixElementsSum = (matrix) => {
  const map = new Map();
  let counter = 0;
    
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      if (matrix[x][y] === 0) {
        map[y] = true;
      } else if (!map[y]) {
        counter += matrix[x][y];
      }
    }
  }
  return counter;
};

export default matrixElementsSum;
