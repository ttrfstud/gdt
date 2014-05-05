function makesimfunc(cutoff) {
  return function simfunc(seq1pos, seq2pos) {
    if (dist(seq1pos, seq2pos) < cutoff) {
      return 1;
    } else {
      return -1/3;
    }
  };
}

module.exports = makesimfunc;