'use strict';

const getRow = (rowIndex) => {
  if (rowIndex < 0) return null;
  if (rowIndex === 0) return [1];
  
  const triRow = [1, 1];
  let currRow = 2;
  
  if (rowIndex === 1) return triRow;
  
  while (currRow <= rowIndex) {
    let temp1 = 1;
    let temp2 = 1;
    
    for (let i = 1; i <= triRow.length; i++) {
      if (i === triRow.length) {
        triRow.push(1);
        break;
      } else {
        temp2 = triRow[i];
        triRow[i] = temp2 + temp1;
        temp1 = temp2;
      }
    }
    
    currRow += 1;
  }
  
  return triRow;
};

export default getRow;
