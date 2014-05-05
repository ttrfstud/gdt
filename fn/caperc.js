function caperc(seq1, seq2, equiv) {
  return 2 * equiv.len / (seq1.length + seq2.length);
}

module.exports = caperc;