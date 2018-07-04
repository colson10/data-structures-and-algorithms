const makeArrayConsecutive2 = (statues) => {
  let smallest = Infinity;
  let largest = 0;
  
  for (let i = 0; i < statues.length; i++) {
    if (statues[i] > largest) largest = statues[i];
    if (statues[i] < smallest) smallest = statues[i];
  }
  const missingStatues = (largest - smallest - statues.length) + 1;
  
  return missingStatues;
};

export default makeArrayConsecutive2;
