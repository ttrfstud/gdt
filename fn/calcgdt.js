var caperc = require('./caperc');
var makeeqseq = require('./makeeqseq');

function calcgdt(seq1, seq2, equiv, rmsdc) {
  var num;
  var perc;
  var rmsdloc;
  var rmsdall;
  var eqseq1, eqseq2;

  var res;

  eqseq1 = makeeqseq(seq1, equiv.exp);
  eqseq2 = makeeqseq(seq2, equiv.tgt);

  res = {
    num: equiv.len,
    perc: caperc(seq1, seq2, equiv),
    rmsdloc: rmsdc(eqseq1, eqseq2),
    rmsdall: rmsdc(seq1, seq2)
  };
}

module.exports  = calcgdt;