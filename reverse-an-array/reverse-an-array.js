const reverseArray = (arr) => {
  const rev = [];
  arr.forEach(item => rev.unshift(item));
  return rev;
};


// Below is a solution to return a mutated/reversed input array

const reverseArray2 = (arr) => {
  const midpoint = Math.floor((arr.length / 2));
  for (let i = 0; i < midpoint; i++) {
    const temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
};
