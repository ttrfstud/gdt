var sw = require('smith-waterman');

function recalculateequiv(seq1, seq2, simfunc, gss) {
  return sw(seq1, seq2, simfunc, gss);
}

module.exports = recalculateequiv;