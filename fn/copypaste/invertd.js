function invertd(diagm) {
  var mres;
  var i, j;
  var len;

  len = diagm.length;

  mres = [];

  for (i = 0; i < len; i++) {
    for (j = 0; j < len; j++) {
      if (!mres[i]) {
        mres[i] = [];
      }

      if (i !== j) {
        mres[i][j] = 0;
      } else {
        mres[i][j] = 1 / diagm[i][j];
      }
    }
  }

  return mres;
}

module.exports = invertd;