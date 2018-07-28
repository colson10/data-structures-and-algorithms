'use strict';

const variableName = (name) => {
  for (let i = 0; i < name.length; i++) {
    if (i === 0 && !/[a-zA-Z_]/g.test(name[i])) {
      return false;
    } else if (!/[a-zA-Z0-9_]/g.test(name[i])) {
      return false;
    }
  }
  return true;
};

export default variableName;
