const validate = (n) => {
  const arr = n.toString().split('');
  for (let i = arr.length - 2; i >= 0; i -= 2) {
    let value = arr[i] * 2;
    if (value > 9) value -= 9;
    arr[i] = value.toString();
  }
  
  let sum = 0;
  for (let j = 0; j < arr.length; j++) {
    sum += parseInt(arr[j]);
  }
  
  return sum % 10 === 0;
};

export default validate;
