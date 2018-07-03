const adjacentElementsProduct = (inputArray) => {
  let largestProduct = -Infinity;
  
  for (let i = 0; i < inputArray.length - 1; i++) {
    const currentProduct = inputArray[i] * inputArray[i + 1];
    if (currentProduct > largestProduct) {
      largestProduct = currentProduct;
    }
  }
  return largestProduct;
};

export default adjacentElementsProduct;
