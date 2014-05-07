var assert = require('assert');
var superpose = require('../superpose');

describe('superpose', function () {
  it('test1', function (done) {
    var seq1;
    var seq2;

    var equiv;

    var getrot;

    var res;

    getrot = function (s1, s2) {
      assert.deepEqual(s1, [
        [2, 3, 3],
        [3, 4, 4]
      ]);

      assert.deepEqual(s2, [
        [1, 2, 2],
        [2, 1, 1]
      ]);

      return [[2, 0, 0], [0, 2, 0], [0, 0, 2]];
    };

    seq1 = [
      [ 1, 2, 3 ],
      [ 2, 3, 3 ],
      [ 3, 3, 3 ],
      [ 3, 4, 4 ]
    ];

    seq2 = [
      [ 1, 2, 2 ],
      [ 2, 2, 3 ],
      [ 2, 1, 1 ],
      [ 1, 1, 1 ]
    ];

    equiv = {
      equiv: {
        tgt: [0, 2],
        exp: [1, 3]
      }
    };

    res = superpose(seq1, seq2, equiv, getrot);

    assert.deepEqual(res, {
      seq1: [
        [2, 4, 6],
        [4, 6, 6],
        [6, 6, 6],
        [6, 8, 8]
      ],
      seq2: [
        [2, 4, 4],
        [4, 4, 6],
        [4, 2, 2],
        [2, 2, 2]
      ]
    });

    done();
  });

  it('test2', function (done) {
    var seq1;
    var seq2;

    var equiv;

    var getrot;

    var res;

    getrot = function (s1, s2) {
      assert.deepEqual(s1, [
        [2, 3, 3],
      ]);

      assert.deepEqual(s2, [
        [2, 1, 1]
      ]);

      return [[3, 0, 0], [0, 3, 0], [0, 0, 3]];
    };

    seq1 = [
      [ 1, 2, 3 ],
      [ 2, 3, 3 ],
    ];

    seq2 = [
      [ 2, 1, 1 ],
      [ 1, 1, 1 ]
    ];

    equiv = {
      equiv: {
        tgt: [0],
        exp: [1]
      }
    };

    res = superpose(seq1, seq2, equiv, getrot);

    assert.deepEqual(res, {
      seq1: [
        [3, 6, 9],
        [6, 9, 9]
      ],
      seq2: [
        [6, 3, 3],
        [3, 3, 3]
      ]
    });

    done();
  });
});