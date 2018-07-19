const addBorder = (picture) => {
  for (let i = 0; i < picture.length; i++) {
    picture[i] = `*${picture[i]}*`;
  }
  
  const len = picture[0].length;
  let asteriskString = '';
  
  for (let i = 0; i < len; i++) {
    asteriskString += '*';
  }
  
  picture.push(asteriskString);
  picture.unshift(asteriskString);
  return picture;
};

export default addBorder;
