var assert = require('assert');
var calcgdt = require('../calcgdt');

describe('calcgdt', function () {
  it('test1', function (done) {
    var seq1;
    var seq2;

    var equiv;
    var rmsdc;

    rmsdc = function () {
      return 38;
    };

    equiv = {
      equiv: {
        tgt: [1, 2, 3, 4, 5, 1, 1],
        exp: [0, 1, 2, 4, 2, 1, 1]
      },
      len: 7
    };

    seq1 = 'ABCEDF';
    seq2 = 'АБВГДЕЖЗ';

    res = calcgdt(seq1, seq2, equiv, rmsdc);

    assert.deepEqual(res, {
      num: 7,
      perc: 1,
      rmsdloc: 38,
      rmsdall: 38
    });

    done();  
  });
});