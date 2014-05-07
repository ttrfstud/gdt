function addequivlen(equiv) {
  var res;

  res = {
    equiv: equiv,
    len: equiv.exp.length
  };

  return res;
}

module.exports = addequivlen;