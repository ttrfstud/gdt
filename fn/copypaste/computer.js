var mmult = require('mmult');
var transpose = require('transpose');

function computer(seq1, seq2) {
  return mmult(seq2, transpose(seq1));
}

module.exports = computer;