var transformequiv = require('./transformequiv');

function recalculateequiv(seq1, seq2, sw, simfunc, gss) {
  var swres;
  var transfd;

  swres = sw(seq1, seq2, simfunc, gss);
  transfd = transformequiv(swres);

  return transfd;
}

module.exports = recalculateequiv;