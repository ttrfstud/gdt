var caperc = require('./caperc');
var makeeqseq = require('./makeeqseq');

var transpose = require('transpose');

function calcgdt(seq1, seq2, equiv, rmsdc) {
  var num;
  var perc;
  var rmsdloc;
  var rmsdall;
  var eqseq1, eqseq2;

  var res;

  eqseq1 = makeeqseq(seq1, equiv.equiv.exp);
  eqseq2 = makeeqseq(seq2, equiv.equiv.tgt);

  console.log('11', eqseq1, equiv);
  console.log('22', eqseq2);

  res = {
    num: equiv.len,
    perc: caperc(seq1, seq2, equiv),
    rmsdloc: rmsdc(transpose(eqseq1), transpose(eqseq2)),
    rmsdall: rmsdc(transpose(seq1), transpose(seq2))
  };

  return res;
}

module.exports  = calcgdt;