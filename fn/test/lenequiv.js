var assert = require('assert');
var lenequiv = require('../lenequiv');

describe('lenequiv', function () {
  it('test1', function (done) {
    var equiv;

    equiv = [
      {i: 7, j: 7},
      {i: 6, j: 6},
      {i: 5, j: 6},
      {i: 4, j: 6},
      {i: 4, j: 5},
      {i: 3, j: 5},
    ];

    assert.equal(lenequiv(equiv), 3);

    done();
  }); 

  it('test2', function (done) {
    var equiv;

    equiv = [
      {i: 4, j: 4},
      {i: 4, j: 3},
      {i: 4, j: 2},
      {i: 4, j: 1},
      {i: 4, j: 0},
    ];

    assert.equal(lenequiv(equiv), 1);
    done();
  });

  it('test3', function (done) {
    var equiv;

    equiv = [
      {i: 4, j: 4},
      {i: 3, j: 3},
      {i: 2, j: 2},
      {i: 1, j: 1},
      {i: 0, j: 0}
    ];

    assert.equal(lenequiv(equiv), 5);

    done();
  });
});