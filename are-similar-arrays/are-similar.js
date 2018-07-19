const areSimilar = (a, b) => {
  let swapped = false;
  let temp = null;
  let checker = null;
  
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      if (!swapped) {
        temp = a[i];
        a[i] = b[i];
        checker = b[i];
        swapped = true;
      } else if (b[i] === temp && a[i] === checker) {
        a[i] = temp;
        temp = null;
        checker = null;
      } else {
        return false; 
      }
    }
  }
  return true;
};

export default areSimilar;
