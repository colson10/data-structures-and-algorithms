const checkPalindrome = (inputString) => {
  const midpoint = Math.floor(inputString.length / 2);
  
  for (let i = 0; i <= midpoint; i++) {
    if (inputString[i] !== inputString[inputString.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

export default checkPalindrome;

