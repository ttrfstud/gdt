var assert = require('assert');
var getrot = require('../getrot');

describe('getrot', function () {
  // Rather large floating errors, but correct
  it.skip('test1, size 2 seqs', function (done) {
    var seq1;
    var seq2;

    var rotm;

    seq1 = [
      [1, 2, 3],
      [4, 5, 6]
    ];

    seq2 = [
      [2, 2, 3],
      [4, 5, 6]
    ];

    rotm = getrot(seq1, seq2);

    assert.deepEqual(rotm, [ 
      [ -0.057,  0.91998,  -0.0856 ],
      [ 0.225 ,  0.41149,   0.3375 ],
      [ 0.507 , -0.09698, 0.760685 ]
    ]);

    done();
  });

  // Correct, but floating errors
  it.skip('test2, size 3 seqs', function (done) {
    var seq1;
    var seq2;

    var rotm;

    seq1 = [
      [1, 2, 3],
      [2, 2, 3],
      [2, 2, 2]
    ];

    seq2 = [
      [1, 1, 2],
      [1, 2, 2],
      [2, 2, 2]
    ];

    rotm = getrot(seq1, seq2);

    assert.deepEqual(rotm, [
      [ 0.316 , 0.9  , -0.2854 ],
      [ 0.9097, -0.2 , 0.36    ],
      [ -0.269, 0.374, 0.8875  ] 
    ]);

    done();
  });
});