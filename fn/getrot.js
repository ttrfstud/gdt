function getrot(seq1, seq2) {
  var r;
  var rotm;
  var eigenres;

  var sigma;
  var isigma;

  var w;
  var v;

  seq1 = transpose(seq1);
  seq2 = transpose(seq2);

  r = computer(seq1, seq2);

  /** Identical to part of kabsch algorithm **/
  eigenres = jae(mmult(transpose(r), r), .1);

  w = eigenres.eigenvect;

  eigenvals = beautify(eigenvals);

  sigma = sqrtd(eigenvals);
  isigma = invertd(sigma);

  v = mmult(mmult(r, w), isigma);

  /** end of identical part **/

  rotm = mmult(w, transpose(v));

  return rotm;
}

module.exports = getrot;