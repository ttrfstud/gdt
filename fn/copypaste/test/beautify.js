var assert = require('assert');
var beautify = require('../beautify');

describe('beautify', function () {
  it('test1, 2x2', function (done) {
    var m;

    m = [
      [1, 2],
      [3, 4]
    ];

    assert.deepEqual(beautify(m), [
      [1, 0],
      [0, 4]
    ]);

    assert.deepEqual(m, [
      [1, 2],
      [3, 4]
    ]);

    done();
  });

  it('test2, 3x3', function (done) {
    var m;

    m = [
      [1, 2, 3],
      [3, 4, 5],
      [5, 6, 7]
    ];

    assert.deepEqual(beautify(m), [
      [1, 0, 0],
      [0, 4, 0],
      [0, 0, 7]
    ]);

    assert.deepEqual(m, [
      [1, 2, 3],
      [3, 4, 5],
      [5, 6, 7]
    ]);

    done();
  });
});