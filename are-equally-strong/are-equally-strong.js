const areEquallyStrong = (yL, yR, fL, fR) => {
  return yL + yR === fL + fR && (yL === fL || yL === fR);
};

export default areEquallyStrong;
