var mmult = require('mmult');
var transpose = require('transpose');

function rotate(seq, rotm) {
  seq = mmult(rotm, transpose(seq));

  seq = transpose(seq);

  return seq;
}

module.exports = rotate;