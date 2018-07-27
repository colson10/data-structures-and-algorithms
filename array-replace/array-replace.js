'use strict';

const arrayReplace = (inputArray, elemToReplace, substitutionElem) => {
  return inputArray.map((item) => {
    return item === elemToReplace ? substitutionElem : item;
  });
};

export default arrayReplace;
