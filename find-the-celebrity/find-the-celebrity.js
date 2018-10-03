export default (knows) => {
  // knows returns a bool for who knows who: knows(0, 1) returns true/false
  return (n) => {
    const map = new Map();
      
    for (let i = 0; i < n; i++) {
      map[i] = [];
      for (let j = 0; j < n; j++) {
        if (knows(i, j)) {
          map[i].push(j);
        }
      }
    }
    const possible = [];
    Object.keys(map).map((item) => {
      if (map[item].length < 2) {
        possible.push(Number(item));
      }
      return undefined;
    });
      
    let results = -1;
      
    possible.map((poss) => {
      let flag = true;
          
      Object.keys(map).map((item) => {
        if (map[item].indexOf(poss) === -1) {
          flag = false;
        }
        return undefined;
      });
          
      if (flag) {
        results = poss;
      }
      return undefined;
    });
      
    return results;
  };
};
