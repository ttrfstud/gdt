function lenequiv(equiv) {
  var hash;
  var len, elen;
  var i;

  len = 0;
  elen = equiv.length;

  for (i = 0; i < elen; i++) {
    if (!isdef(hash[equiv[i].i])) {
      hash[equiv[i].i] = 1;
      len++;
    }
  }

  return len;
}

module.exports = lenequiv;