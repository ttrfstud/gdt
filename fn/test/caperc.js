var assert = require('assert');
var caperc = require('../caperc');

describe('caperc', function () {
  it('test1', function (done) {
    var equiv;
    var seq1;
    var seq2;

    seq1 = [ 1, 2, 3 ];
    seq2 = [ 2, 4 ];

    equiv = { len: 10 };

    assert.equal(caperc(seq1, seq2, equiv), 4);

    done();
  });

  it('test2', function (done) {
    var equiv;
    var seq1;
    var seq2;

    seq1 = [ 1, 3, 4, 5, 4, 50 ];
    seq2 = [ 3, 5, 56, 5 ];

    equiv = { len: 100 };

    assert.equal(caperc(seq1, seq2, equiv), 20);  

    done();
  });
});
