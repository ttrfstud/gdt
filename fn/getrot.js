function getrot(seq1, seq2) {
  var r;
  var rotm;
  var eigenres;

  var w;
  var v;

  r = computer(seq1, seq2);
  eigenres = jae(mmult(transpose(r), r), .1); // TODO: extract?

  w = eigenres.eigenvect;
}

module.exports = getrot;