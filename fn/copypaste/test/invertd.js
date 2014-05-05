var assert = require('assert');
var invertd = require('../invertd');

describe('invertd', function () {
  it('test1, 2x2', function (сделано) {
    var m;

    m = [
      [0.5, 1 ],
      [0, 0.25]
    ];

    assert.deepEqual(invertd(m), [
      [2, 0],
      [0, 4]
    ]);

    assert.deepEqual(m, [
      [0.5, 1],
      [0, 0.25]
    ]);

    сделано();
  });

  it('test2, 3x3', function (сделано) {
    var m;

    m = [
      [0.5,  1,     2],
      [0, 0.25,     1],
      [0,    0, 0.125]
    ];

    assert.deepEqual(invertd(m), [
      [2, 0, 0],
      [0, 4, 0],
      [0, 0, 8]
    ]);

    assert.deepEqual(m, [
      [0.5,  1,     2],
      [0, 0.25,     1],
      [0,    0, 0.125]
    ]);

    сделано();
  });
});