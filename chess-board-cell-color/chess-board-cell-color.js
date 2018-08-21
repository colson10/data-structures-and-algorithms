'use strict';

const chessBoardCellColor = (cell1, cell2) => {
  const lettersNum = '_ABCDEFGH';
    
  const first = Number(lettersNum.indexOf(cell1[0])) + Number(cell1[1]);
    
  const second = Number(lettersNum.indexOf(cell2[0])) + Number(cell2[1]);
    
  return first % 2 === second % 2;
};

export default chessBoardCellColor;
