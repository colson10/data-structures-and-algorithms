const sherlockAndAnagrams = (s) => {
  const subStringFinder = (str) => {
    const map = new Map();
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        const sub = str.slice(i, j);
        if (map[sub]) {
          map[sub] += 1;
        } else {
          map[sub] = 1;
        }
      }
    }
    return map;
  };
  
  const smap = subStringFinder(s);
  const sArr = [];
  
  Object.keys(smap).map((item) => {
    for (let i = 0; i < smap[item]; i++) {
      sArr.push(item);
    }
    return undefined;
  });
  
  const sorted = sArr.map(item => item.split('').sort().join(''));
  
  const resMap = new Map();
  
  for (let i = 0; i < sorted.length; i++) {
    if (resMap[sorted[i]]) {
      resMap[sorted[i]] += 1;
    } else {
      resMap[sorted[i]] = 1;
    }
  }
  
  const factorialize = (num) => {
    let results = 1;
    for (let i = 2; i <= num; i++) {
      results *= i;
    }
    return results;
  };
  
  let count = 0;
  
  Object.keys(resMap).map((item) => {
    if (resMap[item] > 1) {
      const top = factorialize(resMap[item]);
      const bottom = 2 * factorialize(resMap[item] - 2);
      
      count += (top / bottom);
    }
    return undefined;
  });
  
  return count;
};

export default sherlockAndAnagrams;
