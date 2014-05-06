var recalculateequiv = require('../recalculateequiv');

describe('recalculateequiv', function () {
  // see sw tests, this is just alias

  it('configuration test', function (done) {
    var fn;
    var seq1;
    var seq2;

    var simfunc;
    var gss;


    fn = function () {
      return 1;
    };

    seq1 = seq2 = [2];

    simfunc = gss = fn;

    recalculateequiv(seq1, seq2, simfunc, gss);
    done();
  });
});