const constructSubmatrix = (matrix, rowsToDelete, columnsToDelete) => {
  const rowFiltered = matrix.filter((row, index) => {
    return !rowsToDelete.includes(index);
  });

  const columnsFiltered = rowFiltered.map((elem) => {
    const newElem = elem.filter((item, index) => {
      return !columnsToDelete.includes(index);
    });
    return newElem;
  });

  return columnsFiltered;
};

export default constructSubmatrix;
