var assert = require('assert');
var memcond = require('../memcond');

describe('memcond', function () {
  it('test1, short', function (done) {
    var memory;

    memory = [{}, {}];

    assert(memcond(memory));

    memory = [{}, {}, {}, {}, {}, {}, {}];

    assert(memcond(memory));

    done();
  });

  it('test2, strictly monotonic', function (done) {
    var memory;

    memory = [
      {len: 1},
      {len: 2},
      {len: 3},
      {len: 4},
      {len: 5},
      {len: 6},
      {len: 7},
      {len: 8},
    ];

    assert(memcond(memory));

    done();
  });

  it('test3, weak monotonic', function (done) {
    var memory;

    memory = [
      {len: 1},
      {len: 2},
      {len: 2},
      {len: 4},
      {len: 5},
      {len: 5},
      {len: 7},
      {len: 8},
    ];

    assert(memcond(memory));

    done();
  });

  it('test4, equal', function (done) {
    var memory;

    memory = [
      {len: 4},
      {len: 4},
      {len: 4},
      {len: 4},
      {len: 4},
      {len: 4},
      {len: 4},
      {len: 4},
    ];

    assert.equal(memcond(memory), false);

    done();
  });

  it('test5, decreasing anywhere', function (done) {
    var memory;

    memory = [
      {len: 4},
      {len: 4},
      {len: 4},
      {len: 4},
      {len: 3},
      {len: 4},
      {len: 4},
      {len: 4},
    ];

    assert.equal(memcond(memory), false);

    done();
  });

  it('test5, decreasing anywhere 2', function (done) {
    var memory;

    memory = [
      {len: 4},
      {len: 4},
      {len: 4},
      {len: 4},
      {len: 4},
      {len: 4},
      {len: 4},
      {len: 2},
    ];

    assert.equal(memcond(memory), false);

    done();
  });


});