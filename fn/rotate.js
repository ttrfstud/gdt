function rotate(seq, rotm) {
  var len;
  var i;

  len = seq.length;

  for (i = 0; i < len; i++) {
    seq[i] = mmult(rotm, transpose(seq[i]));
  }

  return seq;
}