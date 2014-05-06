var assert = require('assert');
var memupd = require('../memupd');

describe('memupd', function () {
  it('test1, not full', function (done) {
    var memory;
    var equiv;

    var res;

    equiv = [
      {i: 3, j: 3},
      {i: 2, j: 2},
      {i: 1, j: 1},
      {i: 0, j: 1}
    ];

    memory = [
      {len: 1},
      {len: 2},
      {len: 3}
    ];

    res = memupd(memory, equiv);

    assert.deepEqual(res, [
      {len: 1},
      {len: 2},
      {len: 3},
      {len: 3, equiv: equiv }
    ])

    assert.deepEqual(memory, [
      {len: 1},
      {len: 2},
      {len: 3}
    ]);

    done();
  });

  it('test2, full', function (done) {
    var memory;
    var equiv;

    var res;

    equiv = [
      {i: 3, j: 3},
      {i: 2, j: 2},
      {i: 1, j: 1},
      {i: 0, j: 1}
    ];

    memory = [
      {len: 14},
      {len: 26},
      {len: 34},
      {len: 41},
      {len: 52},
      {len: 68},
      {len: 75},
      {len: 81}
    ];

    res = memupd(memory, equiv);

    assert.deepEqual(res, [
      {len: 26},
      {len: 34},
      {len: 41},
      {len: 52},
      {len: 68},
      {len: 75},
      {len: 81},
      {len: 3, equiv: equiv }
    ])

    assert.deepEqual(memory, [
      {len: 14},
      {len: 26},
      {len: 34},
      {len: 41},
      {len: 52},
      {len: 68},
      {len: 75},
      {len: 81}
    ]);

    done();
  });
});