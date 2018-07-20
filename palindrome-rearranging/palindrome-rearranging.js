const palindromeRearranging = (inputString) => {
  const map = new Map();
  let results = true;
  for (let i = 0; i < inputString.length; i++) {
    if (!map[inputString[i]]) {
      map[inputString[i]] = 1;
    } else {
      map[inputString[i]] += 1;
    }
  }
  let oddNums = 0;
  Object.keys(map).forEach((item) => {
    if (results === false) return;
    if (map[item] % 2 === 1) {
      oddNums += 1;
      if (oddNums > 1) {
        results = false;
      }
    }
  });
  return results;
};

export default palindromeRearranging;
