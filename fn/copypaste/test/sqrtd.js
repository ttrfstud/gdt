var assert = require('assert');
var sqrtd = require('../sqrtd');

describe('sqrtd', function () {
  it('test1, 2x2', function (done) {
    var m;

    m = [
      [1, 2],
      [3, 4]
    ];

    assert.deepEqual(sqrtd(m), [
      [1, 0],
      [0, 2]
    ]);

    assert.deepEqual(m, [
      [1, 2],
      [3, 4]
    ]);

    done();
  });

  it('test2, 4x4', function (done) {
    var m;

    m = [
      [1, 2, 4],
      [2, 4, 5],
      [3, 5, 9]
    ];

    assert.deepEqual(sqrtd(m), [
      [1, 0, 0],
      [0, 2, 0],
      [0, 0, 3]
    ]);

    assert.deepEqual(m, [
      [1, 2, 4],
      [2, 4, 5],
      [3, 5, 9]
    ]);

    done();
  });
});