var transformequiv = require('./transformequiv');

function recalcequiv(seq1, seq2, sw, simfunc, gss) {
  var swres;
  var transfd;

  swres = sw(seq1, seq2, gss, simfunc);

  transfd = transformequiv(swres);

  return transfd;
}

module.exports = recalcequiv;