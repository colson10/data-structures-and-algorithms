'use strict';

const leftJoin = (hash1, hash2) => {
  if (!hash1) return null;
  
  const map = new Map();

  Object.keys(hash1).forEach((key) => {
    map[key] = { synonym: hash1[key], antonym: null };
  });

  if (hash2) {
    Object.keys(hash2).forEach((key) => {
      if (map[key]) {
        map[key].antonym = hash2[key];
      }
    });
  }
  return map;
};

export default leftJoin;
