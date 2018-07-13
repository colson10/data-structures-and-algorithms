const allLongestStrings = (inputArray) => {
  let longest = 0;
  
  inputArray.map((item) => {
    if (item.length > longest) longest = item.length;
    return undefined;
  });
  
  const filteredArr = inputArray.filter((item) => {
    return item.length === longest;
  });
  
  return filteredArr;
};

export default allLongestStrings;
