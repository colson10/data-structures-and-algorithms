const zigzag = (a) => {
  let counter = 0;
  let largest = 0;
  for (let i = 0; i < a.length; i++) {
    counter += 1;
    if (counter > largest) largest = counter;
    if (a[i + 1] && a[i] === a[i + 1]) counter = 0;
    if (
      counter > 1 
      && 
      !((a[i] > a[i - 1] && a[i] > a[i + 1]) || (a[i] < a[i - 1] && a[i] < a[i + 1]))
    ) {
      counter = 1;
    }
  }
  return largest;
};

export default zigzag;
