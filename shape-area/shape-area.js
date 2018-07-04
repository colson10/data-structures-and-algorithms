const shapeArea = (n) => {
  if (n < 1) return 0;
  
  let across = 1;
  let total = across;
  
  for (let i = 2; i <= n; i++) {
    const temp = total += across;
    across += 2;
    total = temp + across;
  }
  
  return total;
};

export default shapeArea;
