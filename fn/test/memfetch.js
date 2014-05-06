var assert = require('assert');
var memfetch = require('../memfetch');

describe('memfetch', function () {
  it('test1, all of different length', function (done) {
    var memory;

    memory = [
      { len: 1 },
      { len: 50 },
      { len: 18 },
      { len: 19 },
      { len: 83 },
      { len: 30 }
    ];

    assert.deepEqual(memfetch(memory), { len: 83 });

    done();
  });

  it('test2, some of the same length', function (done) {
    var memory;

    memory = [
      { len: 29 },
      { len: 3 },
      { len: 3 },
      { len: 49 },
      { len: 48 },
      { len: 49, pos: 2 }
    ];

    assert.deepEqual(memfetch(memory), { len: 49, pos: 2 });

    done();
  });
});