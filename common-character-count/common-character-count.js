const commonCharacterCount = (s1, s2) => {
  const map = new Map();
  
  for (let i = 0; i < s1.length; i++) {
    if (!map[s1[i]]) {
      map[s1[i]] = 1;
    } else {
      map[s1[i]] += 1;
    }
  }
  
  let counter = 0;
  
  for (let j = 0; j < s2.length; j++) {
    if (map[s2[j]] > 0) {
      counter += 1;
      map[s2[j]] -= 1;
    }
  }
  return counter;
};

export default commonCharacterCount;
