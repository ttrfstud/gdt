var transformequiv = require('./transformequiv');

function recalcequiv(seq1, seq2, sw, simfunc, gss) {
  var swres;
  var transfd;

  swres = sw(seq1, seq2, gss, simfunc);

  console.log(swres);
  transfd = transformequiv(swres);
  console.log(transfd);

  return transfd;
}

module.exports = recalcequiv;