var jae = require('jacobi-eigenvalue');
var transpose = require('transpose');
var mmult = require('mmult');

var computer = require('./copypaste/computer');
var beautify = require('./copypaste/beautify');
var sqrtd = require('./copypaste/sqrtd');
var invertd = require('./copypaste/invertd');

function getrot(seq1, seq2) {
  var r;
  var rotm;
  var eigenres;

  var sigma;
  var isigma;

  var eigenvals;

  var w;
  var v;

  seq1 = transpose(seq1);
  seq2 = transpose(seq2);

  r = computer(seq1, seq2);

  /** Identical to part of kabsch algorithm **/
  eigenres = jae(mmult(transpose(r), r), .1);

  w = eigenres.vect;
  eigenvals = eigenres.vals;

  eigenvals = beautify(eigenvals);

  sigma = sqrtd(eigenvals);
  isigma = invertd(sigma);

  console.log(isigma);

  v = mmult(mmult(r, w), isigma);

  /** end of identical part **/

  rotm = mmult(w, transpose(v));

  return rotm;
}

module.exports = getrot;