var kabsch = require('kabsch');
var caperc = require('./caperc');
var makeeqseq = require('./makeeqseq');

function calcgtd(seq1, seq2, equiv) {
  var num;
  var perc;
  var rmsdloc;
  var rmsdall;
  var eqseq1, eqseq2;

  var res;

  eqseq1 = makeeqseq(seq1, equiv);
  eqseq2 = makeeqseq(seq2, equiv);

  res = {
    num: equiv.len;
    perc: caperc(seq1, seq2, equiv),
    rmsdloc: kabsch(eqseq1, eqseq2),
    rmsdall: kabsch(seq1, seq2);
  }
}

module.exports  = calcgtd;