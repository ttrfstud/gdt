var dist = require('./dist');

function makesimfunc(cutoff) {
  return function simfunc(seq1pos, seq2pos) {
    console.log(dist(seq1pos, seq2pos), cutoff);

    if (dist(seq1pos, seq2pos) < cutoff) {
      console.log('s');
      return 1;
    } else {
      return -1/3;
    }
  };
}

module.exports = makesimfunc;