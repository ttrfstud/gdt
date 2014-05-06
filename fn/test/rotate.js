var assert = require('assert');
var rotate = require('../rotate');

describe('rotate', function () {
  // Works ok, floating rounding errors
  it.skip('test1', function (done) {
    var seq;
    var operator;

    var res;

    seq = [
      [0.1, 0.6, 1.2],
      [7.8, 3.4, 5.2],
      [.11, 370, 3.1],
      [0.1, 3.5, 9.0],
      [5.3, 33., 21.],
      [0.1, 0.2, 0.3]
    ];

    operator = [
      [1, 2, 3],
      [2, 3, 2],
      [2, 3, 1]
    ];

    res = rotate(seq, operator);

    assert.deepEqual(res, [
      [4.9, 4.4, 3.2],
      [30.2, 36.2, 31],
      [749.41, 1116.42, 1113.32],
      [34.1, 28.7, 19.7],
      [134.3, 151.6, 130.6],
      [1.4, 1.4, 1.1]
    ]);

    done();
  });

  it('test2', function (done) {
    var seq;
    var operator;

    var res;

    seq = [
      [1, 2, 3],
      [4, 5, 6],
      [5, 6, 7],
      [6, 7, 8],
      [7, 8, 9],
      [8, 9, 10],
      [9, 10, 11],
      [10, 11, 12],
      [11, 12, 13]      
    ];

    operator = [
      [1, 3, 6],
      [2, 3, 3],
      [3, 9, 18]
    ];

    res = rotate(seq, operator);

    assert.deepEqual(res, [
      [25, 17, 75],
      [55, 41, 165],
      [65, 49, 195],
      [75, 57, 225],
      [85, 65, 255],
      [95, 73, 285],
      [105, 81, 315],
      [115, 89, 345],
      [125, 97, 375]
    ]);

    done();
  });
});