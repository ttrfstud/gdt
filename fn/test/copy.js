var assert = require('assert');
var copy = require('../copy');

describe('copy', function () {
  it('test1, empty', function (done) {
    var arr;

    arr = [];

    assert.deepEqual(copy(arr), []);
    assert.notEqual(copy(arr), arr);

    done();
  });

  it('test2, not empty 1', function (done) {
    var arr;

    arr = [1, 3, 5, 5];

    assert.deepEqual(copy(arr), [1, 3, 5, 5]);
    assert.notEqual(copy(arr), arr);

    done();
  });

  it('test3, not empty 2', function (done) {
    var arr;

    arr = [2, 4, 1];

    assert.deepEqual(copy(arr), [2, 4, 1]);
    assert.notEqual(copy(arr), arr);

    done();
  });
});