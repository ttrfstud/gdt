function makeeqseq(seq, idc) {
  var idclen;
  var i;
  var eqseq;

  idclen = idc.length;
  eqseq = [];

  for (i = 0; i < idclen; i++) {
    eqseq[i] = seq[idc[i]];
  }

  return eqseq;
}

module.exports = makeeqseq;