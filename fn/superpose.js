var kabsch = require('kabsch');

/** list of initial equivalencies comes in format:
  { tgt: [], exp: [] }, where each array contains indices of seq positions
  that are equivalent in tgt and exp, correspondingly  
**/
function superpose(seq1, seq2, equiv) {
  var eqseq1, eqseq2;
  var rot;

  var res;

  eqseq1 = makeeqseq(seq1, equiv.equiv.exp); // i
  eqseq2 = makeeqseq(seq2, equiv.equiv.tgt); // j !

  /** must be of same len ! **/

  rot = getrot(eqseq1, eqseq2);

  seq1 = rotate(seq1, rot);
  seq2 = rotate(seq2, rot);

  res = {
    seq1: seq1,
    seq2: seq2
  };

  return res;
}

module.exports = superpose;