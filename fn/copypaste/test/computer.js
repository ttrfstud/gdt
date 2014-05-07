var assert = require('assert');
var computer = require('../computer');

describe('computer', function () {
  it('test1, 3x2', function (done) {
    var seq1;
    var seq2;

    seq1 = [
      [1, 2],
      [3, 4],
      [5, 6]
    ];

    seq2 = [
      [3, 4],
      [5, 6],
      [7, 8]
    ];

    assert.deepEqual(computer(seq1, seq2), [
      [11, 25, 39],
      [17, 39, 61],
      [23, 53, 83]
    ]);

    done();
  });

  it('test2, 3x4', function (done) {
    var seq1;
    var seq2;

    seq1 = [
      [1, 2, 3, 4],
      [2, 3, 4, 5],
      [5, 4, 3, 2],
    ];

    seq2 = [
      [2, 3, 4, 5],
      [2, 4, 3, 5],
      [3, 2, 4, 5]
    ];

    assert.deepEqual(computer(seq1, seq2), [
      [40, 54, 44],
      [39, 53, 45],
      [39, 53, 45]
    ]);

    done();
  });
});