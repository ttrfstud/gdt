var assert = require('assert');
var memupd = require('../memupd');

describe('memupd', function () {
  it('test1, not full', function (done) {
    var memory;
    var equiv;

    var res;

    equiv = {
      len: -60
    };

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
      {len: -60 }
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

    equiv = {
      len: -30
    };

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
      {len: -30 }
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