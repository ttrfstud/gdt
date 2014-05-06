var isdef = require('./isdef');

function lenequiv(equiv) {
  var ihash, jhash;
  var ilen, jlen, elen, len;
  var i;

  ilen = 0;
  jlen = 0;
  elen = equiv.length;

  ihash = {};
  jhash = {};

  for (i = 0; i < elen; i++) {
    if (!isdef(ihash[equiv[i].i])) {
      ihash[equiv[i].i] = 1;

      ilen++;
    }

    if (!isdef(jhash[equiv[i].j])) {
      jhash[equiv[i].j] = 1;

      jlen++;
    }
  }

  if (jlen > ilen) {
    len = ilen;
  } else {
    len = jlen;
  }

  return len;
}

module.exports = lenequiv;